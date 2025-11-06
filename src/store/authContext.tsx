import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
}

export interface AuthState {
  isAuthenticated: boolean;
  role: "admin" | "user" | null;
  user: User | null;
}

interface AuthContextType extends AuthState {
  login: (email: string, password: string, name?: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  updateProfile: (updates: Partial<User>) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const STORAGE_KEY = "enlighthub_auth";

export function AuthProvider({ children }: { children: ReactNode }) {
  const [authState, setAuthState] = useState<AuthState>({
    isAuthenticated: false,
    role: null,
    user: null,
  });

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setAuthState(parsed);
      } catch (err) {
        console.error("Failed to parse auth state", err);
      }
    }
  }, []);

  const isAdminEmail = (email: string): boolean => {
    const adminEmails = ["admin@theenlighthub.com", "info@theenlighthub.com"];
    return adminEmails.includes(email.toLowerCase()) || email.endsWith("@theenlighthub.com");
  };

  const login = async (email: string, password: string, name?: string) => {
    const role: "admin" | "user" = isAdminEmail(email) ? "admin" : "user";
    const user: User = {
      id: crypto.randomUUID(),
      name: name || email.split("@")[0],
      email,
    };

    const newState: AuthState = {
      isAuthenticated: true,
      role,
      user,
    };

    setAuthState(newState);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newState));
  };

  const signup = async (name: string, email: string, password: string) => {
    await login(email, password, name);
  };

  const logout = () => {
    setAuthState({
      isAuthenticated: false,
      role: null,
      user: null,
    });
    localStorage.removeItem(STORAGE_KEY);
  };

  const updateProfile = (updates: Partial<User>) => {
    if (!authState.user) return;

    const updatedUser = { ...authState.user, ...updates };
    const newState = {
      ...authState,
      user: updatedUser,
    };

    setAuthState(newState);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newState));
  };

  return (
    <AuthContext.Provider value={{ ...authState, login, signup, logout, updateProfile }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
}

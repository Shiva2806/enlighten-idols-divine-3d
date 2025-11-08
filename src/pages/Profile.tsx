import { useState } from "react";
import { useAuth } from "@/store/authContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, Mail, Phone, ShoppingBag } from "lucide-react";
import { toast } from "sonner";

export default function Profile() {
  const { user, role, updateProfile, logout } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || "",
    phone: user?.phone || "",
  });

  const handleSave = () => {
    updateProfile(formData);
    setIsEditing(false);
    toast.success("Profile updated successfully!");
  };

  return (
    <div className="min-h-screen py-20 bg-gradient-to-b from-muted/50 to-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-serif font-bold gold-text mb-2">My Profile</h1>
            <p className="text-muted-foreground">Manage your account settings</p>
          </div>
          <Button 
            onClick={() => {
              logout();
              toast.success("Logged out successfully");
              window.location.href = "/";
            }}
            variant="outline"
            className="border-burgundy text-burgundy hover:bg-burgundy hover:text-white"
          >
            Logout
          </Button>
        </div>

        <div className="space-y-6">
          {/* Profile Info Card */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <User className="w-5 h-5" />
                    Account Information
                  </CardTitle>
                  <CardDescription>Your personal details</CardDescription>
                </div>
                <Badge variant={role === "admin" ? "default" : "secondary"}>
                  {role === "admin" ? "Admin" : "User"}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  disabled={!isEditing}
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="email">
                  <Mail className="w-4 h-4 inline mr-2" />
                  Email
                </Label>
                <Input
                  id="email"
                  value={user?.email}
                  disabled
                  className="mt-2 bg-muted"
                />
              </div>

              <div>
                <Label htmlFor="phone">
                  <Phone className="w-4 h-4 inline mr-2" />
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  disabled={!isEditing}
                  placeholder="Enter your phone number"
                  className="mt-2"
                />
              </div>

              <div className="flex gap-3 pt-4">
                {!isEditing ? (
                  <Button onClick={() => setIsEditing(true)}>Edit Profile</Button>
                ) : (
                  <>
                    <Button onClick={handleSave}>Save Changes</Button>
                    <Button
                      variant="outline"
                      onClick={() => {
                        setIsEditing(false);
                        setFormData({ name: user?.name || "", phone: user?.phone || "" });
                      }}
                    >
                      Cancel
                    </Button>
                  </>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Orders Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5" />
                My Orders
              </CardTitle>
              <CardDescription>View your order history</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12">
                <ShoppingBag className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
                <p className="text-muted-foreground mb-4">Order history coming soon</p>
                <p className="text-sm text-muted-foreground">
                  Your WhatsApp orders will be tracked here in future updates
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

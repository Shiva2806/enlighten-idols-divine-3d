import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-muted/50 to-background">
      <div className="text-center px-4">
        <h1 className="mb-4 text-8xl font-bold font-serif gold-text">404</h1>
        <p className="mb-2 text-2xl font-semibold text-foreground">Page Not Found</p>
        <p className="mb-8 text-muted-foreground">The page you're looking for doesn't exist.</p>
        <Link to="/">
          <Button size="lg" className="font-semibold">
            <Home className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

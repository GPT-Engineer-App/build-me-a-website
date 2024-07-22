import { Home, Package2, DollarSign, Mail, Map, LogIn } from "lucide-react";
import Index from "./pages/Index.jsx";
import Features from "./pages/Features.jsx";
import Auth from "./pages/Auth.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Features",
    to: "/features",
    icon: <Map className="h-4 w-4" />,
    page: <Features />,
  },
  {
    title: "Pricing",
    to: "/#pricing",
    icon: <DollarSign className="h-4 w-4" />,
  },
  {
    title: "Contact",
    to: "/#contact",
    icon: <Mail className="h-4 w-4" />,
  },
  {
    title: "Login/Sign Up",
    to: "/auth",
    icon: <LogIn className="h-4 w-4" />,
    page: <Auth />,
  },
];
import {
  GaugeCircle,
  LucideIcon,
  Home,
  ImagePlus,
  Briefcase,
  Send,
} from "lucide-react";

export const sidebarItems: {
  id: string;
  label: string;
  slug: string;
  icon: LucideIcon;
}[] = [
  {
    id: "dashboard",
    label: "Dashboard",
    slug: "/dashboard",
    icon: GaugeCircle,
  },
  {
    id: "home",
    label: "Home",
    slug: "/home",
    icon: Home,
  },
  {
    id: "media-blogs",
    label: "Media & Blogs",
    slug: "/media-blogs",
    icon: ImagePlus,
  },
  {
    id: "careers",
    label: "Careers",
    slug: "/careers",
    icon: Briefcase,
  },
  {
    id: "contact-us",
    label: "Contact Us",
    slug: "/contact-us",
    icon: Send,
  },
];

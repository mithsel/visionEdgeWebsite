import {
  Megaphone,
  Share2,
  Globe,
  LayoutDashboard,
  Palette,
  Brush,
  PenTool,
  MonitorPlay,
} from "lucide-react";
import type { servicesMenuInterface } from "../interfaces/servicesMenuInterface";

export const servicesMenuData:servicesMenuInterface[] = [
  {
    id: 1,
    title: "Performance Marketing",
    description: "Google Ads & Meta Ads Management",
    icon: Megaphone,
    slug: "performance-marketing",
  },
  {
    id: 2,
    title: "Social Media Management",
    description: "Facebook, Instagram & LinkedIn",
    icon: Share2,
    slug: "social-media-management",
  },
  {
    id: 3,
    title: "Static Website",
    description: "Business & Portfolio Websites",
    icon: Globe,
    slug: "static-website-development",
  },
  {
    id: 4,
    title: "Dynamic Website",
    description: "CMS, Dashboard & Database Apps",
    icon: LayoutDashboard,
    slug: "dynamic-website-development",
  },
  {
    id: 5,
    title: "Logo Design",
    description: "Professional Brand Logos",
    icon: Palette,
    slug: "logo-design",
  },
  {
    id: 6,
    title: "Brand Identity Design",
    description: "Complete Branding Solutions",
    icon: Brush,
    slug: "brand-identity-design",
  },
  {
    id: 7,
    title: "UI/UX Design",
    description: "Modern User Experiences",
    icon: PenTool,
    slug: "ui-ux-design",
  },
  {
    id: 8,
    title: "Graphic Design",
    description: "Posters, Banners & Creatives",
    icon: Brush,
    slug: "graphic-design",
  },
  {
    id: 9,
    title: "Live Stream Setup",
    description: "OBS & Event Streaming Support",
    icon: MonitorPlay,
    slug: "live-stream-setup-support",
  },
];
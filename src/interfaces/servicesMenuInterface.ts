import type { LucideIcon } from "lucide-react";

export interface servicesMenuInterface{
    id:string|number;
    title:string;
    description:string;
    icon:LucideIcon;
    slug:string;
}

interface status{
  label:string;
  icon:LucideIcon;
  description:string
}

interface includes{
  label:string;
  icon:LucideIcon;
  description:string
}

export interface ServicesInterface {
  id: number;
  slug: string;
  title: string;
  tagline: string;
  subtitle: string;
  image: string;
  price: string;

  description: string;
  longDescription: string;

  points: string[];
  includes: includes[];

  technologies?: string[];
  suitableFor: string[];

  benefits?: string[];
  process?: status[];
  stats?: {
    label: string;
    value: string;
  }[];
  note?: string;
  popular?: boolean;
  ctaText: string;
  icon?: LucideIcon;
}
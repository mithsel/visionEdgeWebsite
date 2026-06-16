import { BarChart3, BarChart4, BookOpen, Brush, Bug, CalendarCheck, CalendarClock, CheckCircle2, ClipboardCheck, ClipboardList, Code2, Compass, CreditCard, Database, FileCheck, FileCode, FileOutput, FileSearchCorner, FileText, FlaskConical, FolderOpen, Globe, Handshake, Headset, Image, ImageIcon, ImagePlus, LaptopMinimal, LayoutDashboard, LayoutTemplate, Lightbulb, Mail, Megaphone, MessageCircle, MessageSquareMore, MonitorCheck, MonitorPlay, MonitorSmartphone, MousePointerClick, Package, Palette, PaletteIcon, PenTool, Printer, Radio, RefreshCw, Rocket, RouteIcon, Search, Send, Settings, Settings2, Share2, ShieldCheck, Smartphone, TrendingUp, Users, Video, Workflow } from "lucide-react";

import social_media from '../assets/social media.jpg';
import web_design from '../assets/website.png';
import google_meta_ads from '../assets/google_meta_ads.png'
import lauchpad from "../assets/launch_pad.jpg"
import logo_design from "../assets/logo-design.jpg"
import ui_ux from "../assets/ui-ux.png"
import graphis_design from "../assets/graphis-design.png"
import brand_integrity from "../assets/banner-integrity.png"

import live_stream from '../assets/live_stream.jpeg'
import type { ServicesInterface } from "../interfaces/servicesMenuInterface";
import { Route } from "react-router-dom";


export const servicesData:ServicesInterface[] = [
{
  id: 1,
  slug: "performance-marketing",
  title: "Performance Marketing",
  tagline: "Performance Marketing Services",
  subtitle: "Google Ads & Meta Ads Management",
  image: social_media,
  price: "₹10,000",
  popular: true,
  ctaText: "Start Advertising",

  description:
    "Drive quality leads, website traffic, and sales through data-driven advertising campaigns.",

  longDescription:
    "Our performance marketing service helps businesses generate qualified leads through strategic Google Ads and Meta Ads campaigns. We create, monitor, and optimize campaigns to maximize ROI while reducing wasted ad spend.",

  points: [
    "Google Search Ads",
    "Meta Ads Management",
    "Lead Generation Campaigns",
    "Conversion Optimization"
  ],

  includes: [
  {
    label: "Campaign Setup & Management",
    icon: Settings,
    description:
      "Create, configure, and manage advertising campaigns across platforms to ensure optimal performance.",
  },
  {
    label: "Audience Research",
    icon: Users,
    description:
      "Identify and analyze target audiences based on demographics, interests, and behaviors for precise targeting.",
  },
  {
    label: "Ad Creative Strategy",
    icon: Lightbulb,
    description:
      "Develop compelling ad concepts, messaging, and creative recommendations to maximize engagement.",
  },
  {
    label: "Conversion Tracking",
    icon: BarChart4,
    description:
      "Implement tracking tools and pixels to measure conversions, leads, and campaign effectiveness accurately.",
  },
  {
    label: "Weekly Reports",
    icon: FileText,
    description:
      "Receive detailed performance reports with key metrics, insights, and actionable recommendations.",
  },
  
],

  suitableFor: [
    "Startups",
    "Educational Institutions",
    "Healthcare Businesses",
    "Real Estate Companies"
  ],

  note:
    "Advertising budget is paid directly to Google and Meta platforms.",

  icon: Megaphone,
  benefits: [
  "Higher Lead Generation",
  "Better Conversion Rates",
  "Reduced Cost Per Acquisition",
  "Improved Return On Investment"
],

process: [
  {
    label: "Research & Analysis",
    icon: Search,
    description:
      "Conduct in-depth market research, competitor analysis, and audience insights to identify growth opportunities.",
  },
  {
    label: "Campaign Planning",
    icon: ClipboardList,
    description:
      "Develop a strategic campaign roadmap with clear objectives, targeting, budget allocation, and KPIs.",
  },
  {
    label: "Ad Creation",
    icon: PenTool,
    description:
      "Design compelling ad creatives and craft engaging copy tailored to your target audience.",
  },
  {
    label: "Optimization",
    icon: TrendingUp,
    description:
      "Continuously monitor performance and optimize campaigns to improve conversions and maximize ROI.",
  },
  {
    label: "Reporting",
    icon: FileText,
    description:
      "Provide transparent reports with actionable insights, performance metrics, and future recommendations.",
  },
],

stats: [
  { value: "250+", label: "Campaigns Managed" },
  { value: "100+", label: "Happy Clients" },
  { value: "300%", label: "ROI Growth" }
]
},
{
  id: 2,
  slug: "social-media-management",
  title: "Social Pulse",
  tagline: "Social Media Management",
  subtitle: "Instagram, Facebook, LinkedIn & YouTube",
  image: google_meta_ads,
  price: "₹6,999",
  popular: true,
  ctaText: "Grow Your Brand",

  description:
    "Build your brand presence and engage your audience across social platforms.",

  longDescription:
    "We help businesses maintain a strong online presence through strategic content planning, post scheduling, audience engagement, and performance tracking.",

  points: [
    "Content Calendar Planning",
    "Audience Engagement",
    "Brand Awareness",
    "Social Media Growth"
  ],

  includes:[
  {
    label: "15 Posts Per Month",
    icon: FileText,
    description:
      "Professionally designed social media posts created and published consistently throughout the month.",
  },
  {
    label: "5 Reels",
    icon: Video,
    description:
      "Engaging short-form video content optimized to increase reach, engagement, and brand visibility.",
  },
  {
    label: "Post Scheduling",
    icon: CalendarClock,
    description:
      "Strategic scheduling and publishing of content at the most effective times for your audience.",
  },
  {
    label: "Community Management",
    icon: MessageCircle,
    description:
      "Monitor interactions, respond to comments and messages, and maintain active audience engagement.",
  },
  {
    label: "Monthly Analytics Report",
    icon: BarChart3,
    description:
      "Detailed monthly performance reports with insights, audience metrics, and growth recommendations.",
  },
],

  suitableFor: [
    "Local Businesses",
    "Educational Institutes",
    "Restaurants",
    "Personal Brands"
  ],

  icon: Share2,
  benefits: [
  "Consistent Brand Presence",
  "Audience Engagement",
  "Organic Growth",
  "Better Customer Relationships"
],

process: [
  {
    label: "Content Planning",
    icon: CalendarCheck,
    description:
      "Develop a content strategy aligned with your brand goals, audience interests, and marketing objectives.",
  },
  {
    label: "Creative Design",
    icon: Palette,
    description:
      "Create visually appealing graphics, videos, and social media assets that capture attention and drive engagement.",
  },
  {
    label: "Publishing",
    icon: Send,
    description:
      "Schedule and publish content across relevant social media platforms at optimal times for maximum reach.",
  },
  {
    label: "Community Engagement",
    icon: MessageCircle,
    description:
      "Interact with followers, respond to comments and messages, and build meaningful relationships with your audience.",
  },
  {
    label: "Performance Analysis",
    icon: BarChart3,
    description:
      "Track key metrics, analyze campaign performance, and identify opportunities to improve future content strategies.",
  },
],

stats: [
  { value: "15+", label: "Posts Per Month" },
  { value: "5+", label: "Reels Per Month" },
  { value: "100%", label: "Brand Consistency" }
]
},
{
  id: 3,
  slug: "static-website-development",
  title: "TechEase Web",
  tagline: "Business & Portfolio Websites",
  subtitle: "Modern Responsive Websites",
  image: web_design,
  price: "₹25,000",
  popular: false,
  ctaText: "Build Website",

  description:
    "Professional responsive websites for businesses and personal brands.",

  longDescription:
    "We create high-performance websites using modern technologies with SEO optimization, responsive design, and fast loading speed.",

  points: [
    "Responsive Design",
    "SEO Friendly Structure",
    "Fast Performance",
    "Modern UI Design"
  ],

  includes: [
    {
    label: "5-10 Pages Website",
    icon: Globe,
    description:
      "Professionally designed multi-page website tailored to showcase your business, services, and brand identity.",
  },
  {
    label: "Mobile Responsive Design",
    icon: Smartphone,
    description:
      "Fully responsive layouts that provide an optimal viewing experience across desktops, tablets, and mobile devices.",
  },
  {
    label: "Contact Form",
    icon: Mail,
    description:
      "Integrated contact forms that allow visitors to easily connect with your business and generate leads.",
  },
  {
    label: "Basic SEO Setup",
    icon: Search,
    description:
      "Essential on-page SEO configuration including metadata, indexing setup, and search engine best practices.",
  },
  {
    label: "Deployment Support",
    icon: Rocket,
    description:
      "Assistance with website deployment, hosting configuration, and go-live support for a smooth launch.",
  },
  ],

  technologies: [
    "React",
    "TypeScript",
    "Tailwind CSS",
    "HTML5",
    "CSS3"
  ],

  suitableFor: [
    "Portfolios",
    "Corporate Websites",
    "Educational Institutions",
    "Startups"
  ],

  icon: Globe,
  benefits: [
  "Professional Online Presence",
  "Mobile Responsive Design",
  "Fast Loading Speed",
  "SEO Friendly Structure"
],

process: [
  {
    label: "Requirement Gathering",
    icon: ClipboardCheck,
    description:
      "Understand business objectives, user needs, and technical requirements to define a clear project scope.",
  },
  {
    label: "UI Design",
    icon: Palette,
    description:
      "Create intuitive wireframes, prototypes, and user interfaces focused on usability and visual appeal.",
  },
  {
    label: "Development",
    icon: Code2,
    description:
      "Build scalable, secure, and high-performance applications using modern technologies and best practices.",
  },
  {
    label: "Testing",
    icon: Bug,
    description:
      "Perform comprehensive testing to identify and resolve bugs, ensuring quality and reliability.",
  },
  {
    label: "Deployment",
    icon: Rocket,
    description:
      "Launch the application to production, configure infrastructure, and ensure a smooth go-live experience.",
  },
],

stats: [
  { value: "5-10", label: "Website Pages" },
  { value: "100%", label: "Responsive Design" },
  { value: "99%", label: "Performance Score" }
]
},
{
  id: 4,
  slug: "dynamic-website-development",
  title: "Dynamic Flow",
  tagline: "CMS & Dashboard Solutions",
  subtitle: "Advanced Business Applications",
  image: lauchpad,
  price: "₹45,000",
  description: "Feature-rich dynamic websites with database integration.",
  longDescription: "Custom web applications with admin dashboards, authentication systems, and database connectivity.",
  points: [
    "CMS Development",
    "Dashboard Creation",
    "Authentication",
    "Database Integration"
  ],
  includes:[
  {
    label: "Admin Dashboard",
    icon: LayoutDashboard,
    description:
      "A centralized dashboard for monitoring, managing, and controlling key aspects of your application.",
  },
  {
    label: "User Management",
    icon: Users,
    description:
      "Manage user accounts, roles, permissions, authentication, and access control efficiently.",
  },
  {
    label: "API Integration",
    icon: Workflow,
    description:
      "Seamless integration with third-party services, payment gateways, external APIs, and business tools.",
  },
  {
    label: "Database Setup",
    icon: Database,
    description:
      "Design and configure a secure, scalable database structure optimized for performance and reliability.",
  },
  {
  label: "Authentication System",
  icon: ShieldCheck,
  description:
    "Secure user authentication with login, registration, password recovery, and role-based access control.",
}
],
  technologies: [
    "React",
    "TypeScript",
    "Redux",
    "Node.js",
    "MongoDB"
  ],
  suitableFor: [
    "Educational Portals",
    "CRM Systems",
    "Business Applications",
    "Enterprise Solutions"
  ],
  ctaText: "Start Development",
  icon: LayoutDashboard,
  benefits: [
  "Scalable Architecture",
  "Admin Dashboard",
  "Automation",
  "Database Integration"
],

process: [
  {
    label: "Planning",
    icon: Lightbulb,
    description:
      "Define project goals, requirements, architecture, and timelines to establish a strong foundation.",
  },
  {
    label: "Database Design",
    icon: Database,
    description:
      "Design efficient, scalable, and secure database structures optimized for performance and data integrity.",
  },
  {
    label: "Development",
    icon: Code2,
    description:
      "Build robust backend services, APIs, and business logic using modern development practices.",
  },
  {
    label: "Integration",
    icon: Workflow,
    description:
      "Connect third-party services, APIs, and frontend applications to create a seamless system experience.",
  },
  {
    label: "Launch",
    icon: Rocket,
    description:
      "Deploy the solution to production, perform final validations, and ensure a successful launch.",
  },
],

stats: [
  { value: "50+", label: "Features Supported" },
  { value: "100%", label: "Customizable" },
  { value: "24/7", label: "Scalable Solution" }
]
} ,
{
  id: 5,
  slug: "logo-design",
  title: "Logo Craft",
  tagline: "Professional Brand Identity",
  subtitle: "Unique Logo Design Services",
  image: logo_design,
  price: "₹3,000",
  description: "Professional logo concepts designed to establish your brand identity.",
  longDescription: "Creative and memorable logo designs tailored to your business vision and goals.",
  points: [
    "Custom Logo Concepts",
    "Brand Recognition",
    "Modern Design",
    "High Resolution Files"
  ],
  includes: [
  {
    label: "3 Logo Concepts",
    icon: Lightbulb,
    description:
      "Receive three unique logo concepts designed to reflect your brand identity and vision.",
  },
  {
    label: "PNG Files",
    icon: Image,
    description:
      "High-quality PNG logo files with transparent backgrounds for digital and marketing use.",
  },
  {
    label: "SVG Files",
    icon: FileCode,
    description:
      "Scalable vector logo files that maintain perfect quality at any size for web and print applications.",
  },
  {
    label: "Source Files",
    icon: FolderOpen,
    description:
      "Editable source files provided for future modifications, branding updates, and professional printing needs.",
  },
  {
  label: "Brand Color Palette",
  icon: Palette,
  description:
    "A carefully selected color palette that complements your logo and helps maintain consistent brand identity across all platforms.",
}
],
  suitableFor: [
    "Startups",
    "Businesses",
    "Creators",
    "Organizations"
  ],
  ctaText: "Design My Logo",
  icon: PaletteIcon,
  benefits: [
  "Unique Brand Identity",
  "Professional Appearance",
  "High Recall Value",
  "Multiple Formats"
],

process: [
  {
    label: "Research",
    icon: Search,
    description:
      "Gather insights, understand project requirements, and analyze industry trends to establish a strong creative direction.",
  },
  {
    label: "Concept Design",
    icon: Lightbulb,
    description:
      "Develop initial design concepts, visual styles, and creative ideas that align with your brand and objectives.",
  },
  {
    label: "Revision",
    icon: RefreshCw,
    description:
      "Refine designs based on feedback, making necessary adjustments to ensure the final output meets expectations.",
  },
  {
    label: "Finalization",
    icon: CheckCircle2,
    description:
      "Polish and prepare the approved design, ensuring quality, consistency, and readiness for delivery.",
  },
  {
    label: "Delivery",
    icon: Package,
    description:
      "Provide the final design files in the required formats along with any supporting assets or documentation.",
  },
],

stats: [
  { value: "3+", label: "Logo Concepts" },
  { value: "100%", label: "Original Design" },
  { value: "4+", label: "File Formats" }
]
},
{
  id: 6,
  slug: "brand-identity-design",
  title: "Brand Forge",
  tagline: "Complete Branding Package",
  subtitle: "Professional Business Branding",
  image: brand_integrity,
  price: "₹5,000",
  description: "Everything required to create a professional and memorable brand.",
  longDescription: "Complete branding solutions including stationery, marketing assets, and visual identity.",
  points: [
    "Business Branding",
    "Visual Identity",
    "Marketing Materials",
    "Professional Assets"
  ],
  includes: [
  {
    label: "Visiting Card Design",
    icon: CreditCard,
    description:
      "Professionally designed business cards that reflect your brand identity and leave a lasting impression.",
  },
  {
    label: "Letterhead Design",
    icon: FileText,
    description:
      "Custom-branded letterhead designs for official documents, proposals, and business communications.",
  },
  {
    label: "Poster Templates",
    icon: ImageIcon,
    description:
      "Editable poster templates designed for promotions, events, announcements, and marketing campaigns.",
  },
  {
    label: "Brochure Design",
    icon: BookOpen,
    description:
      "Creative and informative brochure designs that effectively showcase your products, services, and brand story.",
  },
  {
  label: "Brand Guidelines",
  icon: Palette,
  description:
    "A concise brand guide covering colors, typography, logo usage, and design standards to ensure consistency across all marketing materials.",
}
],
  suitableFor: [
    "New Businesses",
    "Corporate Brands",
    "Agencies",
    "Startups"
  ],
  ctaText: "Build My Brand",
  icon: Brush,
  benefits: [
  "Professional Branding",
  "Consistent Visual Identity",
  "Marketing Ready Assets",
  "Business Credibility"
],

process: [
  {
    label: "Brand Discovery",
    icon: Compass,
    description:
      "Understand your brand identity, values, target audience, and business goals to establish a strong creative foundation.",
  },
  {
    label: "Visual Strategy",
    icon: Palette,
    description:
      "Define the visual direction, color palette, typography, and design principles that best represent your brand.",
  },
  {
    label: "Asset Design",
    icon: PenTool,
    description:
      "Create high-quality branding assets, graphics, and visual materials tailored to your business needs.",
  },
  {
    label: "Review",
    icon: MessageSquareMore,
    description:
      "Collaborate on feedback and revisions to ensure the designs align perfectly with your vision and objectives.",
  },
  {
    label: "Delivery",
    icon: Package,
    description:
      "Provide finalized brand assets and source files in the required formats, ready for digital and print use.",
  },
],

stats: [
  { value: "10+", label: "Brand Assets" },
  { value: "100%", label: "Custom Design" },
  { value: "7 Days", label: "Delivery Time" }
]
},
{
  id: 7,
  slug: "ui-ux-design",
  title: "UI - UX Pro",
  tagline: "Modern User Experience Design",
  subtitle: "Web & Mobile App Design",
  image: ui_ux,
  price: "₹15,000",
  description: "Transform ideas into engaging digital experiences with modern UI/UX design. We design intuitive user journeys, visually compelling interfaces, and interactive prototypes that improve usability and customer retention. By focusing on user behavior, accessibility, and business objectives, we create experiences that are both beautiful and effective. Every screen is carefully crafted to deliver clarity, consistency, and measurable results.",
  longDescription: "User-centered UI/UX solutions that improve usability and customer engagement.",
  points: [
    "Wireframes",
    "User Research",
    "Interactive Prototypes",
    "Design Systems"
  ],
  includes:[
  {
    label: "User Flow Design",
    icon: RouteIcon,
    description:
      "Map out user journeys and interactions to ensure intuitive navigation and a seamless user experience.",
  },
  {
    label: "Wireframes",
    icon: LayoutTemplate,
    description:
      "Create structured wireframes that define layouts, content hierarchy, and functionality before visual design.",
  },
  {
    label: "High Fidelity Screens",
    icon: MonitorSmartphone,
    description:
      "Design polished, pixel-perfect UI screens with branding, typography, colors, and interactive elements.",
  },
  {
    label: "Mobile & Desktop Layouts",
    icon: LaptopMinimal,
    description:
      "Responsive designs optimized for both mobile and desktop devices, ensuring consistency across platforms.",
  },
  {
  label: "Interactive Prototype",
  icon: MousePointerClick,
  description:
    "Clickable prototypes that simulate real user interactions, helping validate user experience before development begins.",
}
],
  suitableFor: [
    "Mobile Apps",
    "Web Applications",
    "Startups",
    "SaaS Products"
  ],
  ctaText: "Design My Product",
  icon: PenTool,
  benefits: [
  "Better User Experience",
  "Higher Conversion Rate",
  "Improved Engagement",
  "Modern Interfaces"
],

process: [
  {
    label: "Research",
    icon: Search,
    description:
      "Analyze user needs, business goals, and market trends to create a user-centered design strategy.",
  },
  {
    label: "Wireframing",
    icon: LayoutTemplate,
    description:
      "Create low-fidelity layouts and user flows to define structure, functionality, and navigation.",
  },
  {
    label: "UI Design",
    icon: Palette,
    description:
      "Design visually engaging interfaces with consistent branding, typography, colors, and components.",
  },
  {
    label: "Prototype",
    icon: MonitorSmartphone,
    description:
      "Build interactive prototypes to validate user experience, interactions, and design concepts before development.",
  },
  {
    label: "Handoff",
    icon: Handshake,
    description:
      "Prepare design specifications, assets, and documentation for a smooth developer handoff and implementation.",
  },
],

stats: [
  { value: "20+", label: "Screens Designed" },
  { value: "100%", label: "Responsive Layouts" },
  { value: "95%", label: "User Satisfaction" }
]
},
{
  id: 8,
  slug: "graphic-design",
  title: "Creative Studio",
  tagline: "Creative Visual Designs",
  subtitle: "Digital & Print Design Services",
  image: graphis_design,
  price: "₹1,000 per design",
  description: "Professional creatives for digital and print marketing.",
  longDescription: "Eye-catching designs that help businesses attract attention and improve brand awareness.",
  points: [
    "Poster Design",
    "Banner Design",
    "Social Media Creatives",
    "Marketing Materials"
  ],
    includes: [
  {
    label: "Custom Designs",
    icon: PenTool,
    description:
      "Unique and professionally crafted designs tailored to your brand, goals, and creative requirements.",
  },
  {
    label: "Print Ready Files",
    icon: Printer,
    description:
      "Production-ready files optimized for high-quality printing with proper dimensions, bleed, and formatting.",
  },
  {
    label: "High Resolution Output",
    icon: ImagePlus,
    description:
      "Deliverables provided in high-resolution formats to ensure sharp, clear, and professional-quality results.",
  },
  {
    label: "Multiple Revisions",
    icon: RefreshCw,
    description:
      "Refinement rounds based on your feedback to ensure the final design meets your expectations perfectly.",
  },
  {
  label: "Multiple File Formats",
  icon: FileOutput,
  description:
    "Receive your designs in multiple formats suitable for digital marketing, social media, printing, and future editing needs.",
}
],
  suitableFor: [
    "Events",
    "Businesses",
    "Marketing Campaigns",
    "Social Media"
  ],
  ctaText: "Create Design",
  benefits: [
  "Strong Visual Appeal",
  "Brand Awareness",
  "Professional Marketing Assets",
  "Higher Engagement"
],

process: [
  {
    label: "Brief Collection",
    icon: FileText,
    description:
      "Gather project requirements, brand guidelines, goals, and preferences to establish a clear creative direction.",
  },
  {
    label: "Concept Design",
    icon: Lightbulb,
    description:
      "Develop initial design concepts and creative ideas that align with your vision and project objectives.",
  },
  {
    label: "Revision",
    icon: RefreshCw,
    description:
      "Refine and improve the design based on feedback, ensuring every detail meets your expectations.",
  },
  {
    label: "Approval",
    icon: CheckCircle2,
    description:
      "Finalize the selected design and obtain approval before preparing the deliverables.",
  },
  {
    label: "Delivery",
    icon: Package,
    description:
      "Provide the completed design files in the required formats, ready for use across digital and print platforms.",
  },
],

stats: [
  { value: "24hrs", label: "Quick Delivery" },
  { value: "100%", label: "Custom Designs" },
  { value: "Unlimited", label: "Creativity" }
]
},
{
  id: 9,
  slug: "live-stream-setup-support",
  title: "LiveStream Pro",
  tagline: "OBS & Event Streaming",
  subtitle: "Professional Live Streaming Services",
  image: live_stream,
  price: "₹1,999",
  description: "Complete live streaming setup assistance for online and offline events.",
  longDescription: "Professional live streaming support for webinars, conferences, launches, and corporate events.",
  points: [
    "OBS Setup",
    "Multi Platform Streaming",
    "Audio Optimization",
    "Video Optimization"
  ],
  includes: [
  {
    label: "Online Setup Assistance",
    icon: MonitorCheck,
    description:
      "Guidance and support for setting up your streaming environment, equipment, and online platforms.",
  },
  {
    label: "OBS Configuration",
    icon: Settings2,
    description:
      "Professional OBS setup including scenes, sources, audio settings, overlays, and streaming destinations.",
  },
  {
    label: "Technical Support",
    icon: Headset,
    description:
      "Dedicated technical assistance to troubleshoot issues and ensure a smooth streaming experience.",
  },
  {
    label: "Event Streaming Guidance",
    icon: Radio,
    description:
      "Expert recommendations and best practices for managing and delivering successful live-streamed events.",
  },
  {
  label: "Multi-Platform Streaming",
  icon: Share2,
  description:
    "Stream simultaneously to platforms like YouTube, Facebook, LinkedIn, and other destinations to maximize audience reach.",
}
],
  suitableFor: [
    "Corporate Events",
    "Webinars",
    "Educational Sessions",
    "Product Launches"
  ],
  ctaText: "Start Streaming",
  icon: MonitorPlay,
  benefits: [
  "Professional Streaming",
  "Multi Platform Support",
  "Technical Assistance",
  "Reliable Setup"
],

process: [
  {
    label: "Requirement Analysis",
    icon: FileSearchCorner,
    description:
      "Understand event objectives, streaming requirements, platforms, audience size, and technical specifications.",
  },
  {
    label: "OBS Setup",
    icon: Settings2,
    description:
      "Configure OBS scenes, sources, overlays, audio settings, transitions, and streaming destinations for optimal performance.",
  },
  {
    label: "Testing",
    icon: FlaskConical,
    description:
      "Perform end-to-end testing of video, audio, internet connectivity, and streaming workflows to ensure a smooth broadcast.",
  },
  {
    label: "Live Event Support",
    icon: Radio,
    description:
      "Monitor and manage the live stream in real time, handling scene switching, troubleshooting, and audience experience.",
  },
  {
    label: "Post Event Review",
    icon: FileCheck,
    description:
      "Analyze stream performance, review technical metrics, gather feedback, and identify improvements for future events.",
  },
],

stats: [
  { value: "15 Days", label: "Support" },
  { value: "4K", label: "Streaming Quality" },
  { value: "100%", label: "Event Coverage" }
]
}
];
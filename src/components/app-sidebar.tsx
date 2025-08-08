import * as React from "react"
import {
  IconCamera,
  IconChartBar,
  IconDashboard,
  IconDatabase,
  IconFileAi,
  IconFileDescription,
  IconFileWord,
  IconFolder,
  IconHelp,
  IconInnerShadowTop,
  IconListDetails,
  IconReport,
  IconSearch,
  IconSettings,
  IconUsers,
} from "@tabler/icons-react"

import { NavDocuments } from "@/components/nav-documents"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { AudioWaveform, Command, GalleryVerticalEnd } from "lucide-react"
import { TeamSwitcher } from "./team-switcher"
import { useNavigate } from "react-router-dom"
import { NavMain } from "./nav-main"
import  DropdownMenuItem from "./ui/dropDownItem"

const data = {
  user: {
    name: "admin",
    email: "admin@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "MRP Tool",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Production Tool",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "SMT Tool",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: IconDashboard,
    },
    {
      title: "Suppliers",
      url: "/",
      icon: IconListDetails,
    },
    {
      title: "Inward",
      url: "/inward",
      icon: IconListDetails,
    },
    {
      title: "Quality Check",
      url: "/quality-check",
      icon: IconListDetails,
    },
    {
      title: "GRN",
      url: "/grn",
      icon: IconListDetails,
    },
    {
      title: "Outward",
      url: "/outward",
      icon: IconListDetails,
    },
    {
      title: "Purchase Indent",
      url: "/purchase-indent",
      icon: IconListDetails,
    },
    {
      title: "Product Management",
      icon: IconFolder,
      children: [
        { title: "Component Type", url: "/component-type" },
        { title: "Material Type", url: "/material-type" },
        { title: "UOM List", url: "/uom-list" },
        { title: "Product List", url: "/product-list" },
      ]
    }
  ]
,  
  navClouds: [
    {
      title: "Capture",
      icon: IconCamera,
      isActive: true,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
    {
      title: "Proposal",
      icon: IconFileDescription,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
    {
      title: "Prompts",
      icon: IconFileAi,
      url: "#",
      items: [
        {
          title: "Active Proposals",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Settings",
      url: "#",
      icon: IconSettings,
    },
    {
      title: "Get Help",
      url: "#",
      icon: IconHelp,
    },
    {
      title: "Search",
      url: "#",
      icon: IconSearch,
    },
  ],
  documents: [
    {
      name: "Data Library",
      url: "#",
      icon: IconDatabase,
    },
    {
      name: "Reports",
      url: "#",
      icon: IconReport,
    },
    {
      name: "Word Assistant",
      url: "#",
      icon: IconFileWord,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const navigate = useNavigate()
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu className="p-2">
        {data.navMain.map((item) => (
  <SidebarMenuItem key={item.title} className="w-full">
    {item.children ? (
      <DropdownMenuItem item={item} />
    ) : (
      <SidebarMenuButton asChild>
        <p
          className="flex items-center gap-2 cursor-pointer px-2 py-1 text-sm hover:bg-muted rounded"
          onClick={() => navigate(item.url)}
        >
          <item.icon className="w-4 h-4" />
          <span>{item.title}</span>
        </p>
      </SidebarMenuButton>
    )}
  </SidebarMenuItem>
))}

        </SidebarMenu>
        {/* <NavMain items={data.navClouds} /> */}

        {/* <NavDocuments items={data.documents} /> */}
        {/* <NavSecondary items={data.navSecondary} className="mt-auto" /> */}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}

import { NavLink, useLocation } from "react-router-dom"
import { type Icon } from "@tabler/icons-react"

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

export function NavMain({
  items,
}: {
  items: {
    title: string
    url: string
    icon?: Icon
  }[]
}) {
  const location = useLocation()

  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2">
        <SidebarMenu>
          {items.map((item) => {
            const isActive = location.pathname === item.url

            return (
              <SidebarMenuItem key={item.title}>
                <NavLink to={item.url} className="w-full">
                  <SidebarMenuButton
                    tooltip={item.title}
                    className={`flex items-center gap-2 w-full duration-200 ease-linear
                      ${isActive
                        ? "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground"
                        : "hover:bg-muted"}`}
                  >
                    {item.icon && <item.icon />}
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </NavLink>
              </SidebarMenuItem>
            )
          })}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}

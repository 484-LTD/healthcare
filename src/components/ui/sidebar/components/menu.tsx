import * as React from "react"
import { cn } from "@/lib/utils"
import type { SidebarBaseProps } from "../types"

export const SidebarMenu = React.forwardRef<HTMLUListElement, SidebarBaseProps>(
  ({ className, ...props }, ref) => (
    <ul
      ref={ref}
      data-sidebar="menu"
      className={cn("flex w-full min-w-0 flex-col gap-1", className)}
      {...props}
    />
  )
)
SidebarMenu.displayName = "SidebarMenu"

export const SidebarMenuItem = React.forwardRef<HTMLLIElement, SidebarBaseProps>(
  ({ className, ...props }, ref) => (
    <li
      ref={ref}
      data-sidebar="menu-item"
      className={cn("group/menu-item relative", className)}
      {...props}
    />
  )
)
SidebarMenuItem.displayName = "SidebarMenuItem"

export const SidebarMenuSub = React.forwardRef<HTMLUListElement, SidebarBaseProps>(
  ({ className, ...props }, ref) => (
    <ul
      ref={ref}
      data-sidebar="menu-sub"
      className={cn(
        "mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l border-sidebar-border px-2.5 py-0.5",
        "group-data-[collapsible=icon]:hidden",
        className
      )}
      {...props}
    />
  )
)
SidebarMenuSub.displayName = "SidebarMenuSub"
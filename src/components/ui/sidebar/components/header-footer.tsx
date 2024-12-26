import * as React from "react"
import { cn } from "@/lib/utils"
import type { SidebarBaseProps } from "../types"

export const SidebarHeader = React.forwardRef<HTMLDivElement, SidebarBaseProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      data-sidebar="header"
      className={cn("flex flex-col gap-2 p-2", className)}
      {...props}
    />
  )
)
SidebarHeader.displayName = "SidebarHeader"

export const SidebarFooter = React.forwardRef<HTMLDivElement, SidebarBaseProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      data-sidebar="footer"
      className={cn("flex flex-col gap-2 p-2", className)}
      {...props}
    />
  )
)
SidebarFooter.displayName = "SidebarFooter"
import * as React from "react"
import { Input } from "@/components/ui/input"
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

export const SidebarInput = React.forwardRef<HTMLInputElement, React.ComponentPropsWithRef<typeof Input>>(
  ({ className, ...props }, ref) => (
    <Input
      ref={ref}
      data-sidebar="input"
      className={cn(
        "h-8 w-full bg-background shadow-none focus-visible:ring-2 focus-visible:ring-sidebar-ring",
        className
      )}
      {...props}
    />
  )
)
SidebarInput.displayName = "SidebarInput"
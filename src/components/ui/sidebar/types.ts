import { type VariantProps } from "class-variance-authority"
import { type Dispatch, type SetStateAction } from "react"
import { sidebarMenuButtonVariants } from "./menu-button-variants"

export type SidebarState = "expanded" | "collapsed"

export type SidebarContext = {
  state: SidebarState
  open: boolean
  setOpen: (open: boolean | ((prev: boolean) => boolean)) => void
  openMobile: boolean
  setOpenMobile: Dispatch<SetStateAction<boolean>>
  isMobile: boolean
  toggleSidebar: () => void
}

export type SidebarMenuButtonVariantsType = VariantProps<typeof sidebarMenuButtonVariants>

export type SidebarRef<T> = React.RefObject<T> | ((instance: T | null) => void) | null

export interface SidebarBaseProps {
  className?: string
  children?: React.ReactNode
}

export interface SidebarButtonProps extends SidebarBaseProps {
  asChild?: boolean
  isActive?: boolean
  variant?: SidebarMenuButtonVariantsType["variant"]
  size?: SidebarMenuButtonVariantsType["size"]
}
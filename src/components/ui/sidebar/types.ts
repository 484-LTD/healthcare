import { type VariantProps } from "class-variance-authority"
import { type Dispatch, type SetStateAction } from "react"

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

export type SidebarMenuButtonVariants = VariantProps<typeof toggleVariants>
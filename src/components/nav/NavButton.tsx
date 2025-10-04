"use client"

import { NavItem } from "@/types"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface NavButtonProps {
  item: NavItem
}

export function NavButton({ item }: NavButtonProps) {
  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger asChild>
          <a
            href={item.href}
            className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            aria-label={item.title}
            target={item.href.startsWith("https") ? "_blank" : undefined}
          >
            {item.icon}
          </a>
        </TooltipTrigger>
        <TooltipContent>
          <p>{item.tooltip || item.title}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

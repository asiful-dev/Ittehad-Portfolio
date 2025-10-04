import type { ReactNode } from "react"

export interface NavItem {
  id: string
  title: string
  href: string
  icon?: ReactNode
  tooltip?: string
}

export interface TechIcon {
  id: string
  name: string
  color: string,
  icon?: ReactNode
}

export interface Project {
  id: string
  title: string
  shortDescription: string
  longDescription?: string
  image: string
  demoUrl?: string
  repoUrl?: string
  techIds: string[]
  featured?: boolean
  current?: boolean
}

export interface Experience {
  id: string
  title: string
  company: string
  companyUrl?: string
  companyLogo?: string
  period: string
  description: string
  techIds: string[]
}

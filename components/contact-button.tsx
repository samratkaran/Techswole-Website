"use client"

import type React from "react"

import { useContactModal } from "@/context/contact-modal-context"
import { Button } from "@/components/ui/button"

interface ContactButtonProps {
  className?: string
  variant?: "default" | "outline" | "secondary" | "ghost" | "link" | "destructive"
  size?: "default" | "sm" | "lg" | "icon"
  children?: React.ReactNode
}

export function ContactButton({
  className = "",
  variant = "default",
  size = "default",
  children = "Contact Now",
}: ContactButtonProps) {
  const { openModal } = useContactModal()

  return (
    <Button className={className} variant={variant} size={size} onClick={openModal}>
      {children}
    </Button>
  )
}

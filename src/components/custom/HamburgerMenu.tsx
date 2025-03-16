import * as React from "react"
import { ChevronDown, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { cn } from "@/lib/utils"
import { DialogDescription, DialogTitle } from "@radix-ui/react-dialog"
import { Link } from "@tanstack/react-router"
import { HamburgerMenuIcon } from "@radix-ui/react-icons"


type MenuItem = {
  title: string
  href?: string
  submenu?: MenuItem[]
}

const menuItems: MenuItem[] = [
  { title: "Home", href: "/" },
  { title: "Agenda", href: "/agenda" },
  { title: "Invitation", href: "/invitation" },
  { title: "Upload", href: "/upload" },
  { title: "Guest List", href: "/guestList" },
]

const MenuItemComponent: React.FC<{ item: MenuItem; depth?: number }> = ({ item, depth = 0 }) => {
  const [isOpen, setIsOpen] = React.useState(false)

  if (item.submenu) {
    return (
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger asChild>
          <button
            className={cn(
              "flex w-full items-center justify-between py-2 text-lg font-medium transition-colors hover:text-primary",
              depth > 0 && "pl-4"
            )}
          >
            {item.title}
            {isOpen ? (
              <ChevronDown className="h-4 w-4" />
            ) : (
              <ChevronRight className="h-4 w-4" />
            )}
          </button>
        </CollapsibleTrigger>
        <CollapsibleContent>
          {item.submenu.map((subItem) => (
            <MenuItemComponent key={subItem.title} item={subItem} depth={depth + 1} />
          ))}
        </CollapsibleContent>
      </Collapsible>
    )
  }

  return (
    <Link
      to={item.href}
      className={cn(
        "block py-2 text-lg font-medium transition-colors hover:text-primary",
        depth > 0 && "pl-4",
        item.href === "/" && "text-primary"
      )}
    >
      <p className="text-right">{item.title}</p>
    </Link>
  )
}

type HamburgerMenuProps = {
  open: boolean
}

export default function HamburgerMenu({open}: HamburgerMenuProps) {
  return (
    <Sheet open={open}>
      <SheetTrigger asChild>
        <Button variant="ghost" className="has-[>svg]:px-4">
          <HamburgerMenuIcon/>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[240px] sm:w-[300px]">
        <DialogTitle className="hidden">Navigation</DialogTitle>
        <DialogDescription className="hidden">Select a page to navigate</DialogDescription>
        <nav className="flex flex-col space-y-4 mt-14 mr-10">
          {menuItems.map((item) => (
            <MenuItemComponent key={item.title} item={item} />
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  )
}
import { Button } from './ui/button';
import { Menu } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import Link from 'next/link';
import { ThemeToggle } from './theme-toggle';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#portfolio', label: 'My projects' },
  { href: '#testimonials', label: 'Testimonials' },
];

export function Header() {
  return (
    <header className="absolute top-0 z-50 w-full">
      <div className="container mx-auto px-4 h-28 flex items-center justify-between">
        <div className="font-bold text-2xl tracking-wider flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <span className="w-3 h-3 bg-primary rounded-full"></span>
            <span>SK</span>
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" className="rounded-full">
                MENU <Menu className="ml-2 h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-4 mt-8">
                {navLinks.map((link) => (
                  <Button
                    key={link.href}
                    variant="link"
                    asChild
                    className="text-2xl justify-start"
                  >
                    <Link href={link.href}>{link.label}</Link>
                  </Button>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

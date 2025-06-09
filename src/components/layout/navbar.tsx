
import Link from 'next/link';
import { Menu, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';

const navItems = [
  { label: 'Sobre', href: '/' },
  { label: 'Experiência', href: '/experiencia' },
  { label: 'Artigos', href: '/artigos' },
  // { label: 'Contato', href: '#contato' }, // Assuming footer has id="contato"
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/20 bg-background/80 backdrop-blur-lg supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 max-w-screen-xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center space-x-2 group">
          <Code className="h-8 w-8 text-primary group-hover:text-accent transition-colors duration-300" />
          <span className="font-bold text-xl sm:text-2xl text-primary group-hover:text-accent transition-colors duration-300 tracking-tight">
            Felipe Freitas
          </span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8 text-base font-medium">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative text-foreground/80 transition-colors hover:text-primary
                         after:content-[''] after:absolute after:left-0 after:bottom-[-4px]
                         after:w-0 after:h-[2px] after:bg-accent
                         after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-primary hover:text-accent hover:bg-transparent">
                <Menu className="h-7 w-7" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-card border-l-border/50 w-[280px]">
              <nav className="grid gap-6 text-lg font-medium mt-12 p-4">
                {navItems.map((item) => (
                   <SheetClose asChild key={item.href}>
                    <Link
                      href={item.href}
                      className="flex items-center py-2 transition-colors hover:text-accent text-foreground/90"
                    >
                      {item.label}
                    </Link>
                  </SheetClose>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

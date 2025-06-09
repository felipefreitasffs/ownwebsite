
import { Github, Linkedin, Mail, MapPin, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const socialLinks = [
  {
    href: 'https://www.linkedin.com/in/felipefreitasffs/',
    icon: Linkedin,
    label: 'LinkedIn',
  },
  { href: 'mailto:felipefreitas.ffs@gmail.com', icon: Mail, label: 'Email' },
  {
    href: 'https://github.com/felipefreitasffs',
    icon: Github,
    label: 'GitHub',
  },
];

export default function Footer() {
  return (
    <footer id="contato" className="w-full py-16 bg-card border-t border-border/30">
      <div className="container max-w-screen-lg mx-auto text-center px-4">
        <Link href="/" className="inline-flex items-center space-x-2 group mb-8">
          <Code className="h-10 w-10 text-primary group-hover:text-accent transition-colors duration-300" />
          <span className="font-bold text-2xl text-primary group-hover:text-accent transition-colors duration-300 tracking-tight">
            Felipe Freitas
          </span>
        </Link>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary mb-8 font-headline">
          Conecte-se
        </h2>
        <div className="flex justify-center space-x-6 mb-10">
          {socialLinks.map((link) => (
            <Button key={link.label} variant="outline" size="icon" asChild className="rounded-full border-accent/30 hover:border-accent tech-glow-hover hover:bg-accent/10 w-12 h-12">
              <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
                <link.icon className="h-6 w-6 text-accent group-hover:text-primary transition-colors" />
              </a>
            </Button>
          ))}
        </div>
        <div className="flex items-center justify-center text-muted-foreground mb-4 text-lg">
          <MapPin className="h-5 w-5 mr-2.5 text-accent" />
          <span>Uberlândia, MG - Brasil</span>
        </div>
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Felipe Freitas. Todos os direitos reservados.
        </p>
        <p className="text-xs text-muted-foreground/70 mt-2">
          Construído com Next.js, TailwindCSS e <span className="text-accent">♥</span>.
        </p>
      </div>
    </footer>
  );
}

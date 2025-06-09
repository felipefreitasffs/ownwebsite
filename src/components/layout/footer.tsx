import { Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
    <footer id="contato" className="w-full py-12 bg-card border-t border-border/50">
      <div className="container max-w-screen-lg mx-auto text-center">
        <h2 className="text-3xl font-bold tracking-tight text-primary mb-8 font-headline">
          Contato
        </h2>
        <div className="flex justify-center space-x-4 mb-6">
          {socialLinks.map((link) => (
            <Button key={link.label} variant="outline" size="icon" asChild>
              <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
                <link.icon className="h-5 w-5 text-primary hover:text-accent" />
              </a>
            </Button>
          ))}
        </div>
        <div className="flex items-center justify-center text-muted-foreground mb-2">
          <MapPin className="h-5 w-5 mr-2 text-primary" />
          <span>Uberlândia, MG - Brasil</span>
        </div>
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Felipe Freitas. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

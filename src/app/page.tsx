import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const skillsData = {
  "Liderança e Gestão": [
    "Liderança Técnica e de Equipes Multidisciplinares",
    "Formação Contratação e Mentoria de Engenheiros",
    "Gestão de Projetos e Iniciativas de P&D/Inovação",
    "Otimização de Processos (Agile e CI/CD)"
  ],
  "Arquitetura e Desenvolvimento": [
    "Arquitetura de Sistemas Distribuídos Escaláveis",
    "Design e Implementação de Microsserviços",
    "Arquitetura Cloud-Native (AWS/GCP)",
    "Princípios de Design",
    "Modelagem de Dados"
  ],
  "Linguagens & Frameworks": [
    "C#", "JavaScript", "Typescript", "SQL", "Python",
    ".NET Core", "NodeJS", "ReactJS", "ReactNative", "VueJS"
  ],
  "DevOps & Observabilidade": [
    "GitLab CI", "Github Actions", "ArgoCD",
    "Elastic Stack", "Grafana", "Git", "Gitflow"
  ]
};

export default function AboutPage() {
  return (
    <section id="sobre" className="py-16 md:py-24 bg-background">
      <div className="container max-w-screen-lg mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 items-center mb-12">
          <div className="md:col-span-1 flex justify-center md:justify-start">
            <Image
              src="https://placehold.co/300x300.png"
              alt="Felipe Freitas"
              width={300}
              height={300}
              className="rounded-full shadow-lg object-cover aspect-square"
              data-ai-hint="profile person"
            />
          </div>
          <div className="md:col-span-2 text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-primary mb-4 font-headline">
              Felipe Freitas
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 font-medium mb-6">
              Software Engineering | Engineering Manager | Software Architect
            </p>
          </div>
        </div>
         <p className="text-lg text-foreground/70 max-w-full mx-auto leading-relaxed mb-12">
            Líder de Engenharia de Software com mais de 15 anos de experiência, combinando forte background técnico em arquitetura de software (Nuvem AWS/GCP, Microsserviços, Sistemas Distribuídos) com expertise em formar, contratar, mentorar e escalar equipes de engenharia de alta performance. Histórico comprovado em definir estratégias tecnológicas e padrões arquiteturais, otimizar a execução e entrega de projetos (CI/CD, Agile), fomentar cultura de inovação e melhoria contínua, e garantir o alinhamento entre tecnologia e objetivos de negócio.
        </p>

        <Card className="shadow-lg border-border/50">
          <CardHeader>
            <CardTitle className="text-2xl text-center font-headline text-primary">Principais Habilidades</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(skillsData).map(([category, skills]) => (
              <div key={category}>
                <h3 className="text-lg font-semibold text-foreground mb-3">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-sm bg-accent/30 text-accent-foreground hover:bg-accent/50">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

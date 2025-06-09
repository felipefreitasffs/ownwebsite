
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, Building } from 'lucide-react';

const experiences = [
  {
    company: "Diel Energia",
    role: "Head of Software Engineering",
    period: "Mar 2022 - Dez 2024",
    description: "Liderei a formação e estruturação de equipes multidisciplinares, gerenciei a reestruturação da plataforma IoT e conduzi a migração de AWS para GCP. Liderei a modernização do sistema de autenticação com Keycloak, estabeleci uma plataforma de observabilidade com Elastic Stack e pipelines de CI/CD com GitHub Actions."
  },
  {
    company: "Landix Sistemas",
    role: "Tech Manager",
    period: "Jan 2019 - Mar 2022",
    description: "Gerenciei o time de P&D focado na criação de novos produtos. Liderei o design e implementação de uma plataforma cloud-native (AWS, Kubernetes) para suportar novos produtos, com microsserviços usando C#, .NET Core, NodeJS, RabbitMQ, MariaDB, VueJS, ReactJS, ReactNative e Docker."
  },
  {
    company: "Landix Sistemas",
    role: "Tech Leader",
    period: "Jun 2018 - Jan 2019",
    description: "Forneci orientação técnica a um time de 15 desenvolvedores. Desenvolvi ferramentas internas, ministrei treinamentos técnicos e participei da seleção de novos engenheiros."
  },
  {
    company: "Landix Sistemas",
    role: "Full Stack Developer",
    period: "Jul 2012 - Jun 2018",
    description: "Desenvolvi soluções full-stack para clientes variados e liderei o projeto do primeiro sistema web da empresa para um cliente multinacional (Coca-Cola), incluindo o rollout internacional."
  },
  {
    company: "Landix Sistemas",
    role: "Intern",
    period: "Mar 2012 - Jun 2012",
    description: "Prestei suporte técnico a clientes, gerenciei bancos de dados em larga escala e projetei protótipos com .NET MVC."
  },
  {
    company: "T&I Telecom",
    role: "Full Stack Developer",
    period: "Jul 2010 - Mar 2012",
    description: "Mantive e desenvolvi sistemas de telecomunicações VoIP usando Asterisk e PHP."
  },
];

export default function ExperiencePage() {
  return (
    <section id="experiencia" className="py-16 md:py-24 bg-background">
      <div className="container max-w-screen-lg mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-primary mb-16 text-center font-headline">
          Experiência Profissional
        </h2>
        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <Card key={index} className="bg-card border-border/70 p-6 rounded-xl shadow-xl tech-glow-hover card-border-accent-hover overflow-hidden">
              <CardHeader className="p-0 mb-4">
                <div className="flex flex-col sm:flex-row items-start justify-between mb-2">
                  <div className="mb-2 sm:mb-0">
                    <CardTitle className="text-2xl text-primary font-semibold">{exp.role}</CardTitle>
                    <div className="flex items-center text-md text-foreground/80 mt-1">
                      <Building className="h-5 w-5 mr-2 text-accent shrink-0" />
                      {exp.company}
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground whitespace-nowrap bg-muted px-3 py-1 rounded-md flex items-center">
                    <Briefcase className="inline-block h-4 w-4 mr-2 text-accent" />{exp.period}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-foreground/75 leading-relaxed text-justify">{exp.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

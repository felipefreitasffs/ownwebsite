import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase } from 'lucide-react';

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

export default function ExperienceSection() {
  return (
    <section id="experiencia" className="py-16 md:py-24 bg-muted/20">
      <div className="container max-w-screen-lg mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary mb-12 text-center font-headline">
          Experiência Profissional
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="shadow-md hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl text-primary font-semibold">{exp.role}</CardTitle>
                    <CardDescription className="text-md text-foreground/80">{exp.company}</CardDescription>
                  </div>
                  <div className="text-sm text-muted-foreground whitespace-nowrap ml-4">
                    <Briefcase className="inline-block h-4 w-4 mr-1" />{exp.period}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70 leading-relaxed">{exp.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}


import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Award, Briefcase } from 'lucide-react';
import profile from '../images/me.jpg'

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

const academicFormations = [
  "Head de Tecnologia 5.0 (Strides Tech Community, 2025)",
  "Data Analytics (Pós, FIAP, 2024-2025)",
  "Distributed Systems Architecture (Pós, PUC-Minas, 2016-2018)",
  "Software Engineering (Pós, Faculdade Pitágoras, 2013-2015)",
  "Computer Science (Bacharelado, UFU, 2006-2012)",
];

const certifications = [
  "AWS Certified Cloud Practitioner (Fev/2024)",
];

export default function AboutPage() {
  return (
    <section id="sobre" className="py-16 md:py-24 bg-background">
      <div className="container max-w-screen-lg mx-auto px-4">
        
        <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-center mb-16">
          <div className="md:col-span-4 flex justify-center md:justify-start">
            <Image
              src={profile}
              alt="Felipe Freitas"
              width={300}
              height={300}
              className="rounded-full shadow-2xl object-cover aspect-square border-4 border-card"
              data-ai-hint="profile person"
              priority
            />
          </div>
          <div className="md:col-span-8 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-primary mb-4 font-headline">
              Felipe Freitas
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 font-medium mb-6">
            Tech Manager | Engineering Manager | Software Architect | Senior Software Engineer | Tech Specialist | AWS Certified
            </p>
          </div>
        </div>

         <p className="text-lg text-foreground/70 max-w-full mx-auto leading-relaxed mb-16 text-justify">
            Líder de Engenharia de Software com mais de 15 anos de experiência, combinando forte background técnico em arquitetura de software (Nuvem AWS/GCP, Microsserviços, Sistemas Distribuídos) com expertise em formar, contratar, mentorar e escalar equipes de engenharia de alta performance. Histórico comprovado em definir estratégias tecnológicas e padrões arquiteturais, otimizar a execução e entrega de projetos (CI/CD, Agile), fomentar cultura de inovação e melhoria contínua, e garantir o alinhamento entre tecnologia e objetivos de negócio.
        </p>

        <Card className="shadow-xl border-border/50 mb-16">
          <CardHeader>
            <CardTitle className="text-2xl md:text-3xl text-center font-headline text-primary">Principais Habilidades</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            {Object.entries(skillsData).map(([category, skills]) => (
              <div key={category}>
                <h3 className="text-lg font-semibold text-foreground mb-3">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-sm bg-accent/20 text-accent-foreground hover:bg-accent/40 px-3 py-1">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary mb-12 text-center font-headline">
          Educação e Certificações
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="shadow-lg border-border/50 transform hover:scale-105 transition-transform duration-300">
            <CardHeader className="flex flex-row items-center space-x-3 pb-3">
              <GraduationCap className="h-8 w-8 text-primary" />
              <CardTitle className="text-xl text-primary font-semibold">Formação Acadêmica</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 list-none text-foreground/70">
                {academicFormations.map((formation, index) => (
                  <li key={index} className="flex items-start">
                    <Briefcase className="h-5 w-5 text-accent mr-3 mt-1 shrink-0" />
                    <span>{formation}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-border/50 transform hover:scale-105 transition-transform duration-300">
            <CardHeader className="flex flex-row items-center space-x-3 pb-3">
              <Award className="h-8 w-8 text-primary" />
              <CardTitle className="text-xl text-primary font-semibold">Certificações</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 list-none text-foreground/70">
                {certifications.map((certification, index) => (
                   <li key={index} className="flex items-start">
                    <Award className="h-5 w-5 text-accent mr-3 mt-1 shrink-0" />
                    <span>{certification}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}


import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Award, Briefcase, Code2, Users, Brain, ShieldCheck } from 'lucide-react';

const skillsData = {
  "Liderança e Gestão": {
    icon: Users,
    skills: [
      "Liderança Técnica e de Equipes Multidisciplinares",
      "Formação Contratação e Mentoria de Engenheiros",
      "Gestão de Projetos e Iniciativas de P&D/Inovação",
      "Otimização de Processos (Agile e CI/CD)"
    ]
  },
  "Arquitetura e Desenvolvimento": {
    icon: Code2,
    skills: [
      "Arquitetura de Sistemas Distribuídos Escaláveis",
      "Design e Implementação de Microsserviços",
      "Arquitetura Cloud-Native (AWS/GCP)",
      "Princípios de Design",
      "Modelagem de Dados"
    ]
  },
  "Linguagens & Frameworks": {
    icon: Brain,
    skills: [
      "C#", "JavaScript", "Typescript", "SQL", "Python",
      ".NET Core", "NodeJS", "ReactJS", "ReactNative", "VueJS"
    ]
  },
  "DevOps & Observabilidade": {
    icon: ShieldCheck,
    skills: [
      "GitLab CI", "Github Actions", "ArgoCD",
      "Elastic Stack", "Grafana", "Git", "Gitflow"
    ]
  }
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
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section id="sobre-hero" className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          {/* Subtle background pattern - placeholder, can be SVG or more complex */}
        </div>
        <div className="container max-w-screen-xl mx-auto px-4 z-10">
          <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-center">
            <div className="md:col-span-5 flex justify-center md:justify-start relative">
              <div className="relative w-[280px] h-[280px] md:w-[320px] md:h-[320px] lg:w-[380px] lg:h-[380px] tech-glow-static rounded-full">
                 <Image
                    src="https://placehold.co/380x380.png"
                    alt="Felipe Freitas"
                    width={380}
                    height={380}
                    className="rounded-full object-cover aspect-square border-4 border-card shadow-2xl"
                    data-ai-hint="profile person"
                    priority
                  />
              </div>
            </div>
            <div className="md:col-span-7 text-center md:text-left">
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tighter text-primary mb-6 font-headline leading-tight">
                Felipe Freitas
              </h1>
              <p className="text-xl md:text-2xl lg:text-3xl text-foreground/80 font-medium mb-8 leading-relaxed">
                Tech Manager | Engineering Manager | Software Architect | Senior Software Engineer | AWS Certified
              </p>
               <p className="text-lg text-foreground/70 max-w-xl mx-auto md:mx-0 leading-relaxed text-justify">
                Líder de Engenharia de Software com mais de 15 anos de experiência, combinando forte background técnico em arquitetura de software (Nuvem AWS/GCP, Microsserviços, Sistemas Distribuídos) com expertise em formar, contratar, mentorar e escalar equipes de engenharia de alta performance. Histórico comprovado em definir estratégias tecnológicas e padrões arquiteturais, otimizar a execução e entrega de projetos (CI/CD, Agile), fomentar cultura de inovação e melhoria contínua, e garantir o alinhamento entre tecnologia e objetivos de negócio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="habilidades" className="py-16 md:py-24">
        <div className="container max-w-screen-lg mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-primary mb-16 text-center font-headline">
            Principais Habilidades
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(skillsData).map(([category, data]) => {
              const CategoryIcon = data.icon;
              return (
                <Card key={category} className="bg-card border-border/70 p-6 rounded-xl shadow-xl tech-glow-hover card-border-accent-hover">
                  <CardHeader className="flex flex-row items-center space-x-4 pb-4 p-0 mb-4">
                    <CategoryIcon className="h-10 w-10 text-accent" />
                    <CardTitle className="text-2xl text-primary font-semibold">{category}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="flex flex-wrap gap-3">
                      {data.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="text-md bg-accent/10 text-foreground hover:bg-accent/20 px-4 py-2 rounded-lg border border-accent/30"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Education and Certifications Section */}
      <section id="educacao" className="py-16 md:py-24 bg-card/50">
        <div className="container max-w-screen-lg mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-primary mb-16 text-center font-headline">
            Educação e Certificações
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            <Card className="bg-card border-border/70 p-6 rounded-xl shadow-xl tech-glow-hover card-border-accent-hover">
              <CardHeader className="flex flex-row items-center space-x-4 pb-4 p-0 mb-6">
                <GraduationCap className="h-10 w-10 text-accent" />
                <CardTitle className="text-2xl text-primary font-semibold">Formação Acadêmica</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <ul className="space-y-4 list-none text-foreground/80">
                  {academicFormations.map((formation, index) => (
                    <li key={index} className="flex items-start text-lg">
                      <Briefcase className="h-6 w-6 text-accent mr-3 mt-1 shrink-0" />
                      <span>{formation}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card border-border/70 p-6 rounded-xl shadow-xl tech-glow-hover card-border-accent-hover">
              <CardHeader className="flex flex-row items-center space-x-4 pb-4 p-0 mb-6">
                <Award className="h-10 w-10 text-accent" />
                <CardTitle className="text-2xl text-primary font-semibold">Certificações</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <ul className="space-y-4 list-none text-foreground/80">
                  {certifications.map((certification, index) => (
                    <li key={index} className="flex items-start text-lg">
                      <Award className="h-6 w-6 text-accent mr-3 mt-1 shrink-0" />
                      <span>{certification}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

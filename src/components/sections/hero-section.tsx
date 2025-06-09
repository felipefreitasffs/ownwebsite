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

export default function HeroSection() {
  return (
    <section id="inicio" className="py-16 md:py-24 bg-background">
      <div className="container max-w-screen-lg mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-primary mb-4 font-headline">
            Felipe Freitas
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 font-medium mb-6">
            Software Engineering | Engineering Manager | Software Architect
          </p>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            Líder de Engenharia de Software com mais de 15 anos de experiência, combinando forte background técnico em arquitetura de software (Nuvem AWS/GCP, Microsserviços, Sistemas Distribuídos) com expertise em formar, contratar, mentorar e escalar equipes de engenharia de alta performance. Histórico comprovado em definir estratégias tecnológicas e padrões arquiteturais, otimizar a execução e entrega de projetos (CI/CD, Agile), fomentar cultura de inovação e melhoria contínua, e garantir o alinhamento entre tecnologia e objetivos de negócio.
          </p>
        </div>

        <Card className="shadow-lg">
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

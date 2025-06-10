
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, Building, Disc } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Experiência Profissional',
  description: 'Explore a jornada profissional de Felipe Freitas, detalhando seus papéis desde Desenvolvedor Full Stack até Head de Engenharia de Software e seu impacto em diversos projetos e equipes de tecnologia.',
  alternates: {
    canonical: '/experiencia',
  },
  openGraph: {
    title: 'Experiência Profissional | Felipe Freitas',
    description: 'Detalhes sobre a carreira e as realizações profissionais de Felipe Freitas.',
    url: '/experiencia',
    type: 'profile', 
  },
  twitter: {
    title: 'Experiência Profissional | Felipe Freitas',
    description: 'Detalhes sobre a carreira e as realizações profissionais de Felipe Freitas.',
  },
};

const experiences = [
  {
    company: "Diel Energia",
    role: "Head de Engenharia de Software",
    period: "03/2022 - 12/2024",
    description: `Liderei a formação e estruturação de equipes multidisciplinares (Dev, QA, SRE/DevOps), definindo processos ágeis (Scrum) e de engenharia (Gitflow, Code Review, SonarQube, Testes Unitários).
Gerenciei a reestruturação arquitetural da plataforma IoT, aumentando a escalabilidade de 5k para 60k dispositivos processando telemetrias em tempo real.
Conduzi a migração estratégica da infraestrutura de AWS para Google Cloud Platform (GCP), otimizando custos e utilizando serviços como BigQuery para análise avançada de dados (incluindo migração de VMs, BDs relacionais e DynamoDB).
Liderei a modernização do sistema de autenticação com a implementação de Keycloak, substituindo solução proprietária e elevando o nível de segurança e escalabilidade.
Implementei plataforma de observabilidade (Elastic Stack), reduzindo o tempo de resposta a incidentes e aumentando a confiabilidade dos sistemas.
Estabeleci pipelines de CI/CD (Github Actions), automatizando deploys e acelerando o ciclo de entrega em alinhamento com Produto.
Conduzi a modernização incremental de backend monolítico, migrando funcionalidades críticas para novos microsserviços em GKE (Google Kubernetes Engine), aplicando Clean Architecture e SOLID para otimizar performance, manutenibilidade e escalabilidade.`
  },
  {
    company: "Landix Sistemas", 
    role: "Tech Manager / Gerente de Inovação",
    period: "01/2019 - 03/2022",
    description: `Gerenciei equipe de Pesquisa e Desenvolvimento (P&D) focada na criação de novos produtos para a empresa, definindo a estratégia tecnológica e a arquitetura de software.
Liderei a concepção e implementação de uma plataforma cloud-native (AWS, Kubernetes) para suportar estes new produtos, garantindo alta resiliência e escalabilidade.
Implementei sistemas na nova plataforma baseados em microsserviços, utilizando C# .NET Core, NodeJS, RabbitMQ, MariaDB, VueJS, ReactJS, ReactNative e Docker.
Estabeleci pipelines de CI/CD (GitLab CI) para automação de build e deploy da nova plataforma, otimizando o ciclo de desenvolvimento.`
  },
  {
    company: "Landix Sistemas",
    role: "Tech Leader",
    period: "06/2018 - 01/2019",
    description: `Orientei tecnicamente equipe de desenvolvedores no uso de C#, ASP.NET MVC, NodeJS, VueJS, Xamarin e bancos de dados (Oracle, SQL Server, Firebird, MySQL), garantindo a adoção de boas práticas e suportando decisões de arquitetura.
Liderei a implementação de funcionalidades complexas, solucionando desafios técnicos críticos.
Desenvolvi ferramentas internas, incluindo sistemas para gestão de tarefas e bibliotecas/frameworks internos reusáveis, que otimizaram o fluxo de trabalho da equipe.
Elaborei e ministrei treinamentos técnicos, e participei ativamente do processo seletivo (entrevistas técnicas) para contratação de novos engenheiros.`
  },
  {
    company: "Landix Sistemas",
    role: "Desenvolvedor Full Stack",
    period: "07/2012 - 06/2018",
    description: `Desenvolvi e mantive soluções de software full-stack (web, mobile e desktop) utilizando C#, ASP.NET MVC, NodeJS, VueJS, Xamarin e bancos de dados relacionais (Oracle, SQL Server, etc.) para clientes de portes variados.
Concebi, desenvolvi e implantei o sistema web pioneiro da empresa em ASP.NET para cliente multinacional (Coca-Cola), gerenciando o ciclo completo desde as discussões com stakeholders até o rollout e treinamento técnico.`
  },
  {
    company: "Landix Sistemas",
    role: "Estágio em Desenvolvimento",
    period: "03/2012 - 06/2012",
    description: `Suporte técnico a clientes, solucionando dúvidas e analisando incidentes.
Manutenção e manipulação de bancos de dados robustos, incluindo Oracle, SQL Server, Firebird e SQLite.
Criação e implementação de protótipos utilizando tecnologias como C# .NET MVC, JavaScript, JQuery, CSS e Bootstrap.`
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
                <ul className="list-none space-y-3 text-foreground/75 leading-relaxed text-justify">
                  {exp.description.split('\n').map((point, pointIndex) => (
                    point.trim() && (
                      <li key={pointIndex} className="flex items-start">
                        <Disc className="h-3 w-3 text-accent mr-3 mt-[7px] shrink-0" />
                        <span>{point.trim()}</span>
                      </li>
                    )
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

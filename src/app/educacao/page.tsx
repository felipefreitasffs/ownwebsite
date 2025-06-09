import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, Award } from 'lucide-react';

const academicFormations = [
  "Data Analytics (Pós, FIAP, 2024-2025)",
  "Distributed Systems Architecture (Pós, PUC-Minas, 2016-2018)",
  "Software Engineering (Pós, Faculdade Pitágoras, 2013-2015)",
  "Computer Science (Bacharelado, UFU, 2006-2012)",
];

const certifications = [
  "AWS Certified Cloud Practitioner (Fev/2024)",
];

export default function EducationPage() {
  return (
    <section id="educacao" className="py-16 md:py-24 bg-background">
      <div className="container max-w-screen-lg mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary mb-12 text-center font-headline">
          Educação e Certificações
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="shadow-lg border-border/50">
            <CardHeader className="flex flex-row items-center space-x-3">
              <GraduationCap className="h-8 w-8 text-primary" />
              <CardTitle className="text-xl text-primary font-semibold">Formação Acadêmica</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 list-disc list-inside text-foreground/70">
                {academicFormations.map((formation, index) => (
                  <li key={index}>{formation}</li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-border/50">
            <CardHeader className="flex flex-row items-center space-x-3">
              <Award className="h-8 w-8 text-primary" />
              <CardTitle className="text-xl text-primary font-semibold">Certificações</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 list-disc list-inside text-foreground/70">
                {certifications.map((certification, index) => (
                  <li key={index}>{certification}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

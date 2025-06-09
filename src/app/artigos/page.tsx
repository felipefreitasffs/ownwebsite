import Link from 'next/link';
import { getArticlesMetadata, type Article } from '@/lib/articles';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, ArrowRight } from 'lucide-react';

export default async function ArticlesPage() {
  const articlesMeta = await getArticlesMetadata();

  if (!articlesMeta || articlesMeta.length === 0) {
    return (
      <section id="artigos" className="py-16 md:py-24 bg-background">
        <div className="container max-w-screen-lg mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary mb-12 font-headline">
            Artigos
          </h2>
          <p className="text-muted-foreground">Nenhum artigo encontrado.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="artigos" className="py-16 md:py-24 bg-background">
      <div className="container max-w-screen-lg mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary mb-12 text-center font-headline">
          Artigos
        </h2>
        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-1">
          {articlesMeta.map((article) => (
            <Card key={article.slug} className="shadow-lg hover:shadow-xl transition-shadow duration-300 border-border/50 flex flex-col">
              <CardHeader className="flex flex-row items-start space-x-4">
                <FileText className="h-6 w-6 text-primary mt-1 shrink-0" />
                <div>
                  <CardTitle className="text-xl text-primary font-semibold mb-1">{article.title}</CardTitle>
                  <CardDescription className="text-foreground/70">{article.summary}</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="mt-auto flex justify-end">
                <Button asChild variant="link" className="text-primary hover:text-accent">
                  <Link href={`/artigos/${article.slug}`}>
                    Ler artigo <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}


import Link from 'next/link';
import { getArticlesMetadata } from '@/lib/articles';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, ArrowRight, BookOpen } from 'lucide-react';
import Image from 'next/image';

export default async function ArticlesPage() {
  const articlesMeta = await getArticlesMetadata();

  if (!articlesMeta || articlesMeta.length === 0) {
    return (
      <section id="artigos" className="py-16 md:py-24 bg-background">
        <div className="container max-w-screen-lg mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-primary mb-12 font-headline">
            Artigos
          </h2>
          <p className="text-muted-foreground text-xl">Nenhum artigo encontrado no momento.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="artigos" className="py-16 md:py-24 bg-background">
      <div className="container max-w-screen-lg mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-primary mb-16 text-center font-headline">
          Artigos & Insights
        </h2>
        <div className="grid gap-10 md:grid-cols-1">
          {articlesMeta.map((article) => (
            <Link key={article.slug} href={`/artigos/${article.slug}`} passHref className="block group">
              <Card className="bg-card border-border/70 rounded-xl shadow-xl tech-glow-hover card-border-accent-hover overflow-hidden flex flex-col md:flex-row h-full transition-all duration-300 ease-in-out hover:border-accent/80">
                {article.coverImage && (
                  <div className="md:w-1/3 w-full h-48 md:h-auto relative overflow-hidden">
                    <Image
                      src={article.coverImage}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      data-ai-hint={article.coverImageHint}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                    />
                  </div>
                )}
                <div className={`p-6 flex flex-col ${article.coverImage ? 'md:w-2/3' : 'w-full'}`}>
                  <CardHeader className="p-0 mb-3">
                    <div className="flex items-center text-sm text-accent mb-1">
                      <BookOpen className="h-4 w-4 mr-2" />
                      <span>Artigo</span>
                    </div>
                    <CardTitle className="text-2xl text-primary font-semibold group-hover:text-accent transition-colors duration-300">{article.title}</CardTitle>
                  </CardHeader>
                  <CardDescription className="text-foreground/75 leading-relaxed mb-4 flex-grow text-justify">
                    {article.summary}
                  </CardDescription>
                  <CardContent className="p-0 mt-auto flex justify-end">
                    <Button variant="link" className="text-accent group-hover:text-primary transition-colors duration-300 px-0">
                      Ler artigo completo <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

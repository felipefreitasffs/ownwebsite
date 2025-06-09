import { getArticlesMetadata, getArticleBySlug, type Article } from '@/lib/articles';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { FileText } from 'lucide-react';

// Server component to fetch initial metadata
async function ArticlesList() {
  const articlesMeta = await getArticlesMetadata();

  if (!articlesMeta || articlesMeta.length === 0) {
    return <p className="text-muted-foreground">Nenhum artigo encontrado.</p>;
  }

  // Fetch full content for each article to display in accordion
  const articlesWithContent: (Article | undefined)[] = await Promise.all(
    articlesMeta.map(meta => getArticleBySlug(meta.slug))
  );
  
  const validArticles = articlesWithContent.filter(Boolean) as Article[];

  return (
    <Accordion type="single" collapsible className="w-full space-y-6">
      {validArticles.map((article) => (
        <AccordionItem value={article.slug} key={article.slug} className="border-none">
          <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
            <AccordionTrigger className="w-full text-left hover:no-underline p-0">
              <CardHeader className="flex flex-row items-start space-x-4 w-full pr-6 py-4">
                <FileText className="h-6 w-6 text-primary mt-1 shrink-0" />
                <div>
                  <CardTitle className="text-xl text-primary font-semibold mb-1">{article.title}</CardTitle>
                  <CardDescription className="text-foreground/70">{article.summary}</CardDescription>
                </div>
              </CardHeader>
            </AccordionTrigger>
            <AccordionContent>
              <CardContent className="pt-0 pb-6">
                <div className="prose prose-sm max-w-none text-foreground/80" style={{ whiteSpace: 'pre-line' }}>
                  {article.content}
                </div>
                 <p className="mt-4 text-xs text-muted-foreground">
                    Nota: O conteúdo do artigo é exibido como texto pré-formatado. A renderização completa de Markdown requer bibliotecas adicionais.
                  </p>
              </CardContent>
            </AccordionContent>
          </Card>
        </AccordionItem>
      ))}
    </Accordion>
  );
}


export default function ArticlesSection() {
  return (
    <section id="artigos" className="py-16 md:py-24 bg-muted/20">
      <div className="container max-w-screen-lg mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary mb-12 text-center font-headline">
          Artigos
        </h2>
        <ArticlesList />
      </div>
    </section>
  );
}

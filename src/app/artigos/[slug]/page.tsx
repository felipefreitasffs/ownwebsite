import { getArticleBySlug, getAllArticles, type Article } from '@/lib/articles';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

type ArticlePageProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  const articles = await getAllArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: ArticlePageProps) {
  const article = await getArticleBySlug(params.slug);
  if (!article) {
    return {
      title: 'Artigo não encontrado',
    };
  }
  return {
    title: article.title,
    description: article.summary,
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const article = await getArticleBySlug(params.slug);

  if (!article) {
    notFound();
  }

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container max-w-screen-lg mx-auto px-4">
        <div className="mb-8">
          <Button asChild variant="outline" size="sm">
            <Link href="/artigos">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar para Artigos
            </Link>
          </Button>
        </div>
        <article>
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-primary mb-3 font-headline">
              {article.title}
            </h1>
            <p className="text-lg text-muted-foreground">{article.summary}</p>
          </header>
          <div 
            className="prose prose-lg max-w-none text-foreground/80 dark:prose-invert"
            style={{ whiteSpace: 'pre-line' }}
          >
            {article.content}
          </div>
        </article>
      </div>
    </section>
  );
}

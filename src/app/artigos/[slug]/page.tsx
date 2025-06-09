
import { getArticleBySlug, getAllArticles } from '@/lib/articles';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
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
    openGraph: {
      images: [article.coverImage],
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const article = await getArticleBySlug(params.slug);

  if (!article) {
    notFound();
  }

  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="container max-w-screen-md mx-auto px-4">
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
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-primary mb-4 font-headline leading-tight">
              {article.title}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-6">{article.summary}</p>
            {article.coverImage && (
              <div className="mb-8 overflow-hidden rounded-lg shadow-xl">
                <Image
                  src={article.coverImage}
                  alt={article.title}
                  width={800}
                  height={400}
                  className="w-full h-auto object-cover aspect-[2/1]"
                  data-ai-hint={article.coverImageHint}
                  priority
                />
              </div>
            )}
          </header>
          <div
            className="prose prose-lg dark:prose-invert max-w-none 
                       prose-headings:font-headline prose-headings:text-primary prose-headings:tracking-tight
                       prose-p:text-foreground/80 prose-p:leading-relaxed
                       prose-strong:text-foreground/90
                       prose-a:text-accent prose-a:no-underline hover:prose-a:underline
                       prose-ul:list-disc prose-ul:pl-6 prose-ul:text-foreground/80
                       prose-ol:list-decimal prose-ol:pl-6 prose-ol:text-foreground/80
                       prose-blockquote:border-l-4 prose-blockquote:border-accent prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-muted-foreground
                       prose-code:bg-muted prose-code:text-accent-foreground prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:font-code
                       prose-pre:bg-muted prose-pre:p-4 prose-pre:rounded-lg prose-pre:overflow-x-auto
                       "
            style={{ whiteSpace: 'pre-line' }} 
          >
            {article.content}
          </div>
        </article>
      </div>
    </section>
  );
}

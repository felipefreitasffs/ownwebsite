
import { getArticleBySlug, getAllArticles } from '@/lib/articles';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowLeft, CalendarDays, UserCircle } from 'lucide-react';

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
    title: `${article.title} | Felipe Freitas`,
    description: article.summary,
    openGraph: {
      title: article.title,
      description: article.summary,
      images: [
        {
          url: article.coverImage,
          width: 800,
          height: 400,
          alt: article.title,
        },
      ],
      type: 'article',
      authors: ['Felipe Freitas'],
      publishedTime: new Date(article.publishDate).toISOString(),
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.summary,
      images: [article.coverImage],
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const article = await getArticleBySlug(params.slug);

  if (!article) {
    notFound();
  }

  const publishDateFormatted = new Date(article.publishDate).toLocaleDateString('pt-BR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });


  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="container max-w-screen-md mx-auto px-4">
        <div className="mb-10">
          <Button asChild variant="outline" size="sm" className="border-accent/50 text-accent hover:bg-accent/10 hover:text-accent-foreground tech-glow-hover">
            <Link href="/artigos">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar para Artigos
            </Link>
          </Button>
        </div>
        <article>
          <header className="mb-10">
            {article.coverImage && (
              <div className="mb-8 overflow-hidden rounded-xl shadow-2xl tech-glow-static aspect-[16/9] relative">
                <Image
                  src={article.coverImage}
                  alt={article.title}
                  fill
                  className="w-full h-full object-cover"
                  data-ai-hint={article.coverImageHint}
                  priority
                  sizes="(max-width: 768px) 100vw, 800px"
                />
              </div>
            )}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-primary mb-6 font-headline leading-tight">
              {article.title}
            </h1>
            <div className="flex flex-wrap items-center text-muted-foreground text-sm space-x-4 mb-6">
              <div className="flex items-center">
                <UserCircle className="h-4 w-4 mr-1.5 text-accent" />
                <span>Felipe Freitas</span>
              </div>
              <div className="flex items-center">
                <CalendarDays className="h-4 w-4 mr-1.5 text-accent" />
                <span>{publishDateFormatted}</span>
              </div>
            </div>
            <p className="text-lg md:text-xl text-foreground/80 mb-8 italic">{article.summary}</p>
             <hr className="border-border/30 my-8" />
          </header>
          
          <div
            className="prose prose-lg dark:prose-invert max-w-none 
                       prose-headings:font-headline prose-headings:text-primary prose-headings:tracking-tight prose-headings:mb-4 prose-headings:mt-10
                       prose-p:text-foreground/80 prose-p:leading-relaxed prose-p:text-justify
                       prose-strong:text-foreground/95 prose-strong:font-semibold
                       prose-a:text-accent prose-a:font-medium prose-a:no-underline hover:prose-a:underline hover:prose-a:text-primary
                       prose-ul:list-disc prose-ul:pl-6 prose-ul:text-foreground/80 prose-li:my-1
                       prose-ol:list-decimal prose-ol:pl-6 prose-ol:text-foreground/80 prose-li:my-1
                       prose-blockquote:border-l-4 prose-blockquote:border-accent prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-muted-foreground prose-blockquote:my-6
                       prose-code:bg-card prose-code:text-accent prose-code:px-1.5 prose-code:py-1 prose-code:rounded-md prose-code:font-code prose-code:text-sm
                       prose-pre:bg-card prose-pre:p-4 prose-pre:rounded-lg prose-pre:overflow-x-auto prose-pre:shadow-md prose-pre:my-6
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

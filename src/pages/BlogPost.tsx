import { useParams, Link } from "react-router-dom";
import { getBlogBySlug } from "@/data/blog";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = getBlogBySlug(slug || "");

  if (!post) {
    return (
      <main className="container py-20 text-center">
        <h1 className="font-display text-2xl font-bold">Article not found</h1>
        <Button asChild className="mt-4"><Link to="/blog">Back to Blog</Link></Button>
      </main>
    );
  }

  return (
    <main className="pb-24 md:pb-12">
      <div className="container max-w-3xl py-8">
        <Link to="/blog" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary">
          <ArrowLeft className="h-4 w-4" /> Back to Blog
        </Link>

        <article className="mt-6">
          <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">{post.category}</span>
          <h1 className="mt-3 font-display text-3xl font-bold leading-tight md:text-4xl">{post.title}</h1>

          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5"><User className="h-4 w-4" /> {post.author}</span>
            <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" /> {post.date}</span>
            <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> {post.readTime}</span>
          </div>

          <div className="mt-6 aspect-video overflow-hidden rounded-xl bg-muted">
            <img src={post.image} alt={post.title} className="h-full w-full object-cover" />
          </div>

          <div className="prose prose-neutral mt-8 max-w-none">
            {post.content.split("\n\n").map((paragraph, i) => {
              if (paragraph.startsWith("## ")) {
                return <h2 key={i} className="mt-8 font-display text-xl font-semibold">{paragraph.replace("## ", "")}</h2>;
              }
              if (paragraph.startsWith("- ")) {
                return (
                  <ul key={i} className="ml-4 list-disc space-y-1 text-muted-foreground">
                    {paragraph.split("\n").map((line, j) => (
                      <li key={j}>{line.replace("- ", "")}</li>
                    ))}
                  </ul>
                );
              }
              return <p key={i} className="text-muted-foreground leading-relaxed">{paragraph}</p>;
            })}
          </div>
        </article>
      </div>
    </main>
  );
};

export default BlogPost;

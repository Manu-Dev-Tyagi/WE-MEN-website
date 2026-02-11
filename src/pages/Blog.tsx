import { Link } from "react-router-dom";
import { blogPosts } from "@/data/blog";
import { ArrowRight, Calendar, Clock } from "lucide-react";

const Blog = () => {
  return (
    <main className="pb-24 md:pb-12">
      <div className="bg-foreground py-12 text-background">
        <div className="container">
          <h1 className="font-display text-3xl font-bold md:text-4xl">Body Confidence Blog</h1>
          <p className="mt-2 text-background/60">Tips, guides, and stories to help you feel your best</p>
        </div>
      </div>

      <div className="container py-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Link key={post.id} to={`/blog/${post.slug}`} className="group block">
              <article className="overflow-hidden rounded-xl border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <div className="aspect-video overflow-hidden bg-muted">
                  <img src={post.image} alt={post.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                </div>
                <div className="p-5">
                  <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">{post.category}</span>
                  <h2 className="mt-3 font-display text-lg font-bold leading-snug line-clamp-2">{post.title}</h2>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>
                  <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {post.date}</span>
                      <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {post.readTime}</span>
                    </div>
                    <span className="flex items-center gap-1 text-primary group-hover:gap-2 transition-all">Read <ArrowRight className="h-3 w-3" /></span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Blog;

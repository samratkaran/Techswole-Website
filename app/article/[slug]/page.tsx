import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { newsData } from "@/data/news"
import { blogsData } from "@/data/blogs"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactButton } from "@/components/contact-button"
import { ArrowLeft, Calendar, Clock, User, Twitter, Facebook, Linkedin } from "lucide-react"

// Combine both data sources
const allArticles = [
  ...newsData.map((article) => ({ ...article, type: "news" })),
  ...blogsData.map((article) => ({ ...article, type: "blog" })),
]

export function generateStaticParams() {
  return allArticles.map((article) => ({
    slug: article.slug,
  }))
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = allArticles.find((a) => a.slug === params.slug)

  if (!article || !article.published) {
    notFound()
  }

  // Find related articles from the same type and category
  const relatedArticles = allArticles
    .filter((a) => a.id !== article.id && a.category === article.category && a.type === article.type && a.published)
    .slice(0, 3)

  const isNews = article.type === "news"
  const backUrl = isNews ? "/news" : "/blog"
  const backText = isNews ? "Back to News" : "Back to Blog"

  return (
    <main className="min-h-screen" style={{ backgroundColor: article.style.backgroundColor }}>
      <Header />

      <article className="pt-32 pb-20" style={{ color: article.style.textColor }}>
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <div className="mb-8 flex items-center space-x-2 text-sm opacity-70">
            <Link href="/" className="hover:opacity-100 transition-opacity">
              Home
            </Link>
            <span>/</span>
            <Link href={backUrl} className="hover:opacity-100 transition-opacity">
              {isNews ? "News" : "Blog"}
            </Link>
            <span>/</span>
            <span className="font-medium">{article.category}</span>
          </div>

          <Link
            href={backUrl}
            className="mb-8 inline-flex items-center opacity-70 hover:opacity-100 transition-opacity group"
          >
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            {backText}
          </Link>

          {/* Article Header */}
          <header className="mb-12">
            <div className="mb-6">
              <span
                className="rounded-full px-4 py-2 text-sm font-medium text-white"
                style={{ backgroundColor: article.style.accentColor }}
              >
                {article.category}
              </span>
              {article.featured && (
                <span className="ml-2 rounded-full bg-yellow-100 px-4 py-2 text-sm font-medium text-yellow-800">
                  Featured
                </span>
              )}
              <span className="ml-2 rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-800">
                {isNews ? "News" : "Blog"}
              </span>
            </div>

            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">{article.title}</h1>

            <p className="mb-8 text-xl opacity-80 leading-relaxed">{article.excerpt}</p>

            {/* Article Meta */}
            <div className="flex flex-wrap items-center gap-6 text-sm opacity-70">
              {article.authorImage && (
                <div className="flex items-center space-x-2">
                  <Image
                    src={article.authorImage || "/placeholder.svg"}
                    alt={article.author}
                    width={40}
                    height={40}
                    className="h-10 w-10 rounded-full"
                  />
                  <div>
                    <p className="font-medium" style={{ color: article.style.textColor }}>
                      {article.author}
                    </p>
                    {article.authorBio && <p className="text-xs opacity-60">{article.authorBio}</p>}
                  </div>
                </div>
              )}
              {!article.authorImage && (
                <div className="flex items-center space-x-1">
                  <User className="h-4 w-4" />
                  <span className="font-medium">{article.author}</span>
                </div>
              )}
              <div className="flex items-center space-x-1">
                <Calendar className="h-4 w-4" />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span>{article.readTime}</span>
              </div>
            </div>

            {/* Tags */}
            <div className="mt-6 flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-opacity-20 px-3 py-1 text-sm font-medium transition-colors hover:bg-opacity-30"
                  style={{ backgroundColor: article.style.accentColor }}
                >
                  #{tag}
                </span>
              ))}
            </div>
          </header>

          {/* Featured Image */}
          <div className="mb-12 overflow-hidden rounded-2xl shadow-xl">
            <Image
              src={article.image || "/placeholder.svg"}
              alt={article.title}
              width={1200}
              height={600}
              className="w-full object-cover"
            />
          </div>

          {/* Article Content */}
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-12 lg:grid-cols-4">
              {/* Main Content */}
              <div className="lg:col-span-3">
                <div
                  className="prose prose-lg max-w-none prose-headings:font-bold prose-p:leading-relaxed prose-a:no-underline hover:prose-a:underline prose-strong:font-bold prose-ul:list-disc prose-ol:list-decimal prose-table:border-collapse prose-th:border prose-th:border-gray-300 prose-th:p-2 prose-td:border prose-td:border-gray-300 prose-td:p-2 prose-blockquote:border-l-4 prose-blockquote:pl-4 prose-blockquote:italic"
                  style={
                    {
                      color: article.style.textColor,
                      "--tw-prose-headings": article.style.textColor,
                      "--tw-prose-links": article.style.accentColor,
                      "--tw-prose-strong": article.style.textColor,
                      "--tw-prose-blockquote": article.style.textColor,
                    } as React.CSSProperties
                  }
                  dangerouslySetInnerHTML={{ __html: article.content }}
                />

                {/* Share Section */}
                <div className="mt-12 border-t border-opacity-20 pt-8" style={{ borderColor: article.style.textColor }}>
                  <h3 className="mb-4 text-lg font-semibold">Share this article</h3>
                  <div className="flex space-x-4">
                    <button className="flex items-center space-x-2 rounded-lg bg-blue-500 px-4 py-2 text-white transition-colors hover:bg-blue-600">
                      <Twitter className="h-4 w-4" />
                      <span>Twitter</span>
                    </button>
                    <button className="flex items-center space-x-2 rounded-lg bg-blue-700 px-4 py-2 text-white transition-colors hover:bg-blue-800">
                      <Facebook className="h-4 w-4" />
                      <span>Facebook</span>
                    </button>
                    <button className="flex items-center space-x-2 rounded-lg bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700">
                      <Linkedin className="h-4 w-4" />
                      <span>LinkedIn</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-32 space-y-8">
                  {/* Author Info (for blogs) */}
                  {article.authorBio && (
                    <div
                      className="rounded-xl bg-opacity-10 p-6"
                      style={{ backgroundColor: article.style.accentColor }}
                    >
                      <h3 className="mb-4 font-semibold">About the Author</h3>
                      <div className="flex items-center space-x-3 mb-3">
                        <Image
                          src={article.authorImage || "/placeholder.svg"}
                          alt={article.author}
                          width={48}
                          height={48}
                          className="h-12 w-12 rounded-full"
                        />
                        <div>
                          <p className="font-medium">{article.author}</p>
                        </div>
                      </div>
                      <p className="text-sm opacity-80">{article.authorBio}</p>
                    </div>
                  )}

                  {/* Related Articles */}
                  {relatedArticles.length > 0 && (
                    <div
                      className="rounded-xl bg-opacity-10 p-6"
                      style={{ backgroundColor: article.style.accentColor }}
                    >
                      <h3 className="mb-4 font-semibold">Related {isNews ? "News" : "Articles"}</h3>
                      <div className="space-y-4">
                        {relatedArticles.map((relatedArticle) => (
                          <Link
                            key={relatedArticle.id}
                            href={`/article/${relatedArticle.slug}`}
                            className="block group"
                          >
                            <h4 className="text-sm font-medium group-hover:opacity-70 transition-opacity line-clamp-2">
                              {relatedArticle.title}
                            </h4>
                            <p className="text-xs opacity-60 mt-1">{relatedArticle.date}</p>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-20 rounded-3xl bg-gradient-to-r from-gray-900 to-black p-8 text-center text-white">
            <h2 className="mb-4 text-2xl font-bold">Ready to start your project?</h2>
            <p className="mb-6 opacity-90">Let's discuss how our expertise can help you achieve your goals.</p>
            <ContactButton className="rounded-xl bg-white px-8 py-3 text-black font-semibold transition-all hover:bg-gray-100 transform hover:scale-105">
              Get Started Today
            </ContactButton>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  )
}

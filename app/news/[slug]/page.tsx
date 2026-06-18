import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { newsData } from "@/data/news"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactButton } from "@/components/contact-button"
import { ArrowLeft, Calendar, Clock, User, Twitter, Facebook, Linkedin } from "lucide-react"

export function generateStaticParams() {
  return newsData.map((news) => ({
    slug: news.slug,
  }))
}

export default function NewsPost({ params }: { params: { slug: string } }) {
  const news = newsData.find((n) => n.slug === params.slug)

  if (!news || !news.published) {
    notFound()
  }

  const relatedNews = newsData
    .filter((n) => n.id !== news.id && n.category === news.category && n.published)
    .slice(0, 3)

  return (
    <main className="min-h-screen" style={{ backgroundColor: news.style.backgroundColor }}>
      <Header />

      <article className="pt-32 pb-20" style={{ color: news.style.textColor }}>
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <div className="mb-8 flex items-center space-x-2 text-sm opacity-70">
            <Link href="/" className="hover:opacity-100 transition-opacity">
              Home
            </Link>
            <span>/</span>
            <Link href="/news" className="hover:opacity-100 transition-opacity">
              News
            </Link>
            <span>/</span>
            <span className="font-medium">{news.category}</span>
          </div>

          <Link
            href="/news"
            className="mb-8 inline-flex items-center opacity-70 hover:opacity-100 transition-opacity group"
          >
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to News
          </Link>

          {/* Article Header */}
          <header className="mb-12">
            <div className="mb-6">
              <span
                className="rounded-full px-4 py-2 text-sm font-medium text-white"
                style={{ backgroundColor: news.style.accentColor }}
              >
                {news.category}
              </span>
              {news.featured && (
                <span className="ml-2 rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-800">
                  Featured
                </span>
              )}
            </div>

            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">{news.title}</h1>

            <p className="mb-8 text-xl opacity-80 leading-relaxed">{news.excerpt}</p>

            {/* Article Meta */}
            <div className="flex flex-wrap items-center gap-6 text-sm opacity-70">
              <div className="flex items-center space-x-1">
                <User className="h-4 w-4" />
                <span className="font-medium">{news.author}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Calendar className="h-4 w-4" />
                <span>{news.date}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span>{news.readTime}</span>
              </div>
            </div>

            {/* Tags */}
            <div className="mt-6 flex flex-wrap gap-2">
              {news.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-opacity-20 px-3 py-1 text-sm font-medium transition-colors hover:bg-opacity-30"
                  style={{ backgroundColor: news.style.accentColor }}
                >
                  #{tag}
                </span>
              ))}
            </div>
          </header>

          {/* Featured Image */}
          <div className="mb-12 overflow-hidden rounded-2xl shadow-xl">
            <Image
              src={news.image || "/placeholder.svg"}
              alt={news.title}
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
                  className="prose prose-lg max-w-none prose-headings:font-bold prose-p:leading-relaxed prose-a:no-underline hover:prose-a:underline prose-strong:font-bold prose-ul:list-disc prose-ol:list-decimal"
                  style={
                    {
                      color: news.style.textColor,
                      "--tw-prose-headings": news.style.textColor,
                      "--tw-prose-links": news.style.accentColor,
                      "--tw-prose-strong": news.style.textColor,
                    } as React.CSSProperties
                  }
                  dangerouslySetInnerHTML={{ __html: news.content }}
                />

                {/* Share Section */}
                <div className="mt-12 border-t border-opacity-20 pt-8" style={{ borderColor: news.style.textColor }}>
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
                  {/* Related Articles */}
                  {relatedNews.length > 0 && (
                    <div className="rounded-xl bg-opacity-10 p-6" style={{ backgroundColor: news.style.accentColor }}>
                      <h3 className="mb-4 font-semibold">Related News</h3>
                      <div className="space-y-4">
                        {relatedNews.map((relatedNews) => (
                          <Link key={relatedNews.id} href={`/news/${relatedNews.slug}`} className="block group">
                            <h4 className="text-sm font-medium group-hover:opacity-70 transition-opacity line-clamp-2">
                              {relatedNews.title}
                            </h4>
                            <p className="text-xs opacity-60 mt-1">{relatedNews.date}</p>
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

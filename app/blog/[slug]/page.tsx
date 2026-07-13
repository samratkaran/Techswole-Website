import type React from "react"

import Link from "next/link"
import { notFound } from "next/navigation"
import { blogsData } from "@/data/blogs"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactButton } from "@/components/contact-button"
import { ArrowLeft, Calendar, Clock, Twitter, Facebook, Linkedin } from "lucide-react"

export function generateStaticParams() {
  return blogsData.map((blog) => ({
    slug: blog.slug,
  }))
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const blog = blogsData.find((b) => b.slug === params.slug)

  if (!blog || !blog.published) {
    notFound()
  }

  const relatedBlogs = blogsData
    .filter((b) => b.id !== blog.id && b.category === blog.category && b.published)
    .slice(0, 3)

  return (
    <main className="min-h-screen" style={{ backgroundColor: blog.style.backgroundColor }}>
      <Header />

      <article className="pt-32 pb-20" style={{ color: blog.style.textColor }}>
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <div className="mb-8 flex items-center space-x-2 text-sm opacity-70">
            <Link href="/" className="hover:opacity-100 transition-opacity">
              Home
            </Link>
            <span>/</span>
            <Link href="/blog" className="hover:opacity-100 transition-opacity">
              Blog
            </Link>
            <span>/</span>
            <span className="font-medium">{blog.category}</span>
          </div>

          <Link
            href="/blog"
            className="mb-8 inline-flex items-center opacity-70 hover:opacity-100 transition-opacity group"
          >
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Blog
          </Link>

          {/* Article Header */}
          <header className="mb-12">
            <div className="mb-6">
              <span
                className="rounded-full px-4 py-2 text-sm font-medium text-white"
                style={{ backgroundColor: blog.style.accentColor }}
              >
                {blog.category}
              </span>
              {blog.featured && (
                <span className="ml-2 rounded-full bg-yellow-100 px-4 py-2 text-sm font-medium text-yellow-800">
                  Featured
                </span>
              )}
            </div>

            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">{blog.title}</h1>

            <p className="mb-8 text-xl opacity-80 leading-relaxed">{blog.excerpt}</p>

            {/* Article Meta */}
            <div className="flex flex-wrap items-center gap-6 text-sm opacity-70">
              <div className="flex items-center space-x-2">
            
                <div>
                  <p className="font-medium" style={{ color: blog.style.textColor }}>
                    {blog.author}
                  </p>
                  <p className="text-xs opacity-60">{blog.authorBio}</p>
                </div>
              </div>
              <div className="flex items-center space-x-1">
                <Calendar className="h-4 w-4" />
                <span>{blog.date}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span>{blog.readTime}</span>
              </div>
            </div>

            {/* Tags */}
            <div className="mt-6 flex flex-wrap gap-2">
              {blog.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-opacity-20 px-3 py-1 text-sm font-medium transition-colors hover:bg-opacity-30"
                  style={{ backgroundColor: blog.style.accentColor }}
                >
                  #{tag}
                </span>
              ))}
            </div>
          </header>

          {/* Featured Image */}
       

          {/* Article Content */}
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-12 lg:grid-cols-4">
              {/* Main Content */}
              <div className="lg:col-span-3">
                <div
                  className="prose prose-lg max-w-none prose-headings:font-bold prose-p:leading-relaxed prose-a:no-underline hover:prose-a:underline prose-strong:font-bold prose-ul:list-disc prose-ol:list-decimal prose-table:border-collapse prose-th:border prose-th:border-gray-300 prose-th:p-2 prose-td:border prose-td:border-gray-300 prose-td:p-2"
                  style={
                    {
                      color: blog.style.textColor,
                      "--tw-prose-headings": blog.style.textColor,
                      "--tw-prose-links": blog.style.accentColor,
                      "--tw-prose-strong": blog.style.textColor,
                    } as React.CSSProperties
                  }
                  dangerouslySetInnerHTML={{ __html: blog.content }}
                />

                {/* Share Section */}
                <div className="mt-12 border-t border-opacity-20 pt-8" style={{ borderColor: blog.style.textColor }}>
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
                  {/* Author Info */}
                  <div className="rounded-xl bg-opacity-10 p-6" style={{ backgroundColor: blog.style.accentColor }}>
                    <h3 className="mb-4 font-semibold">About the Author</h3>
                    <div className="flex items-center space-x-3 mb-3">
                    
                      <div>
                        <p className="font-medium">{blog.author}</p>
                      </div>
                    </div>
                    <p className="text-sm opacity-80">{blog.authorBio}</p>
                  </div>

                  {/* Related Articles */}
                  {relatedBlogs.length > 0 && (
                    <div className="rounded-xl bg-opacity-10 p-6" style={{ backgroundColor: blog.style.accentColor }}>
                      <h3 className="mb-4 font-semibold">Related Articles</h3>
                      <div className="space-y-4">
                        {relatedBlogs.map((relatedBlog) => (
                          <Link key={relatedBlog.id} href={`/blog/${relatedBlog.slug}`} className="block group">
                            <h4 className="text-sm font-medium group-hover:opacity-70 transition-opacity line-clamp-2">
                              {relatedBlog.title}
                            </h4>
                            <p className="text-xs opacity-60 mt-1">{relatedBlog.date}</p>
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

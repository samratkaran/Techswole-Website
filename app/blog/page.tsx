import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { blogsData } from "@/data/blogs"
import { Calendar, Clock } from "lucide-react"

export default function BlogPage() {
  const featuredBlogs = blogsData.filter((blog) => blog.featured && blog.published)
  const regularBlogs = blogsData.filter((blog) => !blog.featured && blog.published)
  const categories = [...new Set(blogsData.map((blog) => blog.category))]

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-white pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">Our Blog</h1>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">
              Insights, tutorials, and thoughts from our team of experts on the latest trends in technology and software
              development.
            </p>
          </div>

          {/* Categories Filter */}
          <div className="mb-12 flex flex-wrap justify-center gap-3">
            <button className="rounded-full bg-black px-6 py-2 text-sm font-medium text-white">All Posts</button>
            {categories.map((category) => (
              <button
                key={category}
                className="rounded-full bg-gray-100 px-6 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-200"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Featured Blogs */}
          {featuredBlogs.length > 0 && (
            <div className="mb-20">
              <h2 className="mb-8 text-2xl font-bold">Featured Posts</h2>
              <div className="grid gap-8 md:grid-cols-2">
                {featuredBlogs.map((blog) => (
                  <Link
                    key={blog.id}
                    href={`/blog/${blog.slug}`}
                    className="group overflow-hidden rounded-2xl bg-white shadow-lg transition-all hover:shadow-xl"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={blog.image || "/placeholder.svg"}
                        alt={blog.title}
                        width={800}
                        height={400}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="rounded-full bg-black px-3 py-1 text-xs font-medium text-white">Featured</span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="mb-3 flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{blog.date}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{blog.readTime}</span>
                        </div>
                      </div>
                      <h3 className="mb-3 text-xl font-bold group-hover:text-blue-600 transition-colors">
                        {blog.title}
                      </h3>
                      <p className="mb-4 text-gray-600 line-clamp-2">{blog.excerpt}</p>
                      <div className="flex items-center justify-between">
                        
                        <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
                          {blog.category}
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Regular Blogs */}
          <div>
            <h2 className="mb-8 text-2xl font-bold">All Posts</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {regularBlogs.map((blog) => (
                <Link
                  key={blog.id}
                  href={`/blog/${blog.slug}`}
                  className="group overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-lg"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={blog.image || "/placeholder.svg"}
                      alt={blog.title}
                      width={600}
                      height={300}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="mb-3 flex items-center space-x-3 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        <span>{blog.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>{blog.readTime}</span>
                      </div>
                    </div>
                    <h3 className="mb-3 text-lg font-bold group-hover:text-blue-600 transition-colors line-clamp-2">
                      {blog.title}
                    </h3>
                    <p className="mb-4 text-gray-600 text-sm line-clamp-3">{blog.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-700">
                        {blog.category}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="mt-20 rounded-3xl bg-gradient-to-r from-blue-500 to-purple-600 p-8 text-center text-white">
            <h2 className="mb-4 text-2xl font-bold">Stay Updated</h2>
            <p className="mb-6 opacity-90">
              Subscribe to our newsletter to get the latest blog posts and insights delivered to your inbox.
            </p>
            <div className="mx-auto flex max-w-md space-x-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-lg px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="rounded-lg bg-white px-6 py-2 font-semibold text-blue-600 transition-colors hover:bg-gray-100">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

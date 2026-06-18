import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { newsData } from "@/data/news"
import { Calendar, Clock, User } from "lucide-react"

export default function NewsPage() {
  const featuredNews = newsData.filter((news) => news.featured && news.published)
  const regularNews = newsData.filter((news) => !news.featured && news.published)
  const categories = [...new Set(newsData.map((news) => news.category))]

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-white pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">Latest News</h1>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">
              Stay updated with the latest news, announcements, and developments from TechSwole.
            </p>
          </div>

          {/* Categories Filter */}
          <div className="mb-12 flex flex-wrap justify-center gap-3">
            <button className="rounded-full bg-black px-6 py-2 text-sm font-medium text-white">All News</button>
            {categories.map((category) => (
              <button
                key={category}
                className="rounded-full bg-gray-100 px-6 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-200"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Featured News */}
          {featuredNews.length > 0 && (
            <div className="mb-20">
              <h2 className="mb-8 text-2xl font-bold">Featured News</h2>
              <div className="grid gap-8 md:grid-cols-2">
                {featuredNews.map((news) => (
                  <Link
                    key={news.id}
                    href={`/news/${news.slug}`}
                    className="group overflow-hidden rounded-2xl bg-white shadow-lg transition-all hover:shadow-xl"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={news.image || "/placeholder.svg"}
                        alt={news.title}
                        width={800}
                        height={400}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="rounded-full bg-red-600 px-3 py-1 text-xs font-medium text-white">
                          Featured
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="mb-3 flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{news.date}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{news.readTime}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <User className="h-4 w-4" />
                          <span>{news.author}</span>
                        </div>
                      </div>
                      <h3 className="mb-3 text-xl font-bold group-hover:text-blue-600 transition-colors">
                        {news.title}
                      </h3>
                      <p className="mb-4 text-gray-600 line-clamp-2">{news.excerpt}</p>
                      <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
                        {news.category}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Regular News */}
          <div>
            <h2 className="mb-8 text-2xl font-bold">All News</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {regularNews.map((news) => (
                <Link
                  key={news.id}
                  href={`/news/${news.slug}`}
                  className="group overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-lg"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={news.image || "/placeholder.svg"}
                      alt={news.title}
                      width={600}
                      height={300}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="mb-3 flex items-center space-x-3 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        <span>{news.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>{news.readTime}</span>
                      </div>
                    </div>
                    <h3 className="mb-3 text-lg font-bold group-hover:text-blue-600 transition-colors line-clamp-2">
                      {news.title}
                    </h3>
                    <p className="mb-4 text-gray-600 text-sm line-clamp-3">{news.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">{news.author}</span>
                      <span className="rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-700">
                        {news.category}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

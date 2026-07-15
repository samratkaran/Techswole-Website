import Image from "next/image"
import Link from "next/link"
import { VerticalInfiniteScroll } from "@/components/vertical-infinite-scroll"
import { newsData } from "@/data/news"
import { blogsData } from "@/data/blogs"
import { ArrowRight } from "lucide-react"

// Card component for both news and blogs
function ContentCard({
  title,
  excerpt,
  image,
  date,
  author,
  url,
}: {
  title: string
  excerpt: string
  image: string
  date: string
  author?: string
  url: string
}) {
  return (
    <div className="mb-6 flex overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md">
      <div className="relative h-auto w-1/3 min-w-[120px]">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={300}
          height={200}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex w-2/3 flex-col justify-between p-4">
        <div>
          <h3 className="mb-2 text-lg font-bold line-clamp-2">{title}</h3>
          <p className="mb-2 text-sm text-gray-600 line-clamp-2">{excerpt}</p>
        </div>
        <div className="flex items-center justify-between">
          <div className="text-xs text-gray-500">
            {author && <span className="mr-2">{author} •</span>}
            <span>{date}</span>
          </div>
          <Link href={url} className="flex items-center text-sm font-medium text-black hover:underline">
            View More
            <ArrowRight className="ml-1 h-3 w-3" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export function NewsBlogsSection() {
  // Group the cards to ensure they're visible in both columns
  const newsCards = (
    <div className="flex flex-col">
      {newsData.map((news) => (
        <ContentCard
          key={`news-${news.id}`}
          title={news.title}
          excerpt={news.excerpt}
          image={news.image}
          date={news.date}
          url={`/article/${news.slug}`}
        />
      ))}
    </div>
  )

  const blogCards = (
    <div className="flex flex-col">
      {blogsData.map((blog) => (
        <ContentCard
          key={`blog-${blog.id}`}
          title={blog.title}
          excerpt={blog.excerpt}
          image={blog.image}
          date={blog.date}
        
          url={`/article/${blog.slug}`}
        />
      ))}
    </div>
  )

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold">News & Blogs</h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            Stay updated with the latest news about our company and insights from our experts.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* News Column - Bottom to Top Animation */}
          <div>
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-2xl font-bold">Latest News</h3>
              <Link href="/news" className="text-sm font-medium text-black hover:underline">
                View All News
              </Link>
            </div>
            <div className="h-[600px] overflow-hidden">
              <VerticalInfiniteScroll direction="up" speed={25} className="py-2">
                {newsCards}
              </VerticalInfiniteScroll>
            </div>
          </div>

          {/* Blogs Column - Bottom to Top Animation (same as news) */}
          <div>
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-2xl font-bold">Featured Blogs</h3>
              <Link href="/blog" className="text-sm font-medium text-black hover:underline">
                View All Blogs
              </Link>
            </div>
            <div className="h-[600px] overflow-hidden">
              <VerticalInfiniteScroll direction="up" speed={25} className="py-2">
                {blogCards}
              </VerticalInfiniteScroll>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

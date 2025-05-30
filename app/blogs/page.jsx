import Head from 'next/head'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function Blog() {
  const blogPosts = [
    {
      title: "Understanding Anxiety in the Modern World",
      excerpt: "Explore the common causes of anxiety and practical strategies for managing stress in today's fast-paced environment.",
      date: "March 15, 2024",
      readTime: "5 min read"
    },
    {
      title: "The Importance of Mental Health in the Workplace",
      excerpt: "How organizations can create supportive environments that prioritize employee well-being and productivity.",
      date: "March 8, 2024",
      readTime: "7 min read"
    },
    {
      title: "Building Resilience in Children and Adolescents",
      excerpt: "Essential strategies for helping young people develop emotional strength and coping mechanisms.",
      date: "February 28, 2024",
      readTime: "6 min read"
    }
  ]

  return (
    <>
      <Head>
        <title>Blog - Nerea Psychology</title>
        <meta name="description" content="Insights, advice, and resources on mental health and psychological well-being." />
      </Head>
      
      <Header />
      <main className="min-h-screen bg-stone-50">
        {/* Hero Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-stone-100 to-stone-200">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-light text-stone-700 mb-6">Blog</h1>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              Insights, reflections, and resources to support your mental health journey
            </p>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-8">
              {blogPosts.map((post, index) => (
                <article key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center gap-4 text-sm text-stone-500 mb-4">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="text-2xl font-light text-stone-700 mb-4 hover:text-stone-600 cursor-pointer">
                    {post.title}
                  </h2>
                  <p className="text-stone-600 leading-relaxed mb-6">
                    {post.excerpt}
                  </p>
                  <button className="text-stone-700 font-medium hover:text-stone-600 transition-colors duration-300">
                    Read More →
                  </button>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

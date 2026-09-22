import { Calendar, Heart, MessageCircle } from 'lucide-react'

const posts = [
  {
    title: 'Advances in Minimally Invasive Surgery',
    excerpt:
      'New techniques are reducing recovery times and improving patient outcomes across multiple specialties.',
    date: '15th Dec',
    likes: 24,
    comments: 8,
    image: 'https://picsum.photos/seed/vitala-blog1/200/150',
  },
  {
    title: 'Mental Health Awareness Month',
    excerpt:
      'Understanding the importance of mental health and the resources available for support.',
    date: '12th Dec',
    likes: 18,
    comments: 5,
    image: 'https://picsum.photos/seed/vitala-blog2/200/150',
  },
  {
    title: 'Nutrition Tips for Heart Health',
    excerpt:
      'Simple dietary changes that can significantly reduce the risk of cardiovascular disease.',
    date: '10th Dec',
    likes: 31,
    comments: 12,
    image: 'https://picsum.photos/seed/vitala-blog3/200/150',
  },
]

export function BlogAppointment() {
  return (
    <section id="blog" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Blog posts */}
          <div>
            <div className="mb-8">
              <h2 className="mb-3 font-heading text-3xl font-bold text-gray-900">
                Our Recent Blogs
              </h2>
              <p className="text-gray-500">
                Stay informed with the latest news and insights from our medical team.
              </p>
            </div>
            <div className="space-y-6">
              {posts.map((post) => (
                <article key={post.title} className="flex gap-4 rounded-lg bg-gray-50 p-4">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-24 w-24 flex-shrink-0 rounded object-cover"
                    loading="lazy"
                  />
                  <div>
                    <div className="mb-2 flex items-center gap-3 text-xs text-gray-400">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" /> {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Heart className="h-3 w-3" /> {post.likes}
                      </span>
                      <span className="flex items-center gap-1">
                        <MessageCircle className="h-3 w-3" /> {post.comments}
                      </span>
                    </div>
                    <h4 className="mb-1 font-heading text-base font-bold text-gray-900">
                      <a href="#" className="transition-colors hover:text-sky-400">
                        {post.title}
                      </a>
                    </h4>
                    <p className="text-sm text-gray-500">{post.excerpt}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Appointment form */}
          <div id="appointment">
            <div className="mb-8">
              <h2 className="mb-3 font-heading text-3xl font-bold text-gray-900">
                Make an Appointment
              </h2>
              <p className="text-gray-500">
                Book your visit with our experienced medical professionals.
              </p>
            </div>
            <form className="space-y-4 rounded-lg bg-gray-50 p-6">
              <input
                type="text"
                placeholder="Patient name"
                required
                className="w-full rounded border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-100"
              />
              <input
                type="email"
                placeholder="Email address"
                required
                className="w-full rounded border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-100"
              />
              <input
                type="text"
                placeholder="Date of birth"
                required
                className="w-full rounded border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-100"
              />
              <select
                required
                className="w-full rounded border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-100"
                aria-label="Doctor's name"
              >
                <option value="">Doctor's name</option>
                <option value="dr-davis">Dr. Ethel Davis</option>
                <option value="dr-cooper">Dr. Rodney Cooper</option>
                <option value="dr-walker">Dr. Dane Walker</option>
                <option value="dr-keller">Dr. Lena Keller</option>
              </select>
              <input
                type="text"
                placeholder="Appointment date"
                required
                className="w-full rounded border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-100"
              />
              <textarea
                placeholder="Message"
                rows={4}
                required
                className="w-full resize-none rounded border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-100"
              />
              <div className="text-center">
                <button
                  type="submit"
                  className="rounded-full bg-gradient-to-r from-sky-400 to-sky-500 px-8 py-3 text-sm font-medium uppercase text-white shadow-lg transition-all hover:shadow-xl hover:brightness-110"
                >
                  Confirm Booking
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

const posts = [
  {
    title: 'Modern Dental Care Techniques',
    date: 'Sep 10, 2026',
    img: 'https://picsum.photos/seed/odonto-blog1/600/400',
  },
  {
    title: 'Tips for Healthy Teeth',
    date: 'Sep 05, 2026',
    img: 'https://picsum.photos/seed/odonto-blog2/600/400',
  },
  {
    title: 'Choosing the Right Dentist',
    date: 'Aug 28, 2026',
    img: 'https://picsum.photos/seed/odonto-blog3/600/400',
  },
]

export function Blog() {
  return (
    <section id="blog" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Recent From Blog</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div
              key={post.title}
              className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition-shadow"
            >
              <img src={post.img} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-5">
                <span className="text-teal-500 text-sm font-medium">{post.date}</span>
                <h3 className="text-lg font-bold text-gray-900 mt-1">{post.title}</h3>
                <p className="text-gray-600 text-sm mt-2">
                  Far far away, behind the word mountains, far from the countries Vokalia and
                  Consonantia.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

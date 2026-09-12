const posts = [
  {
    title: 'How to Maintain Your AC Before Summer',
    author: 'John Smith',
    date: 'Sep 10, 2026',
    img: 'frostguard-blog-1',
  },
  {
    title: '5 Signs Your Furnace Needs Repair',
    author: 'Jane Doe',
    date: 'Sep 8, 2026',
    img: 'frostguard-blog-2',
  },
  {
    title: 'Energy Saving Tips for Your HVAC System',
    author: 'Mike Brown',
    date: 'Sep 5, 2026',
    img: 'frostguard-blog-3',
  },
]

export function LatestNews() {
  return (
    <section className="py-16 bg-[#F3F8FC]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="font-['Saira_Condensed'] text-3xl md:text-4xl font-bold text-[#142336] text-center mb-10">
          HVAC Tips & Tricks
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((p) => (
            <div key={p.title} className="bg-white rounded-lg overflow-hidden shadow-sm group">
              <div
                className="relative h-56 bg-cover bg-center"
                style={{ backgroundImage: `url(https://picsum.photos/seed/${p.img}/600/400)` }}
              >
                <span className="absolute top-3 left-3 bg-[#FAD110] text-[#142336] text-xs px-3 py-1 rounded font-['Mulish'] font-semibold">
                  Tips & tricks
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-['Saira_Condensed'] text-lg font-bold text-[#142336] mb-2 group-hover:text-[#4586D5] transition-colors">
                  <a href="#">{p.title}</a>
                </h3>
                <div className="flex items-center gap-3 text-xs text-[#444444] font-['Mulish']">
                  <span>{p.author}</span>
                  <span>·</span>
                  <span>{p.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function About() {
  return (
    <section id="about" className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold text-gray-900">Welcome to Coachly</h2>
            <p className="mb-4 leading-relaxed text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quaerat nostrum
              voluptatibus aspernatur eligendi accusantium cum, impedit blanditiis voluptate commodi
              doloribus.
            </p>
            <p className="leading-relaxed text-gray-600">
              Nemo ab est distinctio rerum facilis excepturi quos maxime dolorum perferendis iusto
              architecto, in minus placeat perspiciatis repellendus autem error.
            </p>
          </div>
          <div>
            <img
              src="https://picsum.photos/seed/coachly-about/600/400"
              alt="Coaching session"
              className="w-full rounded-lg object-cover shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

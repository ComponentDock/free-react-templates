export function Intro() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
              Welcome to Our Church
            </h2>
            <p className="mt-6 leading-relaxed text-mist">
              Our church is a place where people come together to worship, pray, and grow in faith.
              We believe in the power of community and the love that binds us all. Whether you are
              looking for a spiritual home or simply curious about faith, you are welcome here.
            </p>
            <p className="mt-4 leading-relaxed text-mist">
              Join us for Sunday services, Bible study groups, and community outreach programs that
              make a difference in the lives of those around us.
            </p>
          </div>
          <div className="relative">
            <img
              src="https://picsum.photos/seed/sacredgate-intro/600/400"
              alt="Inside our church"
              className="w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default function About() {
  return (
    <section id="about" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div
            className="aspect-[4/3] rounded bg-cover bg-center"
            style={{
              backgroundImage: 'url(https://picsum.photos/seed/clareo-about/800/600)',
            }}
            role="img"
            aria-label="Photography studio workspace"
          />
          <div>
            <h2 className="font-display text-4xl font-bold text-gray-900 md:text-5xl">
              We Are Clareo a Photography Studio
            </h2>
            <p className="mt-6 leading-relaxed text-gray-600">
              We are a passionate team of photographers and creative professionals dedicated to
              capturing life's most beautiful moments. With years of experience in fashion,
              portrait, and event photography, we bring your vision to life through our lens.
            </p>
            <p className="mt-4 leading-relaxed text-gray-600">
              Our studio is equipped with state-of-the-art equipment and a creative space designed
              to inspire. From concept to final delivery, we ensure every detail is perfect.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export function Testimonial() {
  return (
    <section
      className="relative py-20 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('https://picsum.photos/seed/classroom-test/1920/600')" }}
    >
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
        <img
          src="https://picsum.photos/seed/classroom-tp/100/100"
          alt="Jerome Jensen"
          className="w-20 h-20 rounded-full mx-auto mb-6 object-cover"
          loading="lazy"
        />
        <h3 className="text-xl font-bold text-white mb-4">Jerome Jensen</h3>
        <blockquote className="text-gray-300 italic text-lg">
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum rem soluta sit eius
          necessitatibus voluptate excepturi beatae ad eveniet sapiente impedit quae modi quo
          provident odit molestias!"
        </blockquote>
      </div>
    </section>
  )
}

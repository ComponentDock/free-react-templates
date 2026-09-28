export function ProjectUs() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 md:grid-cols-2">
        <div>
          <h2 className="mb-4 text-3xl font-bold text-text-dark font-heading md:text-4xl">
            We are here to help you for better solutions
          </h2>
          <p className="mb-6 text-text-gray-dark">
            Our experienced team is dedicated to understanding your unique business challenges and
            delivering tailored solutions that drive growth. From strategy to execution, we are your
            trusted partner in digital marketing.
          </p>
        </div>
        <img
          src="https://picsum.photos/seed/expo-project/600/500"
          alt="Project solutions"
          className="w-full rounded-lg"
        />
      </div>
    </section>
  )
}

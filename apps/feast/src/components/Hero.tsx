const slides = [
  {
    heading: 'Food Catering\nService.',
    description:
      'We provide exceptional catering services for all occasions. From intimate gatherings to grand celebrations, our team delivers unforgettable culinary experiences.',
    image: 'https://picsum.photos/seed/feast-hero-1/1920/800',
  },
  {
    heading: 'Professional\nEvent Catering.',
    description:
      'Let us handle the food while you enjoy the moment. Our expert chefs craft menus tailored to your taste and budget.',
    image: 'https://picsum.photos/seed/feast-hero-2/1920/800',
  },
  {
    heading: 'Delicious Menus\nCustomized.',
    description:
      'From birthday parties to corporate events, we offer a wide range of cuisines and presentation styles to match your vision.',
    image: 'https://picsum.photos/seed/feast-hero-3/1920/800',
  },
] as const

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[600px] items-center justify-center overflow-hidden bg-navy"
    >
      {/* Background image */}
      <img
        src={slides[0].image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-50"
        loading="eager"
      />

      {/* Content */}
      <div className="relative z-10 px-4 text-center text-white">
        <h1 className="whitespace-pre-line font-sans text-5xl font-bold leading-tight md:text-6xl">
          {slides[0].heading}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300">{slides[0].description}</p>
      </div>

      {/* Zigzag bottom border */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 60L40 40L80 60L120 40L160 60L200 40L240 60L280 40L320 60L360 40L400 60L440 40L480 60L520 40L560 60L600 40L640 60L680 40L720 60L760 40L800 60L840 40L880 60L920 40L960 60L1000 40L1040 60L1080 40L1120 60L1160 40L1200 60L1240 40L1280 60L1320 40L1360 60L1400 40L1440 60V0H0V60Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  )
}

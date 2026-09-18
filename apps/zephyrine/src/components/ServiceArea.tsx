const services = [
  { title: 'Creative Design', seed: 10 },
  { title: 'Driving Lesson', seed: 20 },
  { title: 'Climbing Stairs', seed: 30 },
  { title: 'Bike Accident', seed: 40 },
  { title: 'Car Driving', seed: 50 },
  { title: 'Beach Hotel', seed: 60 },
  { title: 'Under Passway', seed: 70 },
  { title: 'Dawn to Dusk', seed: 80 },
]

export function ServiceArea() {
  return (
    <section className="py-20" style={{ background: 'linear-gradient(0deg, #e66587, #f09458)' }}>
      <div className="max-w-[68.75%] mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative overflow-hidden rounded-lg cursor-pointer"
            >
              <img
                src={`https://picsum.photos/seed/${service.seed}/400/300`}
                alt={service.title}
                className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">
                <h4 className="text-[#222222] font-semibold text-sm uppercase mb-2">
                  {service.title}
                </h4>
                <p className="text-[#777777] text-xs mb-4">
                  Discover more about this service and what we offer.
                </p>
                <a
                  href="#get-started"
                  className="inline-block bg-transparent border-2 border-[#e66686] text-[#e66686] text-xs font-medium px-5 py-2 rounded-[20px] hover:bg-[#e66686] hover:text-white transition-colors"
                >
                  Get Started
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

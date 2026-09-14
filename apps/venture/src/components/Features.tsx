import { CheckCircle } from 'lucide-react'

const features = [
  'Having a home based business is a wonderful asset to your life. The problem still stands when it comes to managing it.',
  'Promotional Advertising Specialty: You Ve Waited Long Enough For Results.',
  'Direct Mail Advertising: How I Made 47,325 In 30 Days By Mailing 2,200 Letters.',
]

export function Features() {
  return (
    <section className="py-16 lg:py-24 bg-[#f9f9ff]">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <p
              className="text-[#04dbec] text-lg mb-3"
              style={{ fontFamily: 'Josefin Sans, sans-serif' }}
            >
              Features That You Will Get
            </p>
            <h2
              className="text-3xl lg:text-4xl font-bold text-[#0b1c39] mb-8"
              style={{ fontFamily: 'Josefin Sans, sans-serif' }}
            >
              All startups need to make their business work
            </h2>
            <ul className="space-y-6">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-4">
                  <CheckCircle className="text-[#04dbec] flex-shrink-0 mt-1" size={24} />
                  <p className="text-[#506172]">{feature}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:w-1/2">
            <img
              src="https://picsum.photos/seed/venture-features/600/400"
              alt="Business features"
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

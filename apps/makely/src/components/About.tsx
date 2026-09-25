import { Smartphone, Lightbulb } from 'lucide-react'

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">About Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-4">Who We Are</h3>
            <p className="text-makely-body mb-4">
              We are a passionate team of designers, developers, and strategists dedicated to
              creating exceptional digital experiences. With years of experience in the industry, we
              bring creativity and technical expertise to every project.
            </p>
            <p className="text-makely-body">
              Our mission is to help businesses thrive in the digital world by delivering innovative
              solutions that drive growth and engagement.
            </p>
          </div>
          <div>
            <img
              src="https://picsum.photos/seed/makely-about/800/600"
              alt="About Makely team"
              className="rounded-lg w-full"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex gap-4 items-start">
            <Smartphone size={40} className="text-primary shrink-0" />
            <div>
              <h4 className="text-lg font-bold mb-2">Web & Mobile Specialties</h4>
              <p className="text-makely-body">
                We specialize in creating responsive web and mobile applications that provide
                seamless experiences across all devices and platforms.
              </p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <Lightbulb size={40} className="text-primary shrink-0" />
            <div>
              <h4 className="text-lg font-bold mb-2">Intuitive Thinkers</h4>
              <p className="text-makely-body">
                Our team approaches every challenge with creative problem-solving and intuitive
                design thinking to deliver solutions that truly work.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

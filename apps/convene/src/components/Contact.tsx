import { Phone, Mail, Globe } from 'lucide-react'

export function Contact() {
  return (
    <section id="contact" className="bg-paper py-20 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <div className="mb-8">
              <h2 className="font-display text-3xl font-bold text-ink dark:text-white sm:text-4xl">
                Location
              </h2>
              <p className="mt-3 text-mist dark:text-gray-400">
                Get directions to our event center
              </p>
            </div>
            <div className="space-y-6">
              <div>
                <span className="text-sm font-semibold text-ink dark:text-white">Address:</span>
                <p className="mt-1 text-mist dark:text-gray-400">
                  01 Pascale Springs Apt. 339, NY City
                  <br />
                  United State
                </p>
              </div>
              <div className="flex flex-col gap-3 text-sm text-mist dark:text-gray-400">
                <span className="inline-flex items-center gap-2">
                  <Phone className="h-4 w-4 text-brand" />
                  <span className="font-semibold text-ink dark:text-white">Phone:</span>
                  (+12)-345-67-8910
                </span>
                <span className="inline-flex items-center gap-2">
                  <Mail className="h-4 w-4 text-brand" />
                  <span className="font-semibold text-ink dark:text-white">Email:</span>
                  info@convene.com
                </span>
                <span className="inline-flex items-center gap-2">
                  <Globe className="h-4 w-4 text-brand" />
                  <span className="font-semibold text-ink dark:text-white">Website:</span>
                  https://convene.com
                </span>
              </div>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52901.38789495531!2d-118.19465514866786!3d34.03523211493029!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2cf71ad83ff9f%3A0x518b28657f4543b7!2sEast%20Los%20Angeles%2C%20CA%2C%20USA!5e0!3m2!1sen!2sbd!4v1579763856144!5m2!1sen!2sbd"
              title="Event location map"
              className="h-80 w-full rounded-lg border-0"
              sandbox="allow-scripts"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

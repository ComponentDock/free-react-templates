import { useState, type FormEvent } from 'react'
import { ArrowRight } from 'lucide-react'
import { FacebookIcon, TwitterIcon, DribbbleIcon } from './BrandIcons'

export function Footer() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setEmail('')
  }

  return (
    <footer id="footer" className="bg-dark py-[120px]">
      <div className="mx-auto max-w-[1170px] px-4">
        <div className="grid gap-8 md:grid-cols-12">
          <div className="md:col-span-3">
            <h6 className="mb-4 font-oswald text-[20px] font-medium text-white">About Us</h6>
            <p className="text-sm leading-relaxed text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt ut labore dolore magna aliqua.
            </p>
          </div>
          <div className="md:col-span-3">
            <h6 className="mb-4 font-oswald text-[20px] font-medium text-white">Contact Us</h6>
            <p className="text-sm leading-relaxed text-gray-400">
              56/8, Santa Monica Boulevard, Los Angeles, California, United States of America
            </p>
            <a
              href="tel:01265325689746"
              className="mt-2 block text-sm text-gray-400 hover:text-accent"
            >
              012-6532-568-9746
            </a>
            <a
              href="tel:01265325689746"
              className="mt-1 block text-sm text-gray-400 hover:text-accent"
            >
              012-6532-568-9746
            </a>
          </div>
          <div className="md:col-span-5 md:col-start-8">
            <h6 className="mb-4 font-oswald text-[20px] font-medium text-white">Newsletter</h6>
            <p className="mb-4 text-sm text-gray-400">
              You can trust us. we only send promo offers, not a single spam.
            </p>
            <form onSubmit={handleSubmit} className="flex">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="flex-1 border border-[#333] bg-transparent px-4 py-2 text-sm text-white placeholder-gray-500 focus:outline-none"
                aria-label="Email address for newsletter"
              />
              <button
                type="submit"
                aria-label="Subscribe to newsletter"
                className="flex items-center justify-center bg-accent px-4 text-dark transition-colors hover:bg-accent-hover"
              >
                <ArrowRight size={16} />
              </button>
            </form>
          </div>
        </div>
        <div className="mt-12 flex flex-wrap items-center justify-between border-t border-[#333] pt-8">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} All rights reserved | Made with{' '}
            <span className="text-accent">&hearts;</span> at{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white underline hover:text-accent"
            >
              Component Dock
            </a>
          </p>
          <div className="mt-4 flex gap-4 md:mt-0">
            <a
              href="#"
              aria-label="Facebook"
              className="text-gray-400 transition-colors hover:text-white"
            >
              <FacebookIcon size={16} />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="text-gray-400 transition-colors hover:text-white"
            >
              <TwitterIcon size={16} />
            </a>
            <a
              href="#"
              aria-label="Dribbble"
              className="text-gray-400 transition-colors hover:text-white"
            >
              <DribbbleIcon size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

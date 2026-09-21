import { TwitterIcon, FacebookIcon, InstagramIcon } from './SocialIcons'

export function Footer() {
  return (
    <footer className="relative bg-dark py-16 text-gray-400">
      <img
        src="https://picsum.photos/seed/ironpulse-footer-bg/1920/600"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-10"
      />
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 md:grid-cols-4">
        {/* About */}
        <div>
          <h3 className="mb-4 text-lg font-bold text-white">About IronPulse</h3>
          <p className="mb-4 text-sm leading-relaxed">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.
          </p>
          <div className="flex gap-3 text-gray-400">
            <a href="#" aria-label="Twitter">
              <TwitterIcon size={18} />
            </a>
            <a href="#" aria-label="Facebook">
              <FacebookIcon size={18} />
            </a>
            <a href="#" aria-label="Instagram">
              <InstagramIcon size={18} />
            </a>
          </div>
        </div>
        {/* Recent Blog */}
        <div>
          <h3 className="mb-4 text-lg font-bold text-white">Recent Blog</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="transition hover:text-brand">
                How to Start Your Fitness Journey
              </a>
            </li>
            <li>
              <a href="#" className="transition hover:text-brand">
                Nutrition Tips for Muscle Growth
              </a>
            </li>
            <li>
              <a href="#" className="transition hover:text-brand">
                The Power of Recovery Days
              </a>
            </li>
          </ul>
        </div>
        {/* Services */}
        <div>
          <h3 className="mb-4 text-lg font-bold text-white">Services</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="transition hover:text-brand">
                Crossfit
              </a>
            </li>
            <li>
              <a href="#" className="transition hover:text-brand">
                Aerobic Classes
              </a>
            </li>
            <li>
              <a href="#" className="transition hover:text-brand">
                Weight Lifting
              </a>
            </li>
            <li>
              <a href="#" className="transition hover:text-brand">
                Yoga Classes
              </a>
            </li>
            <li>
              <a href="#" className="transition hover:text-brand">
                Cardio Training
              </a>
            </li>
          </ul>
        </div>
        {/* Contact */}
        <div>
          <h3 className="mb-4 text-lg font-bold text-white">Have a Questions?</h3>
          <ul className="space-y-2 text-sm">
            <li>198 West 21th Street, Suite 721 New York NY 10016</li>
            <li>10-367-5501</li>
            <li>ironpulse@example.com</li>
          </ul>
        </div>
      </div>
      <div className="relative z-10 mt-12 border-t border-gray-700 px-4 pt-6 text-center text-sm text-gray-500">
        <p>
          &copy; 2025 IronPulse. All rights reserved. More templates at{' '}
          <a
            href="https://www.componentdock.com/"
            className="text-brand transition hover:text-brand-dark"
          >
            Component Dock
          </a>
        </p>
      </div>
    </footer>
  )
}

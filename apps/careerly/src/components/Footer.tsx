import { Briefcase } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-dark-bg text-gray-400 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* About */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Briefcase className="h-6 w-6 text-brand" />
              <span className="text-xl font-bold text-white">
                Career<span className="text-brand">ly</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              Careerly connects talented professionals with leading companies. Find your next
              opportunity or hire the best talent.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-brand transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* For Candidates */}
          <div>
            <h3 className="text-white font-semibold mb-4">For Candidates</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-brand transition-colors">
                  Browse Jobs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand transition-colors">
                  Browse Categories
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand transition-colors">
                  My Account
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand transition-colors">
                  Resume Builder
                </a>
              </li>
            </ul>
          </div>

          {/* For Employers */}
          <div>
            <h3 className="text-white font-semibold mb-4">For Employers</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-brand transition-colors">
                  Post a Job
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand transition-colors">
                  Browse Candidates
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand transition-colors">
                  Employer Profile
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand transition-colors">
                  Pricing
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Careerly. All rights reserved.
          </p>
          <p className="text-sm">
            More templates at{' '}
            <a href="https://www.componentdock.com/" className="text-brand hover:underline">
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

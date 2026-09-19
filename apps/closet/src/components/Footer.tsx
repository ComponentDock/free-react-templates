import { ArrowUp } from 'lucide-react'

const customerCare = [
  'Contact',
  'Returns/Exchange',
  'Gift Voucher',
  'Wishlist',
  'Customer Services',
]
const information = [
  'About Us',
  'Delivery Information',
  'Privacy Policy',
  'Order Tracking',
  'Support',
]

export function Footer() {
  return (
    <footer className="bg-ink pt-16 text-white" role="contentinfo">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* About */}
          <div>
            <h4 className="mb-4 text-lg font-bold">About Closet</h4>
            <p className="mb-4 text-sm text-white/70">
              Your one-stop fashion boutique for the latest trends in clothing, accessories, and
              home decor.
            </p>
          </div>

          {/* Customer Care */}
          <div>
            <h4 className="mb-4 text-lg font-bold">Customer Care</h4>
            <ul className="space-y-2">
              {customerCare.map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-white/70 transition-colors hover:text-brand">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Information */}
          <div>
            <h4 className="mb-4 text-lg font-bold">Information</h4>
            <ul className="space-y-2">
              {information.map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-white/70 transition-colors hover:text-brand">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-lg font-bold">Contact Us</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>291 South 21st Street, Suite 721</li>
              <li>New York, NY 10016</li>
              <li>
                <a href="tel://19122527350" className="transition-colors hover:text-brand">
                  +1 912-252-7350
                </a>
              </li>
              <li>
                <a href="mailto:info@closet.com" className="transition-colors hover:text-brand">
                  info@closet.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-12 border-t border-white/10 py-6">
        <div className="container mx-auto px-4 text-center text-sm text-white/70">
          <p>
            &copy; {new Date().getFullYear()} All rights reserved | More templates at{' '}
            <a
              href="https://www.componentdock.com/"
              className="text-brand underline transition-colors hover:text-white"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>

      {/* Back to top */}
      <a
        href="#"
        aria-label="Back to top"
        className="fixed bottom-6 right-6 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-brand text-white shadow-lg transition-colors hover:bg-brand-dark"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  )
}

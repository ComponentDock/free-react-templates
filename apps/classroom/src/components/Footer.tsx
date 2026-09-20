const links = ['Home', 'Courses', 'Programs', 'Teachers']

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 md:px-16">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          <div>
            <h4 className="text-lg font-bold text-gray-900 mb-4">About Classroom</h4>
            <p className="text-sm text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro consectetur ut hic
              ipsum et veritatis corrupti. Itaque eius soluta optio dolorum temporibus.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-bold text-gray-900 mb-4">Links</h4>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-sm text-indigo-500 hover:underline"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold text-gray-900 mb-4">Subscribe</h4>
            <p className="text-sm text-gray-500 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt incidunt iure iusto
              architecto?
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex">
              <input
                type="email"
                placeholder="Email"
                className="flex-1 border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:border-indigo-500"
              />
              <button
                type="submit"
                className="bg-indigo-500 text-white px-6 py-2 text-xs font-black uppercase hover:bg-indigo-600 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-6 text-center text-sm text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} All rights reserved. More templates at{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-500 hover:underline"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

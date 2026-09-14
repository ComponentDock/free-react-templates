export function TopBar() {
  return (
    <div className="bg-[#222] text-white text-xs py-2 hidden md:block">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex gap-5">
          <a href="#" aria-label="Facebook" className="hover:text-[#988fff] transition-colors">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-[#988fff] transition-colors">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
            </svg>
          </a>
          <a href="#" aria-label="Dribbble" className="hover:text-[#988fff] transition-colors">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" />
              <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32" />
              <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72" />
            </svg>
          </a>
          <a href="#" aria-label="Behance" className="hover:text-[#988fff] transition-colors">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M7.5 11c1.38 0 2.5-1.12 2.5-2.5S8.88 6 7.5 6H3v5h4.5zM3 18h5c1.38 0 2.5-1.12 2.5-2.5S9.38 13 8 13H3v5zm11-7h5.5c-.17-1.57-1.07-2.5-2.75-2.5-1.1 0-1.75.5-2.25 1.25-.35.55-.5 1.15-.5 2.25h5zm2.5 5.5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5h-5z" />
            </svg>
          </a>
        </div>
        <div className="flex gap-4">
          <a href="tel:+9530123654896" className="hover:text-[#988fff] transition-colors">
            +953 012 3654 896
          </a>
          <a href="mailto:hello@renovo.com" className="hover:text-[#988fff] transition-colors">
            hello@renovo.com
          </a>
        </div>
      </div>
    </div>
  )
}

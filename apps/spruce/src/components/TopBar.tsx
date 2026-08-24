export function TopBar() {
  return (
    <div className="bg-navy text-white text-center py-3 px-4 text-sm font-body">
      <p>
        This handy little bar is great for informing visitors of various features.{' '}
        <a
          href="#learn-more"
          className="inline-block bg-brand text-white font-semibold px-5 py-1.5 rounded-full text-xs hover:bg-brand-light transition-colors"
        >
          Learn More
        </a>
      </p>
    </div>
  )
}

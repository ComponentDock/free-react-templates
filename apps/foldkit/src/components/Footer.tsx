export function Footer() {
  return (
    <footer className="py-8 text-center bg-[#efefef]">
      <p className="text-sm text-gray-600">
        &copy; {new Date().getFullYear()} FoldKit &mdash;{' '}
        <a
          href="https://www.componentdock.com/"
          className="font-semibold text-[#3b71ca] transition-colors hover:underline"
        >
          More templates at Component Dock
        </a>
      </p>
    </footer>
  )
}

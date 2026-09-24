export function Footer() {
  return (
    <footer className="mt-8 text-center text-sm text-[var(--color-ink)]">
      <p>
        Don&apos;t have an account?{' '}
        <a
          href="https://www.componentdock.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-[var(--color-primary-end)] transition-colors hover:underline"
        >
          Sign Up
        </a>
      </p>
    </footer>
  )
}

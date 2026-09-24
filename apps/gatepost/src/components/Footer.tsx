import { ButtonLink } from '@free-react-templates/ui'

export function Footer() {
  return (
    <footer className="text-center">
      <ButtonLink
        href="https://www.componentdock.com/"
        className="text-xs text-white/50 transition-colors hover:text-white/80"
      >
        Made with Component Dock
      </ButtonLink>
    </footer>
  )
}

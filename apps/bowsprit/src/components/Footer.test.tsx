import { render, screen } from '@testing-library/react'
import { DOCK_URL, FOOTER_NOTE, SITE_NAME } from '../lib/site'
import { Footer } from './Footer'

describe('Footer', () => {
  it('closes the page on a dark strip with a hairline edge, the app’s line and one Component Dock credit', () => {
    const { container } = render(<Footer />)

    const footer = container.firstElementChild as HTMLElement

    expect(footer).toHaveClass('border-t', 'border-white/10', 'bg-shell')
    expect(screen.getByText(new RegExp(`${SITE_NAME} — ${FOOTER_NOTE}`))).toBeInTheDocument()

    const credit = screen.getByRole('link', { name: 'Component Dock' })

    expect(credit).toHaveAttribute('href', DOCK_URL)
    expect(credit).toHaveAttribute('target', '_blank')
    expect(credit).toHaveAttribute('rel', 'noreferrer')

    expect(
      screen.getByText(new RegExp(`© ${new Date().getFullYear()}`)),
    ).toBeInTheDocument()
  })
})

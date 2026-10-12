import { render, screen, within } from '@testing-library/react'
import { DOCK_LABEL, DOCK_URL, FOOTER_NOTE, SITE_NAME } from '../lib/site'
import { Footer } from './Footer'

describe('Footer — the closing strip and its single outbound credit', () => {
  it('carries the page own line next to a year computed as it renders', () => {
    render(<Footer />)

    const footer = screen.getByRole('contentinfo')

    expect(footer).toHaveTextContent(SITE_NAME)
    expect(footer).toHaveTextContent(FOOTER_NOTE)
    expect(footer).toHaveTextContent(`© ${new Date().getFullYear()}`)
  })

  it('links Component Dock exactly once, leaving the page', () => {
    const { container } = render(<Footer />)

    const links = within(screen.getByRole('contentinfo')).getAllByRole('link')

    expect(links).toHaveLength(1)
    expect(links[0]).toHaveAttribute('href', DOCK_URL)
    expect(links[0]).toHaveTextContent(DOCK_LABEL)
    expect(links[0]).toHaveAttribute('target', '_blank')
    expect(links[0]).toHaveAttribute('rel', 'noreferrer')
    expect(links[0]?.className).toContain('text-brand')

    expect(container.querySelectorAll('a[href^="http"]')).toHaveLength(1)
  })
})

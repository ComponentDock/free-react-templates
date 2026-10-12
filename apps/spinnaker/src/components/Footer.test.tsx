import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'
import { DOCK_LABEL, DOCK_URL, FOOTER_NOTE, SITE_NAME } from '../lib/site'
import { footerClass, footerLinkClass } from '../lib/styles'

describe('Footer — the strip that closes the page', () => {
  it('carries the page’s own line and a year computed as it renders', () => {
    render(<Footer />)

    const footer = screen.getByTestId('footer')

    expect(footer.tagName).toBe('FOOTER')
    expect(footer.className).toBe(footerClass)
    expect(footer).toHaveTextContent(SITE_NAME)
    expect(footer).toHaveTextContent(FOOTER_NOTE)
    expect(footer).toHaveTextContent(String(new Date().getFullYear()))
  })

  it('credits the dock, and no one else, from the one link that leaves the page', () => {
    render(<Footer />)

    const credit = screen.getByRole('link', { name: DOCK_LABEL })

    expect(screen.getAllByRole('link')).toHaveLength(1)
    expect(credit).toHaveAttribute('href', DOCK_URL)
    expect(credit).toHaveAttribute('target', '_blank')
    expect(credit).toHaveAttribute('rel', 'noreferrer')
    expect(credit.className).toBe(footerLinkClass)
  })
})

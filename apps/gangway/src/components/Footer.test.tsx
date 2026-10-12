import { render, screen } from '@testing-library/react'
import { DOCK_LABEL, DOCK_URL, FOOTER_NOTE, SITE_NAME } from '../lib/site'
import { Footer } from './Footer'

describe('Footer — the closing strip', () => {
  it('names the page and credits Component Dock exactly once', () => {
    render(<Footer />)

    const credits = screen.getAllByRole('link', { name: DOCK_LABEL })

    expect(credits).toHaveLength(1)
    expect(credits[0]).toHaveAttribute('href', DOCK_URL)
    expect(credits[0]).toHaveAttribute('target', '_blank')
    expect(credits[0]).toHaveAttribute('rel', 'noreferrer')
    expect(screen.getByText(new RegExp(SITE_NAME))).toHaveTextContent(FOOTER_NOTE)
  })

  it('computes the year as it renders, under a dark surface with a translucent hairline', () => {
    render(<Footer />)

    const footer = screen.getByRole('contentinfo')

    expect(footer.className).toContain('border-t')
    expect(footer.className).toContain('border-white/10')
    expect(footer.className).toContain('bg-shell')
    expect(footer).toHaveTextContent(`© ${new Date().getFullYear()}`)
  })
})

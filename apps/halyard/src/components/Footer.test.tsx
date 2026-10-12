import { render, screen } from '@testing-library/react'
import { DOCK_LABEL, DOCK_URL, FOOTER_NOTE, SITE_NAME } from '../lib/site'
import { Footer } from './Footer'

describe('Footer — the page’s one outbound credit', () => {
  it('credits Component Dock exactly once, from the closing strip', () => {
    render(<Footer />)

    const credits = screen.getAllByRole('link', { name: DOCK_LABEL })

    expect(credits).toHaveLength(1)
    expect(credits[0]!).toHaveAttribute('href', DOCK_URL)
    expect(DOCK_URL).toBe('https://www.componentdock.com/')
    expect(credits[0]!).toHaveAttribute('target', '_blank')
    expect(credits[0]!).toHaveAttribute('rel', 'noreferrer')
    expect(credits[0]!.className).toContain('text-brand')
  })

  it('names the page and its line beside the credit and a year it computes as it renders', () => {
    render(<Footer />)

    const footer = screen.getByRole('contentinfo')

    expect(footer).toHaveClass('bg-shell')
    expect(footer.textContent).toContain(`${SITE_NAME} — ${FOOTER_NOTE}`)
    expect(footer.textContent).toContain(`© ${new Date().getFullYear()}`)
  })

  it('is the strip below the last section, with no attribution link to anybody else', () => {
    const { container } = render(<Footer />)

    const anchors = Array.from(container.querySelectorAll('a')) as HTMLAnchorElement[]

    expect(anchors).toHaveLength(1)
    expect(anchors[0]!.getAttribute('href')).toBe(DOCK_URL)
    expect(container.querySelectorAll('img, svg, span')).toHaveLength(0)
  })
})

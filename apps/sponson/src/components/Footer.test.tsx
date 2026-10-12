import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'
import { DOCK_LABEL, DOCK_URL, FOOTER_NOTE, SITE_NAME } from '../lib/site'
import { footerClass, footerLinkClass, footerRowClass, footerTextClass } from '../lib/styles'

describe('Footer — the strip that closes the column', () => {
  it('is a strip under a hairline at the foot of the content column', () => {
    render(<Footer />)

    const footer = screen.getByTestId('footer')

    expect(footer.tagName).toBe('FOOTER')
    expect(footer.className).toBe(footerClass)
    expect(footer.className).toContain('border-t')

    const row = footer.firstElementChild as HTMLElement

    expect(row.className).toBe(footerRowClass)
    expect(row.className).toContain('md:flex-row')
  })

  it('names the page and carries a year computed as it renders', () => {
    render(<Footer />)

    const lines = screen.getByTestId('footer').querySelectorAll('p')

    expect(lines[0]?.className).toBe(footerTextClass)
    expect(lines[0]?.textContent).toBe(`${SITE_NAME} — ${FOOTER_NOTE}`)
    expect(screen.getByTestId('footer')).toHaveTextContent(String(new Date().getFullYear()))
  })

  it('credits the dock, and no one else, from the one link that leaves the page', () => {
    render(<Footer />)

    const credit = screen.getByRole('link', { name: DOCK_LABEL })

    expect(credit).toHaveAttribute('href', DOCK_URL)
    expect(credit).toHaveAttribute('target', '_blank')
    expect(credit).toHaveAttribute('rel', 'noreferrer')
    expect(credit.className).toBe(footerLinkClass)

    expect(screen.getByTestId('footer').querySelectorAll('a')).toHaveLength(1)
    expect(screen.getByTestId('footer')).toHaveTextContent('More templates at')
  })
})

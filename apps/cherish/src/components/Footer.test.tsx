import { render, screen, within } from '@testing-library/react'
import { Footer } from './Footer'
import {
  BRAND,
  BRAND_SUBLINE,
  DOCK_LABEL,
  DOCK_URL,
  FOOTER_CREDIT_PREFIX,
  FOOTER_NOTE,
  FOOTER_SOCIALS,
  TOP_TARGET,
} from '../lib/site'
import { footerClass, footerLinkClass, footerSocialClass } from '../lib/styles'

describe('Footer — the foot of the page', () => {
  it('carries the monogram, the year and the one credit the collection runs on', () => {
    render(<Footer />)

    const footer = screen.getByTestId('footer')

    expect(footer.tagName).toBe('FOOTER')
    expect(footer.className).toBe(footerClass)
    expect(footer).toHaveTextContent(String(new Date().getFullYear()))
    expect(footer).toHaveTextContent(FOOTER_NOTE)
    expect(footer).toHaveTextContent(BRAND_SUBLINE)
    expect(footer).toHaveTextContent(FOOTER_CREDIT_PREFIX)

    const credit = screen.getByRole('link', { name: DOCK_LABEL })

    expect(credit).toHaveAttribute('href', DOCK_URL)
    expect(credit).toHaveAttribute('rel', 'noreferrer')
    expect(credit).toHaveAttribute('target', '_blank')
    expect(credit.className).toBe(footerLinkClass)

    const top = within(footer).getByRole('link', { name: new RegExp(BRAND_SUBLINE) })

    expect(top).toHaveAttribute('href', TOP_TARGET)
    expect(top).toHaveTextContent(BRAND)
  })

  it('holds the design’s four circle socials', () => {
    const { container } = render(<Footer />)

    const socials = screen.getAllByRole('link', { name: /Facebook|Twitter|Instagram|LinkedIn/ })

    expect(socials.map((social) => social.getAttribute('aria-label'))).toEqual(
      FOOTER_SOCIALS.map((social) => social.label),
    )
    expect(socials.map((social) => social.getAttribute('href'))).toEqual(
      FOOTER_SOCIALS.map((social) => social.href),
    )

    for (const social of socials) {
      expect(social.className).toBe(footerSocialClass)
      expect(social.className).toContain('rounded-full')
      expect(container.querySelectorAll('svg').length).toBeGreaterThanOrEqual(4)
    }
  })
})

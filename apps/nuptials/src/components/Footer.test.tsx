import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'
import { BRAND, COMPONENT_DOCK_LABEL, FOOTER_BLURB, FOOTER_LINKS, SOCIALS } from '../lib/site'

describe('Footer', () => {
  it('closes the page with the wordmark, its blurb and the social row', () => {
    render(<Footer />)

    const footer = screen.getByRole('contentinfo')

    expect(within(footer).getByText(BRAND)).toBeInTheDocument()
    expect(within(footer).getByText(FOOTER_BLURB)).toBeInTheDocument()

    const socials = within(footer).getAllByRole('link', { name: /^Nuptials on / })

    expect(socials.map((link) => link.getAttribute('aria-label'))).toEqual(
      SOCIALS.map((social) => social.label),
    )
    expect(socials.every((link) => link.getAttribute('href') === 'https://www.componentdock.com/')).toBe(
      true,
    )
    expect(socials[0]?.querySelector('svg')).toHaveAttribute('aria-hidden', 'true')
  })

  it('runs the four section labels the design repeats at the foot of the page', () => {
    render(<Footer />)

    const nav = screen.getByRole('navigation', { name: 'Footer' })

    expect(within(nav).getAllByRole('link').map((link) => link.textContent)).toEqual(
      FOOTER_LINKS.map((item) => item.label),
    )
    expect(within(nav).getByRole('link', { name: 'Gallery' })).toHaveAttribute('href', '#gallery')
  })

  it('writes the current year into the copyright line and credits Component Dock', () => {
    render(<Footer />)

    const line = screen.getByTestId('copyright')

    expect(line).toHaveTextContent(
      `Copyright © ${new Date().getFullYear()} All rights reserved | This template is made with by ${COMPONENT_DOCK_LABEL}`,
    )
    expect(within(line).getByRole('link', { name: COMPONENT_DOCK_LABEL })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
    // The design draws its heart as a glyph; the recreation keeps it decorative.
    expect(line.querySelector('svg')).toHaveAttribute('aria-hidden', 'true')
  })
})

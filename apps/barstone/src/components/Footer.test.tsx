import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'
import { attribution, footer, siteBlurb, siteName } from '../data'

describe('Footer', () => {
  it('sits on navy with the wordmark, the blurb and four social glyphs', () => {
    render(<Footer />)
    const brand = screen.getByRole('link', { name: siteName })
    const block = brand.closest('footer') as HTMLElement

    expect(block).toHaveClass('bg-navy')
    expect(screen.getByText(siteBlurb)).toBeInTheDocument()

    for (const social of footer.socials) {
      expect(screen.getByRole('link', { name: social.label })).toHaveAttribute('href', social.href)
    }
  })

  it('lists the six services and the contact details with their glyphs', () => {
    render(<Footer />)

    expect(screen.getByRole('heading', { level: 3, name: footer.heading })).toHaveClass('text-white')

    for (const link of footer.serviceLinks) {
      expect(screen.getAllByRole('link', { name: link.label })[0]).toHaveAttribute('href', link.href)
    }

    expect(screen.getByText(footer.contact.address)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: footer.contact.phone })).toHaveAttribute(
      'href',
      `tel:${footer.contact.phone.replace(/[^+\d]/g, '')}`,
    )
    expect(screen.getByRole('link', { name: footer.contact.email })).toHaveAttribute(
      'href',
      `mailto:${footer.contact.email}`,
    )
    expect(screen.getByText(footer.contact.website)).toBeInTheDocument()
  })

  it('tiles six Instagram images under their own heading', () => {
    render(<Footer />)

    expect(screen.getByRole('heading', { level: 3, name: footer.instagram.heading })).toBeInTheDocument()
    for (const tile of footer.instagram.tiles) {
      expect(screen.getByRole('link', { name: tile.alt })).toBeInTheDocument()
    }
  })

  it('opens the copyright row with a rule and carries the current year', () => {
    const { container } = render(<Footer />)
    const rule = container.querySelector('.border-navy-rule') as HTMLElement

    expect(rule.className).toContain('border-t')
    expect(rule.textContent).toContain(`© ${new Date().getFullYear()} ${siteName}`)
    expect(rule.className).toContain('xl:mt-[95px]')
  })

  it('attributes the template to Component Dock instead of any source credit', () => {
    render(<Footer />)
    const credit = screen.getByRole('link', { name: attribution.label })

    expect(credit).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(screen.getByText(/More templates at/)).toBeInTheDocument()
  })

  it('renders the four-item bottom menu', () => {
    render(<Footer />)

    for (const link of footer.menu) {
      expect(screen.getAllByRole('link', { name: link.label }).at(-1)).toHaveAttribute(
        'href',
        link.href,
      )
    }
  })
})

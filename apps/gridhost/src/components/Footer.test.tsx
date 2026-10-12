import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'
import { CONTACT, FOOTER_LINKS, FOOTER_PACKAGES, SOCIAL_LINKS } from '../lib/site'

describe('Footer', () => {
  it('keeps the phone number in the third column’s heading slot', () => {
    render(<Footer />)

    for (const heading of ['All packages', 'Quick link']) {
      expect(screen.getByRole('heading', { level: 4, name: heading })).toHaveClass(
        'font-body',
        'text-[20px]',
        'text-white',
      )
    }

    for (const name of FOOTER_PACKAGES) {
      expect(screen.getByRole('link', { name })).toHaveClass('text-footer-text')
    }
    for (const link of FOOTER_LINKS) {
      expect(screen.getByRole('link', { name: link.label })).toHaveAttribute('href', link.href)
    }

    const phone = screen.getByRole('link', { name: CONTACT.phone })
    expect(phone).toHaveAttribute('href', CONTACT.telHref)
    expect(phone.closest('h4')).toHaveClass('font-body', 'text-white')
    expect(screen.getByRole('link', { name: CONTACT.email })).toHaveAttribute(
      'href',
      `mailto:${CONTACT.email}`,
    )
    expect(screen.getByText(CONTACT.address)).toHaveClass('text-footer-text')
  })

  it('draws four round social controls with brand glyphs', () => {
    render(<Footer />)

    for (const social of SOCIAL_LINKS) {
      const control = screen.getByRole('link', { name: `Gridhost on ${social.label}` })
      expect(control).toHaveAttribute('href', social.href)
      expect(control).toHaveClass('h-[40px]', 'w-[40px]', 'rounded-full', 'border-ring')
    }
  })

  it('rules off a bottom bar with the running year and one Component Dock link', () => {
    render(<Footer />)

    const year = new Date().getFullYear()
    const credit = screen.getByText(/every plan on the grid/, { selector: 'p' })
    expect(credit).toHaveTextContent(`© ${year} Gridhost`)
    expect(credit).toHaveClass('text-footer-text')
    expect(credit.parentElement).toHaveClass('border-t', 'border-rule-footer')

    const dock = screen.getAllByRole('link', { name: 'Component Dock' })
    expect(dock).toHaveLength(1)
    expect(dock[0]).toHaveAttribute('href', 'https://www.componentdock.com/')
  })
})

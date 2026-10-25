import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Footer } from '../components/Footer'
import { MobileBar } from '../components/MobileBar'
import { footer, mobileBar, site } from '../content'

describe('Footer', () => {
  it('carries the brand block, three link columns and the newsletter field', () => {
    render(<Footer />)

    expect(screen.getByText(footer.blurb)).toHaveClass('text-gray-400')
    expect(screen.getByText(site.address)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: site.phone })).toHaveAttribute('href', site.phoneHref)
    expect(screen.getByRole('link', { name: site.email })).toHaveAttribute(
      'href',
      `mailto:${site.email}`,
    )

    footer.columns.forEach((column) => {
      expect(screen.getByRole('heading', { level: 2, name: column.title })).toHaveClass(
        'uppercase',
        'text-white',
      )
      column.links.forEach((link) => {
        expect(screen.getByRole('link', { name: link.label })).toHaveAttribute(
          'href',
          link.target,
        )
      })
    })

    expect(screen.getByLabelText(footer.newsletter.label)).toHaveAttribute(
      'placeholder',
      footer.newsletter.placeholder,
    )
    expect(screen.getByRole('button', { name: footer.newsletter.cta })).toBeInTheDocument()
  })

  it('links Component Dock instead of any attribution', () => {
    render(<Footer />)

    const more = screen.getByRole('link', { name: footer.more })
    expect(more).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(more).toHaveAttribute('target', '_blank')

    footer.legal.forEach((link) => {
      expect(screen.getByRole('link', { name: link.label })).toBeInTheDocument()
    })

    expect(screen.getByText(site.copyright)).toBeInTheDocument()
  })

  it('renders three labelled social tiles as inline SVG, not brand icons', () => {
    const { container } = render(<Footer />)

    footer.socials.forEach((social) => {
      expect(screen.getByLabelText(social.label)).toBeInTheDocument()
    })

    const tiles = container.querySelectorAll('footer a[aria-label]')
    expect(tiles).toHaveLength(3)
    tiles.forEach((tile) => {
      expect(tile.querySelector('svg')).not.toBeNull()
      expect(tile.querySelector('svg path')).not.toBeNull()
    })
  })

  it('rejects an address with no @ without navigating and announces it', () => {
    render(<Footer />)

    const field = screen.getByLabelText(footer.newsletter.label)
    fireEvent.change(field, { target: { value: 'not-an-address' } })
    fireEvent.submit(field.closest('form') as HTMLFormElement)

    expect(screen.getByRole('status')).toHaveTextContent(footer.newsletter.invalid)
    expect(screen.getByRole('status')).toHaveClass('text-primary-300')
    expect(field).toHaveAttribute('aria-invalid', 'true')
    expect(field).toHaveValue('not-an-address')
  })

  it('accepts a valid address, clears the field and confirms', () => {
    render(<Footer />)

    const field = screen.getByLabelText(footer.newsletter.label)
    fireEvent.change(field, { target: { value: 'gardener@example.com' } })
    fireEvent.submit(field.closest('form') as HTMLFormElement)

    expect(screen.getByRole('status')).toHaveTextContent(footer.newsletter.valid)
    expect(screen.getByRole('status')).toHaveClass('text-gray-400')
    expect(field).toHaveValue('')
  })
})

describe('MobileBar', () => {
  it('offers a call chip and a site-visit CTA below 1024 px', () => {
    render(<MobileBar />)

    expect(screen.getByRole('link', { name: mobileBar.call })).toHaveAttribute(
      'href',
      site.phoneHref,
    )
    expect(screen.getByRole('link', { name: mobileBar.book })).toHaveAttribute('href', '#contact')

    const bar = screen.getByRole('link', { name: mobileBar.book }).closest('div.fixed')
    expect(bar).toHaveClass('lg:hidden', 'z-40')
    expect(screen.queryByText(/Book a Tour/)).toBeNull()
  })
})

import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'
import { FOOTER } from '../data'

const hrefFor = (phone: string) => 'tel:' + phone.replace(/[^\d+]/g, '')

describe('Footer', () => {
  it('renders the three link widgets with their links', () => {
    render(<Footer />)
    for (const widget of FOOTER.widgets) {
      const heading = screen.getByRole('heading', { name: widget.title })
      const column = heading.closest<HTMLElement>('.widget')!
      for (const link of widget.links) {
        expect(within(column).getByRole('link', { name: link })).toBeInTheDocument()
      }
    }
  })

  it('renders the contact address, phones, and email', () => {
    render(<Footer />)
    expect(screen.getByText(FOOTER.contact.address)).toBeInTheDocument()
    for (const phone of FOOTER.contact.phones) {
      expect(screen.getByRole('link', { name: phone })).toHaveAttribute('href', hrefFor(phone))
    }
    expect(screen.getByRole('link', { name: FOOTER.contact.email })).toHaveAttribute(
      'href',
      `mailto:${FOOTER.contact.email}`,
    )
  })

  it('renders the Connect socials as teal circles with brand icons', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: FOOTER.connectTitle })).toBeInTheDocument()
    for (const label of ['Instagram', 'X', 'Facebook', 'LinkedIn', 'Pinterest', 'Dribbble']) {
      const link = screen.getByRole('link', { name: label })
      expect(link.className).toContain('rounded-full')
      expect(link.className).toContain('bg-brand')
      expect(link.querySelector('svg')).not.toBeNull()
    }
  })

  it('shows the copyright and links to Component Dock', () => {
    render(<Footer />)
    expect(screen.getByText(FOOTER.copyright)).toBeInTheDocument()
    const dock = screen.getByRole('link', { name: FOOTER.dockLink.label })
    expect(dock).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(dock).toHaveAttribute('target', '_blank')
  })

  it('links only to the Component Dock external destination', () => {
    render(<Footer />)
    const external = screen
      .getAllByRole('link')
      .filter((link) => link.getAttribute('target') === '_blank')
    expect(external).toHaveLength(1)
    expect(external[0]).toHaveAttribute('href', 'https://www.componentdock.com/')
  })
})

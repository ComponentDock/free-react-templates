import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'
import {
  ADDRESS,
  CONTACT_EMAIL,
  CONTACT_PHONES,
  FOOTER_LINKS,
  SOCIALS,
  SOURCE_LINKS,
} from '../data'

function phoneHref(display: string) {
  return 'tel:' + display.replace(/[^+\d]/g, '')
}

describe('Footer', () => {
  it('renders the Contact widget with address and contact links', () => {
    render(<Footer />)
    const footer = screen.getByRole('contentinfo')
    expect(within(footer).getByRole('heading', { name: 'Contact' })).toBeInTheDocument()
    expect(screen.getByText(ADDRESS)).toBeInTheDocument()
    CONTACT_PHONES.forEach((phone) => {
      expect(screen.getAllByRole('link', { name: phone })).toHaveLength(2)
      screen.getAllByRole('link', { name: phone }).forEach((link) => {
        expect(link).toHaveAttribute('href', phoneHref(phone))
      })
    })
    expect(screen.getByRole('link', { name: CONTACT_EMAIL })).toHaveAttribute(
      'href',
      `mailto:${CONTACT_EMAIL}`,
    )
  })

  it('renders the Sources widget with twelve links', () => {
    render(<Footer />)
    const sources = screen.getByRole('heading', { name: 'Sources' }).closest('div')!
    SOURCE_LINKS.forEach((label) => {
      expect(within(sources).getAllByRole('link', { name: label }).length).toBeGreaterThan(0)
    })
  })

  it('renders the Links widget with navigation and social links', () => {
    render(<Footer />)
    const linksWidget = screen.getByRole('heading', { name: 'Links' }).closest('div')!
    FOOTER_LINKS.forEach((label) => {
      expect(within(linksWidget).getByRole('link', { name: label })).toBeInTheDocument()
    })
    SOCIALS.forEach((key) => {
      expect(within(linksWidget).getByRole('link', { name: key })).toBeInTheDocument()
    })
  })

  it('shows the current year and links to Component Dock', () => {
    render(<Footer />)
    const year = new Date().getFullYear()
    expect(screen.getByText(new RegExp(`Copyright © ${year}`))).toBeInTheDocument()
    const dock = screen.getByRole('link', { name: 'Component Dock' })
    expect(dock).toHaveAttribute('href', 'https://www.componentdock.com/')
  })
})

import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'
import { BRAND, FOOTER, SOCIALS } from '../data'

describe('Footer', () => {
  it('renders the brand, about text, and social icon links', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: new RegExp(BRAND) })).toBeInTheDocument()
    expect(screen.getByText(FOOTER.about)).toBeInTheDocument()
    for (const social of SOCIALS) {
      expect(screen.getByRole('link', { name: social })).toBeInTheDocument()
    }
  })

  it('renders the Services and Recent Posts link columns', () => {
    render(<Footer />)
    const services = screen.getByRole('heading', { name: 'Services' }).closest('div')!
    for (const item of FOOTER.services) {
      expect(within(services).getByRole('link', { name: item })).toBeInTheDocument()
    }
    const posts = screen.getByRole('heading', { name: 'Recent Posts' }).closest('div')!
    for (const item of FOOTER.recentPosts) {
      expect(within(posts).getByRole('link', { name: item })).toBeInTheDocument()
    }
  })

  it('renders the contact block with address, phone, and email', () => {
    render(<Footer />)
    expect(screen.getByText(FOOTER.contact.address)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: FOOTER.contact.phone })).toHaveAttribute(
      'href',
      `tel:${FOOTER.contact.phone.replace(/\s/g, '')}`,
    )
    expect(screen.getByRole('link', { name: FOOTER.contact.email })).toHaveAttribute(
      'href',
      `mailto:${FOOTER.contact.email}`,
    )
  })

  it('credits Component Dock in the dark bottom bar', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: 'Component Dock' })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })
})

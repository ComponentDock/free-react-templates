import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'
import { brand, footer } from '../data'

describe('Footer', () => {
  it('renders the brand column with wordmark, tagline, blurb and socials', () => {
    render(<Footer />)

    expect(screen.getByText(brand.name)).toBeInTheDocument()
    expect(screen.getByText(brand.tagline)).toBeInTheDocument()
    expect(screen.getByText(footer.blurb)).toBeInTheDocument()
    for (const social of footer.socials) {
      expect(screen.getByRole('link', { name: social })).toBeInTheDocument()
    }
  })

  it('renders the Explore and Quick Links columns', () => {
    render(<Footer />)

    expect(screen.getByRole('heading', { level: 4, name: footer.exploreTitle })).toBeInTheDocument()
    for (const link of footer.exploreLinks) {
      expect(screen.getByRole('link', { name: link })).toBeInTheDocument()
    }
    expect(screen.getByRole('heading', { level: 4, name: footer.quickTitle })).toBeInTheDocument()
    for (const link of footer.quickLinks) {
      expect(screen.getByRole('link', { name: link })).toBeInTheDocument()
    }
  })

  it('renders recent posts and the questions column with contact details', () => {
    render(<Footer />)

    expect(screen.getByRole('heading', { level: 4, name: footer.postsTitle })).toBeInTheDocument()
    expect(screen.getAllByText(footer.postTitle)).toHaveLength(3)
    expect(screen.getAllByText(footer.postMeta)).toHaveLength(3)

    expect(
      screen.getByRole('heading', { level: 4, name: footer.questionsTitle }),
    ).toBeInTheDocument()
    expect(screen.getByText(footer.address)).toBeInTheDocument()
    const phone = screen.getByRole('link', { name: footer.phoneDisplay })
    expect(phone.getAttribute('href')).toMatch(/^tel:/)
    const email = screen.getByRole('link', { name: footer.email })
    expect(email).toHaveAttribute('href', `mailto:${footer.email}`)
  })

  it('renders the dark bottom bar with the Component Dock credit', () => {
    render(<Footer />)

    const dock = screen.getByRole('link', { name: footer.componentDockLabel })
    expect(dock).toHaveAttribute('href', footer.componentDockHref)
    const bar = dock.closest('div')!
    expect(within(bar).getByText(/All rights reserved/)).toBeInTheDocument()
    expect(within(bar).getByText(/© \d{4} Learnly/)).toBeInTheDocument()
  })
})

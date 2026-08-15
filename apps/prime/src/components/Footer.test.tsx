import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'
import { contactInfo, quickLinks, recentPosts } from '../data'

describe('Footer', () => {
  it('renders the brand, quick links, recent posts, and contact info', () => {
    render(<Footer />)
    expect(screen.getByText('Prime')).toBeInTheDocument()
    for (const link of quickLinks) {
      expect(screen.getByRole('link', { name: link })).toBeInTheDocument()
    }
    for (const post of recentPosts) {
      expect(screen.getByText(post.title)).toBeInTheDocument()
    }
    expect(screen.getAllByText('Sept 15, 2018 · Admin · 19')).toHaveLength(2)
    expect(screen.getByText(contactInfo.address)).toBeInTheDocument()
    expect(screen.getByText(contactInfo.phone)).toBeInTheDocument()
    expect(screen.getByText(contactInfo.email)).toBeInTheDocument()
  })

  it('links the phone number and email', () => {
    render(<Footer />)
    const phoneHref = 'tel:' + contactInfo.phone.replace(/[^\d+]/g, '')
    expect(screen.getByRole('link', { name: contactInfo.phone })).toHaveAttribute('href', phoneHref)
    expect(screen.getByRole('link', { name: contactInfo.email })).toHaveAttribute(
      'href',
      'mailto:info@yourdomain.com',
    )
  })

  it('credits Component Dock in the copyright bar', () => {
    render(<Footer />)
    const credit = screen.getByRole('link', { name: /Component Dock/ })
    expect(credit).toHaveAttribute('href', 'https://www.componentdock.com/')
  })
})

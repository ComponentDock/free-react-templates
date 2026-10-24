import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'
import { contact, recentPosts } from '../data'

describe('Footer', () => {
  it('renders the three columns', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: 'About Us' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Recent Blog' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Get Connected' })).toBeInTheDocument()
  })

  it('lists the recent posts with their meta', () => {
    render(<Footer />)
    for (const post of recentPosts) {
      expect(screen.getByRole('heading', { name: post.title })).toBeInTheDocument()
    }
    expect(screen.getAllByText(/July 29, 2026 · Admin · 19 comments/)).toHaveLength(3)
  })

  it('renders the contact details as actions', () => {
    render(<Footer />)
    expect(screen.getByText(contact.address)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: contact.phone })).toHaveAttribute(
      'href',
      'tel:+23923929210',
    )
    expect(screen.getByRole('link', { name: contact.email })).toHaveAttribute(
      'href',
      'mailto:hello@alms.org',
    )
  })

  it('credits Component Dock', () => {
    render(<Footer />)
    const credit = screen.getByRole('link', { name: 'Component Dock' })
    expect(credit).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(screen.getByText(/All rights reserved/)).toBeInTheDocument()
  })
})

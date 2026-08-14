import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'
import { FOOTER_ABOUT, FOOTER_ADDRESS, FOOTER_CELL, FOOTER_PHONE, FOOTER_POPULAR } from '../data'

describe('Footer', () => {
  it('renders the logo, about text, address and phone numbers', () => {
    render(<Footer />)
    expect(screen.getByText('Pressroom')).toBeInTheDocument()
    expect(screen.getByText(FOOTER_ABOUT)).toBeInTheDocument()
    expect(screen.getByText(FOOTER_ADDRESS)).toBeInTheDocument()
    expect(screen.getByText(FOOTER_PHONE)).toBeInTheDocument()
    expect(screen.getByText(FOOTER_CELL)).toBeInTheDocument()
  })

  it('renders the Popular post widget with posts', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: 'Popular post' })).toBeInTheDocument()
    for (const post of FOOTER_POPULAR) {
      expect(screen.getByText(post.title)).toBeInTheDocument()
      expect(screen.getAllByText(post.byline).length).toBeGreaterThan(0)
    }
  })

  it('renders an advertisement image in the third column', () => {
    render(<Footer />)
    expect(screen.getByRole('img', { name: 'Advertisement' })).toBeInTheDocument()
  })

  it('links to Component Dock in the copyright bar', () => {
    render(<Footer />)
    const dockLinks = screen.getAllByRole('link', { name: 'Component Dock' })
    expect(dockLinks.length).toBeGreaterThan(0)
    for (const link of dockLinks) {
      expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    }
  })

  it('renders the copyright line with the current year', () => {
    render(<Footer />)
    expect(
      screen.getByText(new RegExp(`Copyright © ${new Date().getFullYear()}`)),
    ).toBeInTheDocument()
  })
})

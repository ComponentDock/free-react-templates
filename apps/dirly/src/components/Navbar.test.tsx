import { render, screen } from '@testing-library/react'
import { Navbar } from './Navbar'
import { describe, it, expect } from 'vitest'

describe('Navbar', () => {
  it('renders logo and brand name', () => {
    render(<Navbar />)
    expect(screen.getByText('Dirly')).toBeInTheDocument()
  })

  it('renders all navigation links', () => {
    render(<Navbar />)
    const links = ['Home', 'Listings', 'Pages', 'About', 'Blog', 'Contact']
    links.forEach((link) => {
      expect(screen.getByText(link)).toBeInTheDocument()
    })
  })

  it('renders Sign In button', () => {
    render(<Navbar />)
    expect(screen.getByText('Sign In')).toBeInTheDocument()
  })

  it('renders nav links with correct hrefs', () => {
    render(<Navbar />)
    expect(screen.getByText('Home')).toHaveAttribute('href', '#home')
    expect(screen.getByText('Listings')).toHaveAttribute('href', '#listings')
    expect(screen.getByText('Pages')).toHaveAttribute('href', '#pages')
    expect(screen.getByText('About')).toHaveAttribute('href', '#about')
    expect(screen.getByText('Blog')).toHaveAttribute('href', '#blog')
    expect(screen.getByText('Contact')).toHaveAttribute('href', '#contact')
  })

  it('renders dropdown arrows for Listings, Pages, Blog', () => {
    render(<Navbar />)
    const nav = screen.getByLabelText('Main navigation')
    const linksWithDropdowns = nav.querySelectorAll('svg')
    expect(linksWithDropdowns.length).toBe(3)
  })

  it('has accessibility label on nav', () => {
    render(<Navbar />)
    expect(screen.getByLabelText('Main navigation')).toBeInTheDocument()
  })
})

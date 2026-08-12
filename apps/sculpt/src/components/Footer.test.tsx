import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'
import { BRAND, COMPONENT_DOCK_URL, CONTACT_INFO, QUICK_LINKS, RECENT_POSTS } from '../data'

describe('Footer', () => {
  it('renders all four footer columns', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { level: 4, name: `About ${BRAND}` })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 4, name: 'Quick Links' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 4, name: 'Recent Post' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 4, name: 'Contact Info' })).toBeInTheDocument()
    for (const link of QUICK_LINKS) {
      expect(screen.getByRole('link', { name: new RegExp(`^${link}$`) })).toBeInTheDocument()
    }
    expect(screen.getAllByText('Tips for sexy body')).toHaveLength(RECENT_POSTS.length)
    expect(screen.getByText(CONTACT_INFO.address)).toBeInTheDocument()
    expect(screen.getByText(CONTACT_INFO.phone)).toBeInTheDocument()
    expect(screen.getByText(CONTACT_INFO.email)).toBeInTheDocument()
    expect(screen.getByText(CONTACT_INFO.website)).toBeInTheDocument()
  })

  it('renders social circle links and the copyright bar with a Component Dock link', () => {
    render(<Footer />)
    expect(screen.getAllByRole('link', { name: `${BRAND} on social media` })).toHaveLength(4)
    expect(screen.getByText(new RegExp('This template is made with ♥'))).toBeInTheDocument()
    const dock = screen.getByRole('link', { name: 'More templates at Component Dock' })
    expect(dock).toHaveAttribute('href', COMPONENT_DOCK_URL)
    expect(dock).toHaveAttribute('target', '_blank')
  })
})

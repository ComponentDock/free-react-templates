import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the site name, links, social icons, copyright, and Component Dock link', () => {
    render(<Footer />)

    expect(screen.getByText('Pressbox')).toBeInTheDocument()
    expect(screen.getByText('24H')).toBeInTheDocument()
    expect(screen.getByText(/your trusted source for the latest news/i)).toBeInTheDocument()

    const links = ['Home', 'News', 'Sport', 'Lifestyle', 'Fashion', 'Music', 'Business']
    for (const link of links) {
      expect(screen.getByText(link)).toHaveAttribute('href', '#')
    }

    expect(screen.getByRole('link', { name: 'Facebook' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Twitter' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Instagram' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'YouTube' })).toBeInTheDocument()

    expect(screen.getByText(/© 2025 Pressbox/)).toBeInTheDocument()

    const dockLink = screen.getByRole('link', { name: 'Component Dock' })
    expect(dockLink).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(dockLink).toHaveAttribute('target', '_blank')
  })
})

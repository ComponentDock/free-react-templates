import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the dark footer with About, Navigations, Follow Us, and Watch Live Streaming', () => {
    render(<Footer />)

    expect(screen.getByRole('contentinfo')).toHaveClass('bg-footer')
    expect(screen.getByRole('heading', { name: 'About Wavelength' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Navigations' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Follow Us' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Watch Live Streaming' })).toBeInTheDocument()

    // Two navigation link lists.
    for (const label of [
      'Home',
      'DJs',
      'News',
      'Top 20 of the week',
      'About Us',
      'Privacy Policy',
      'Contact Us',
      'Membership',
    ]) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }

    // Live streaming thumbnail with a circular play button.
    expect(screen.getByRole('img', { name: /live streaming thumbnail/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Watch live stream' })).toHaveClass(
      'h-[70px]',
      'w-[70px]',
      'rounded-full',
    )

    // Branded footer credit links to Component Dock.
    const credit = screen.getByRole('link', { name: 'Component Dock' })
    expect(credit).toHaveAttribute('href', 'https://www.componentdock.com/')
  })
})

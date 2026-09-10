import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the three columns', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: 'About Us' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Latest Tweets' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Customer Service' })).toBeInTheDocument()
  })

  it('renders the copyright bar with Component Dock link', () => {
    render(<Footer />)
    expect(screen.getByText(/All rights reserved/)).toBeInTheDocument()
    const dockLink = screen.getByRole('link', { name: 'Component Dock' })
    expect(dockLink).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(dockLink).toHaveAttribute('target', '_blank')
  })

  it('renders customer service links', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: 'Support Forums' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'FAQS' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Privacy Policy' })).toBeInTheDocument()
  })
})

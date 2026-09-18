import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'
import { describe, expect, it } from 'vitest'

describe('Footer', () => {
  it('renders brand name', () => {
    render(<Footer />)
    expect(screen.getByText('Sweeply')).toBeInTheDocument()
  })

  it('renders Recent Posts section', () => {
    render(<Footer />)
    expect(screen.getByText('Recent Posts')).toBeInTheDocument()
  })

  it('renders Explore links', () => {
    render(<Footer />)
    expect(screen.getByText('Explore')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /About/ })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Contact/ })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Services/ })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Blog/ })).toBeInTheDocument()
  })

  it('renders contact information', () => {
    render(<Footer />)
    expect(screen.getByText(/203 Fake St/)).toBeInTheDocument()
    expect(screen.getByText('+2 392 3929 210')).toBeInTheDocument()
    expect(screen.getByText('info@yourdomain.com')).toBeInTheDocument()
  })

  it('links to Component Dock', () => {
    render(<Footer />)
    const dockLink = screen.getByRole('link', { name: 'Component Dock' })
    expect(dockLink).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(dockLink).toHaveAttribute('target', '_blank')
  })
})

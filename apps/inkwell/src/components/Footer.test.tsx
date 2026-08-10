import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the brand column with blurb and social chips', () => {
    const { container } = render(<Footer />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(container.querySelector('p.font-sans')?.textContent).toBe('Inkwell.')
    expect(screen.getByText(/small river named Duden/)).toBeInTheDocument()
    for (const label of ['Twitter', 'Facebook', 'Instagram']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
  })

  it('renders the Explore links, recent posts and contact block', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: 'Explore' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /About/ })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Contact us/ })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Recent Posts' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Creativity and Inspiration' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Have a Questions?' })).toBeInTheDocument()
    expect(screen.getByText(/203 Fake St/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: '+2 392 3929 210' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'info@yourdomain.com' })).toBeInTheDocument()
  })

  it('renders the dark copyright bar with a credit', () => {
    render(<Footer />)
    expect(screen.getByText(/made with ♥ by Inkwell/)).toBeInTheDocument()
  })
})

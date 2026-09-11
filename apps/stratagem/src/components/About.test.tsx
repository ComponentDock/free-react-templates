import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the heading', () => {
    render(<About />)
    expect(screen.getByRole('heading', { name: /Why our Consulting\?/i })).toBeInTheDocument()
  })

  it('renders the description text', () => {
    render(<About />)
    expect(screen.getByText(/years of experience in the industry/)).toBeInTheDocument()
  })

  it('renders the About Us button', () => {
    render(<About />)
    const link = screen.getByRole('link', { name: 'About Us' })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '#contact')
  })

  it('renders the illustration image', () => {
    render(<About />)
    const img = screen.getByRole('img', { name: /Consulting team collaboration/i })
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
  })
})

import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the heading, copy, and read-more link', () => {
    render(<About />)
    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading.textContent).toMatch(/Chisel/)
    expect(screen.getAllByText(/Far far away/).length).toBeGreaterThan(0)
    expect(screen.getByRole('link', { name: 'About us' })).toBeInTheDocument()
  })

  it('renders an about image', () => {
    render(<About />)
    const image = screen.getByRole('img', { name: /about us/i })
    expect(image).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
  })
})

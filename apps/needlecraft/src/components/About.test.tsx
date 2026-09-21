import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders Why Choose Us heading', () => {
    render(<About />)
    expect(screen.getByRole('heading', { name: /why choose us/i })).toBeInTheDocument()
  })

  it('renders description text', () => {
    render(<About />)
    expect(screen.getByText(/holistic approach/i)).toBeInTheDocument()
  })

  it('renders Contact us now button', () => {
    render(<About />)
    expect(screen.getByRole('button', { name: /contact us now/i })).toBeInTheDocument()
  })

  it('renders about image', () => {
    render(<About />)
    const img = screen.getByAltText(/needlecraft wellness/i)
    expect(img).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
  })
})

import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders heading and description', () => {
    render(<About />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      /Welcome to the Pest Control/i,
    )
    expect(screen.getByText(/professional pest control solutions/i)).toBeInTheDocument()
  })

  it('renders info sub-items', () => {
    render(<About />)
    expect(screen.getByText('How Does It Work?')).toBeInTheDocument()
    expect(screen.getByText('Services We Offer')).toBeInTheDocument()
  })

  it('renders About Us CTA button', () => {
    render(<About />)
    expect(screen.getByRole('link', { name: /About Us/ })).toBeInTheDocument()
  })

  it('renders images', () => {
    render(<About />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(3)
    images.forEach((img) => {
      expect(img).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
    })
  })
})

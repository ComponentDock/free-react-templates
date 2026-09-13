import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the heading', () => {
    render(<Hero />)
    expect(
      screen.getByRole('heading', { level: 1, name: /advanced software made simple/i }),
    ).toBeInTheDocument()
  })

  it('renders the description', () => {
    render(<Hero />)
    expect(screen.getByText(/streamline your workflow/i)).toBeInTheDocument()
  })

  it('renders the CTA button', () => {
    render(<Hero />)
    expect(screen.getByText('Get Started')).toBeInTheDocument()
  })

  it('renders the illustration image', () => {
    render(<Hero />)
    const img = screen.getByAltText('Software dashboard illustration')
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
  })
})

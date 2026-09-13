import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the heading', () => {
    render(<About />)
    expect(
      screen.getByRole('heading', {
        level: 2,
        name: /leading the digital entertainment revolution/i,
      }),
    ).toBeInTheDocument()
  })

  it('renders the description', () => {
    render(<About />)
    expect(screen.getByText(/we build tools that transform/i)).toBeInTheDocument()
  })

  it('renders the CTA button', () => {
    render(<About />)
    expect(screen.getByText('Know More')).toBeInTheDocument()
  })

  it('renders the illustration image', () => {
    render(<About />)
    const img = screen.getByAltText('Digital entertainment platform')
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
  })
})

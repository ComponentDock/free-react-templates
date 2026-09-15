import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { About } from './About'

describe('About', () => {
  it('renders heading and description', () => {
    render(<About />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'We Are In A Mission To Help The Helpless',
    )
    expect(screen.getByText(/dedicated to providing support/)).toBeInTheDocument()
  })

  it('renders an image', () => {
    render(<About />)
    expect(screen.getByAltText('About our mission')).toBeInTheDocument()
  })

  it('renders a CTA button', () => {
    render(<About />)
    expect(screen.getByText('Discover More')).toBeInTheDocument()
  })
})

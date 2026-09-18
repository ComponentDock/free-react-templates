import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { AboutCTA } from './AboutCTA'

describe('AboutCTA', () => {
  it('renders the heading', () => {
    render(<AboutCTA />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'Senior & Elder Home Care Center',
    )
  })

  it('renders the description', () => {
    render(<AboutCTA />)
    expect(screen.getByText(/dedicated team provides personalized care/)).toBeInTheDocument()
  })

  it('renders the blockquote', () => {
    render(<AboutCTA />)
    expect(screen.getByText(/We care for elderly people/)).toBeInTheDocument()
  })

  it('renders the CTA button', () => {
    render(<AboutCTA />)
    expect(screen.getByRole('link', { name: /learn more/i })).toBeInTheDocument()
  })

  it('has brand background', () => {
    const { container } = render(<AboutCTA />)
    expect(container.firstElementChild).toHaveClass('bg-brand')
  })
})

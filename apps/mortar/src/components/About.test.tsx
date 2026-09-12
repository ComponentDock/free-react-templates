import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the heading, description, and about image', () => {
    render(<About />)

    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument()
    expect(screen.getByText(/Creative Agency/)).toBeInTheDocument()

    const image = screen.getByRole('img', { name: /team collaborating/i })
    expect(image).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
  })

  it('renders all 5 checklist highlights', () => {
    render(<About />)

    const items = [
      'Professional and experienced team',
      'Creative and innovative solutions',
      'Dedicated project management',
      '24/7 customer support',
      'Results-driven approach',
    ]
    for (const item of items) {
      expect(screen.getByText(item)).toBeInTheDocument()
    }
  })
})

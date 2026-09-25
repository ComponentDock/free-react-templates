import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the main heading', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Kaleido UI Kit')
  })

  it('renders the subtitle', () => {
    render(<Hero />)
    expect(screen.getByText(/elegant collection of colors/i)).toBeInTheDocument()
  })

  it('has decorative SVG elements', () => {
    const { container } = render(<Hero />)
    const svgs = container.querySelectorAll('svg')
    expect(svgs.length).toBe(2)
  })
})

import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the main heading', () => {
    render(<Hero />)

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toMatch(/We can make it together/)
  })

  it('renders the subtitle', () => {
    render(<Hero />)

    expect(screen.getByText(/Lorem ipsum dolor sit amet consectetur/)).toBeInTheDocument()
  })

  it('has a background image', () => {
    const { container } = render(<Hero />)

    const img = container.querySelector('img')
    expect(img).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
  })
})

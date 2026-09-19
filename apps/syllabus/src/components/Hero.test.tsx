import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the hero heading with accent-colored Education', () => {
    render(<Hero />)

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toContain('Get your')
    expect(heading.textContent).toContain('Education')
    expect(heading.textContent).toContain('today!')

    const accent = screen.getByText('Education')
    expect(accent).toHaveClass('text-brand')
  })

  it('has a background image', () => {
    render(<Hero />)
    const section = screen.getByRole('region', { name: /hero/i })
    expect(section).toHaveStyle({ backgroundImage: expect.stringContaining('picsum.photos') })
  })
})

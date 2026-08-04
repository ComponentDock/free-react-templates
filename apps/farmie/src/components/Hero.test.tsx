import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('shows the headline, supporting copy, CTAs, and an image', () => {
    const { container } = render(<Hero />)

    expect(screen.getByRole('heading', { level: 2 }).textContent).toContain(
      'The hearth of the farm',
    )
    expect(screen.getByText(/Fresh organic produce grown with care/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Shop Now' })).toHaveAttribute('href', '#products')
    expect(screen.getByRole('link', { name: 'Learn More' })).toHaveAttribute('href', '#about')

    const image = container.querySelector('img')
    expect(image).not.toBeNull()
    expect(image).toHaveAttribute('alt', '')
    expect(image?.getAttribute('src')).toMatch(/picsum\.photos\/seed\/farmie-hero/)
  })
})

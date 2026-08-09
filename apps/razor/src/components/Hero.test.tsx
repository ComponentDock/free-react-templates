import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('shows a subheading and a level-1 headline', () => {
    render(<Hero />)
    expect(screen.getByText('Welcome to Razor')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 1, name: /We Will Make Your Style/ }),
    ).toBeInTheDocument()
  })

  it('shows a "Learn More About Us" button linking to the services section', () => {
    render(<Hero />)
    const cta = screen.getByRole('link', { name: 'Learn More About Us' })
    expect(cta).toHaveAttribute('href', '#services')
  })
})

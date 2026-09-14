import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the hero heading and CTA', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { name: /Car Wash & Detailing/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Our Services/i })).toHaveAttribute('href', '#services')
  })

  it('shows the background image', () => {
    render(<Hero />)
    const img = screen.getByRole('img', { name: /car wash/i })
    expect(img).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
  })

  it('has a descriptive paragraph', () => {
    render(<Hero />)
    expect(screen.getByText(/premium car wash/i)).toBeInTheDocument()
  })
})

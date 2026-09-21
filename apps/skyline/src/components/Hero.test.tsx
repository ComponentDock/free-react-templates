import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'
import { describe, it, expect } from 'vitest'

describe('Hero', () => {
  it('renders the main heading', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Skyline')
  })

  it('renders the subtitle', () => {
    render(<Hero />)
    expect(screen.getByText('Fine Dining Restaurant')).toBeInTheDocument()
  })

  it('renders a scroll-down link to menu', () => {
    render(<Hero />)
    const link = screen.getByRole('link', { name: /Scroll to menu/i })
    expect(link).toHaveAttribute('href', '#menu')
  })

  it('has a decorative background image', () => {
    const { container } = render(<Hero />)
    const bg = container.querySelector('img[aria-hidden="true"]')
    expect(bg).not.toBeNull()
    expect(bg).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
  })
})

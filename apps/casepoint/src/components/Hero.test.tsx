import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders hero heading', () => {
    render(<Hero />)
    expect(
      screen.getByRole('heading', { level: 1, name: /don.*feel helpless/i }),
    ).toBeInTheDocument()
  })

  it('renders Committed to success subtitle', () => {
    render(<Hero />)
    expect(screen.getByText('Committed to success')).toBeInTheDocument()
  })

  it('renders Learn About Us button', () => {
    render(<Hero />)
    const link = screen.getByRole('link', { name: /learn about us/i })
    expect(link).toHaveAttribute('href', '#about')
  })

  it('renders background image', () => {
    const { container } = render(<Hero />)
    const section = container.querySelector('section')!
    expect(section.style.backgroundImage).toContain('picsum.photos')
  })
})

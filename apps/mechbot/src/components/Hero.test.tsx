import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline, subtext and CTAs', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
    expect(screen.getByText(/Advanced robotic kits/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Explore Products/i })).toHaveAttribute(
      'href',
      '#products',
    )
    expect(screen.getByRole('link', { name: /Learn More/i })).toHaveAttribute('href', '#about')
  })

  it('renders the hero image with an accessible name', () => {
    render(<Hero />)
    expect(screen.getByRole('img', { name: 'Mechbot robotic platform' })).toHaveAttribute(
      'src',
      expect.stringContaining('picsum.photos'),
    )
  })

  it('displays the Next-Gen Robotics badge', () => {
    render(<Hero />)
    expect(screen.getByText('Next-Gen Robotics')).toBeInTheDocument()
  })
})

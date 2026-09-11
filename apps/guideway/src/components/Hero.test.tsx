import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the sub-headline', () => {
    render(<Hero />)
    expect(screen.getByText('Welcome to Guideway')).toBeInTheDocument()
  })

  it('renders the main heading', () => {
    render(<Hero />)
    expect(screen.getByText('We Are The Best Consulting Agency')).toBeInTheDocument()
  })

  it('renders the CTA button', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: /our services/i })).toHaveAttribute('href', '#services')
  })

  it('renders carousel indicator dots', () => {
    const { container } = render(<Hero />)
    const dots = container.querySelectorAll('.flex.gap-2 > span')
    expect(dots.length).toBe(3)
  })
})

import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders a level-1 headline with supporting copy', () => {
    render(<Hero />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toMatch(/Best Highlights of the Latest/)
    expect(screen.getByText(/Join the arena's best fighters/i)).toBeInTheDocument()
  })

  it('shows the two call-to-action buttons', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: 'Install Now' })).toHaveAttribute('href', '#pricing')
    expect(screen.getByRole('link', { name: 'Watch Tutorial' })).toHaveAttribute('href', '#streams')
  })

  it('shows a graphic on the opposite side', () => {
    render(<Hero />)
    const graphic = screen.getByRole('img', { name: /gaming arena hero/i })
    expect(graphic).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
  })
})

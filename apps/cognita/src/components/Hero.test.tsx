import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders hero heading and CTA', () => {
    render(<Hero />)

    expect(
      screen.getByRole('heading', { name: /best online learning system/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Start Learning' })).toBeInTheDocument()
  })

  it('renders subtitle text', () => {
    render(<Hero />)

    expect(screen.getByText(/start your journey/i)).toBeInTheDocument()
  })

  it('links Start Learning to courses section', () => {
    render(<Hero />)

    const link = screen.getByRole('link', { name: 'Start Learning' })
    expect(link).toHaveAttribute('href', '#courses')
  })
})

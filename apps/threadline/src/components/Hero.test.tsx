import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders hero heading and CTA', () => {
    render(<Hero />)
    expect(
      screen.getByRole('heading', { name: /Fall - Winter Collections 2030/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Shop now/i })).toBeInTheDocument()
  })

  it('renders summer collection label', () => {
    render(<Hero />)
    expect(screen.getByText('Summer Collection')).toBeInTheDocument()
  })
})

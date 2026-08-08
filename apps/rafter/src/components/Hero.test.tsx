import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline as a level-1 heading', () => {
    render(<Hero />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toMatch(/Precise concept design/)
  })

  it('renders supporting copy and the Get Started call to action', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: 'Get Started' })).toHaveAttribute('href', '#projects')
  })
})

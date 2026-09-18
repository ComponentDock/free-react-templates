import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Team } from './Team'

describe('Team', () => {
  it('renders the section heading', () => {
    render(<Team />)
    expect(screen.getByRole('heading', { name: /Our Experience Chefs/i })).toBeInTheDocument()
  })

  it('renders all four chef cards', () => {
    render(<Team />)
    expect(screen.getByRole('heading', { name: /Adam Billiard/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Fred Macyard/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Justin Stuard/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Lisa Montgomery/i })).toBeInTheDocument()
  })

  it('renders chef images with accessible names', () => {
    render(<Team />)
    expect(screen.getByRole('img', { name: /Adam Billiard/i })).toHaveAttribute(
      'src',
      expect.stringContaining('picsum.photos'),
    )
  })
})

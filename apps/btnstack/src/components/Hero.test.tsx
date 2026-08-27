import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the main heading and subtitle', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/BtnSpark/)
    expect(screen.getByText(/comprehensive collection/)).toBeInTheDocument()
  })

  it('renders CTA buttons with correct links', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: /Explore Showcase/ })).toHaveAttribute(
      'href',
      '#showcase',
    )
    expect(screen.getByRole('link', { name: /Try Playground/ })).toHaveAttribute(
      'href',
      '#playground',
    )
  })

  it('renders the badge label', () => {
    render(<Hero />)
    expect(screen.getByText('Modern Bootstrap Button Library')).toBeInTheDocument()
  })
})

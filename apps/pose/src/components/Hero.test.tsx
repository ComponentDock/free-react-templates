import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline, tagline and call to action', () => {
    render(<Hero />)

    expect(screen.getByText('Welcome to')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Pose')
    expect(screen.getByText('A Professional Model Agency')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Become A Model' })).toHaveAttribute(
      'href',
      '#appointment',
    )
  })

  it('renders a dark hero with the runway background image', () => {
    const { container } = render(<Hero />)

    const hero = container.querySelector('section')
    expect(hero).toHaveClass('bg-ink')
  })
})

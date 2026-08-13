import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('shows the headline, copy, CTA, and rocket graphic', () => {
    const { container } = render(<Hero />)

    expect(screen.getByRole('heading', { level: 1, name: 'Unbeatable Offers' })).toBeInTheDocument()
    expect(screen.getByText(/Lorem ipsum dolor sit amet/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Get your plan' })).toHaveAttribute('href', '#pricing')
    expect(container.querySelectorAll('svg')).toHaveLength(1)
  })
})

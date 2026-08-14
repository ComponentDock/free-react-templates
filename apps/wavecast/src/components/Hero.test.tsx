import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the 900-weight headline and join paragraph', () => {
    render(<Hero />)

    const heading = screen.getByRole('heading', {
      name: 'Tell Your Story to the World',
    })
    expect(heading).toHaveClass('font-black')
    expect(heading).toHaveClass('text-dark')

    expect(screen.getByText(/Join with us! Login or Register\./)).toBeInTheDocument()
  })

  it('renders a flat vector illustration of two people at desks', () => {
    const { container } = render(<Hero />)

    const illustration = screen.getByRole('img', {
      name: 'Two people working at desks with laptops',
    })
    expect(illustration).toBeInTheDocument()
    expect(illustration.tagName).toBe('svg')
    expect(container.querySelectorAll('svg rect').length).toBeGreaterThan(10)
  })
})

import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Hero } from './Hero'
import { describe, expect, it } from 'vitest'

describe('Hero', () => {
  it('renders the first slide with position label, name, stats, and buttons', () => {
    render(<Hero />)
    expect(screen.getByText("Top Model's")).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1, name: 'Kate Henderson' })).toBeInTheDocument()
    for (const stat of ['Height', 'Bust', 'Waist', 'Hips', 'Shoe', 'Eyes', 'Hair']) {
      expect(screen.getByText(stat)).toBeInTheDocument()
    }
    expect(screen.getByRole('link', { name: 'Read more' })).toHaveAttribute('href', '#about')
    expect(screen.getByRole('link', { name: 'View Gallery' })).toHaveAttribute('href', '#models')
    expect(screen.getAllByRole('button', { name: /Go to slide/ })).toHaveLength(4)
    expect(screen.getByRole('button', { name: 'Go to slide 1' })).toHaveAttribute(
      'aria-current',
      'true',
    )
  })

  it('advances to a different slide when a dot is clicked', async () => {
    const user = userEvent.setup()
    const { container } = render(<Hero />)
    expect(
      screen.queryByRole('heading', { level: 1, name: 'Samantha Lewis' }),
    ).not.toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Go to slide 2' }))

    expect(screen.getByRole('heading', { level: 1, name: 'Samantha Lewis' })).toBeInTheDocument()
    expect(screen.getByText("Super Model's")).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Go to slide 2' })).toHaveAttribute(
      'aria-current',
      'true',
    )
    // The active slide's name is rendered once; all four slide photos are
    // in the DOM (the inactive ones sit in aria-hidden wrappers, so they
    // are excluded from role queries).
    expect(container.querySelectorAll('h1')).toHaveLength(1)
    expect(container.querySelectorAll('img')).toHaveLength(4)
  })
})

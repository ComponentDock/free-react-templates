import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders 3 blog entries', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { name: /Recent Posts/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Treat Your Body Like A Temple/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Morning Yoga Routines For Energy/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Mindfulness And Meditation Tips/i }),
    ).toBeInTheDocument()
  })

  it('shows dates', () => {
    render(<Blog />)
    expect(screen.getByText('Oct. 10, 2020')).toBeInTheDocument()
  })
})

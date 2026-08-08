import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Projects } from './Projects'

describe('Projects', () => {
  it('renders the heading, subtitle, and six project cards', () => {
    render(<Projects />)
    expect(
      screen.getByRole('heading', { name: /Our Recent Completed Projects/i }),
    ).toBeInTheDocument()
    expect(screen.getByText(/curated selection/i)).toBeInTheDocument()
    expect(screen.getAllByRole('img')).toHaveLength(6)
    expect(screen.getAllByRole('link', { name: /View Details/i })).toHaveLength(6)
  })
})

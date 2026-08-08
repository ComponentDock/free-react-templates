import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Projects } from './Projects'

describe('Projects', () => {
  it('renders the heading, six project images, and portfolio link', () => {
    render(<Projects />)
    expect(screen.getByRole('heading', { name: /Recent Projects/i })).toBeInTheDocument()
    expect(screen.getAllByRole('img')).toHaveLength(6)
    expect(screen.getByRole('link', { name: /See all portfolio/i })).toBeInTheDocument()
  })
})

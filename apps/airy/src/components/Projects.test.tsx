import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Projects } from './Projects'

describe('Projects', () => {
  it('renders heading and project cards', () => {
    render(<Projects />)

    expect(screen.getByText('Recent Projects')).toBeInTheDocument()
    expect(screen.getByText('Projects')).toBeInTheDocument()

    // All 9 project cards render the same title
    const cards = screen.getAllByText('Branding & Illustration Design')
    expect(cards).toHaveLength(9)
  })

  it('renders project images', () => {
    render(<Projects />)

    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(9)
  })
})

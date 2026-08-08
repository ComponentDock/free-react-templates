import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Projects } from './Projects'

describe('Projects', () => {
  it('renders the Our Projects heading and View All Projects link', () => {
    render(<Projects />)
    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading.textContent).toMatch(/Our Projects/i)
    expect(screen.getByRole('link', { name: /View All Projects/i })).toBeInTheDocument()
  })

  it('renders four project cards with a title and location', () => {
    render(<Projects />)
    expect(screen.getAllByRole('heading', { name: /Downside Up House/i })).toHaveLength(4)
    expect(screen.getAllByText('Melbourne, Australia')).toHaveLength(4)
    expect(screen.getAllByRole('img', { name: /project photo/i })).toHaveLength(4)
  })
})

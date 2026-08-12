import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('shows the heading, paragraph and Enroll CTA', () => {
    render(<About />)

    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading.textContent).toMatch(/Over 7000 Tutorials\s*from 20 Courses/)

    expect(screen.getByText(/Our set he for firmament/)).toBeInTheDocument()

    const cta = screen.getByRole('link', { name: 'Enroll a Course' })
    expect(cta).toHaveAttribute('href', '#courses')
    expect(cta.className).toMatch(/bg-brand/)
  })

  it('renders the three overlapping stat circles', () => {
    render(<About />)

    expect(screen.getByText('20+')).toBeInTheDocument()
    expect(screen.getByText('7638')).toBeInTheDocument()
    expect(screen.getByText('230+')).toBeInTheDocument()
    // Each circle carries a "Courses" label.
    expect(screen.getAllByText('Courses')).toHaveLength(3)

    const circles = document.querySelectorAll('[data-stat-circle]')
    expect(circles).toHaveLength(3)
    // Peach, light blue and teal accents.
    expect(circles[0]?.getAttribute('data-stat-circle')).toBe('peach')
    expect(circles[1]?.getAttribute('data-stat-circle')).toBe('sky')
    expect(circles[2]?.getAttribute('data-stat-circle')).toBe('brand')
  })
})

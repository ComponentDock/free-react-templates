import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Courses } from './Courses'

describe('Courses', () => {
  it('shows the eyebrow and heading', () => {
    render(<Courses />)

    expect(screen.getByText('Most Popular Courses')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'Courses for every skill level' }),
    ).toBeInTheDocument()
  })

  it('shows the four course cards with badges, meta and prices', () => {
    render(<Courses />)

    expect(
      screen.getByRole('heading', {
        level: 3,
        name: 'The Complete Web Development Bootcamp 2032',
      }),
    ).toBeInTheDocument()
    expect(screen.getByText('Machine Learning A-Z: AI, Python & R')).toBeInTheDocument()
    expect(screen.getByText('UI/UX Design: The Complete Guide')).toBeInTheDocument()
    expect(screen.getByText('AWS Certified Solutions Architect 2032')).toBeInTheDocument()

    expect(screen.getAllByText('BESTSELLER')).toHaveLength(2)
    expect(screen.getAllByText('55% OFF')).toHaveLength(2)

    expect(screen.getAllByText('4.9')).toHaveLength(2)
    expect(screen.getByText(/18,432/)).toBeInTheDocument()
    expect(screen.getByText('64.5 hours')).toBeInTheDocument()
    expect(screen.getByText('528 lessons')).toBeInTheDocument()

    expect(screen.getByText('$49')).toBeInTheDocument()
    expect(screen.getByText('$109')).toBeInTheDocument()
    expect(screen.getByText('$54')).toBeInTheDocument()

    expect(screen.getByText('Sarah Johnson')).toBeInTheDocument()
    expect(screen.getByText('David Kim')).toBeInTheDocument()
  })
})

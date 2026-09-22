import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TopCourses } from './TopCourses'

describe('TopCourses', () => {
  it('renders section title and 6 course cards', () => {
    render(<TopCourses />)
    expect(screen.getByRole('heading', { level: 2, name: /top courses/i })).toBeInTheDocument()
    expect(screen.getByText(/running classes/i)).toBeInTheDocument()
    expect(screen.getByText(/weight lifting classes/i)).toBeInTheDocument()
    expect(screen.getByText(/body combat classes/i)).toBeInTheDocument()
    expect(screen.getByText(/organic yoga classes/i)).toBeInTheDocument()
    expect(screen.getByText(/raw fitness classes/i)).toBeInTheDocument()
    expect(screen.getByText(/body building classes/i)).toBeInTheDocument()
  })

  it('displays prices and badges', () => {
    render(<TopCourses />)
    expect(screen.getByText('$275')).toBeInTheDocument()
    expect(screen.getByText('$200')).toBeInTheDocument()
    const badges = screen.getAllByText('Course Available')
    expect(badges.length).toBe(6)
  })
})

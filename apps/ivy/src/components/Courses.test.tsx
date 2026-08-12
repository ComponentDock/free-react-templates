import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Courses } from './Courses'
import { COURSE_META_SEATS, COURSE_META_TEACHER, COURSE_META_YEARS, COURSES } from '../data'

describe('Courses', () => {
  it('renders the heading and four course cards', () => {
    render(<Courses />)
    expect(screen.getByRole('heading', { level: 2, name: 'Our Courses' })).toBeInTheDocument()
    const cards = screen.getAllByRole('heading', { level: 3, name: 'Electric Engineering' })
    expect(cards).toHaveLength(COURSES.length)
    expect(screen.getAllByRole('link', { name: 'Apply now' })).toHaveLength(COURSES.length)
  })

  it('renders the meta row with teacher, seats and years', () => {
    render(<Courses />)
    expect(screen.getAllByText(COURSE_META_TEACHER).length).toBeGreaterThan(0)
    expect(screen.getAllByText(COURSE_META_SEATS).length).toBeGreaterThan(0)
    expect(screen.getAllByText(COURSE_META_YEARS).length).toBeGreaterThan(0)
  })
})

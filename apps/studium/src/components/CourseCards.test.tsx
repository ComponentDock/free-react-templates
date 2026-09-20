import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CourseCards } from './CourseCards'

describe('CourseCards', () => {
  it('renders course cards and heading', () => {
    render(<CourseCards />)
    expect(screen.getByText('Pick Your Course')).toBeInTheDocument()
    expect(screen.getByText('Web Development Bootcamp')).toBeInTheDocument()
    expect(screen.getByText('Digital Marketing Mastery')).toBeInTheDocument()
    expect(screen.getByText('See All Courses')).toBeInTheDocument()
  })
})

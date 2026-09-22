import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TopCourses } from './TopCourses'

describe('TopCourses', () => {
  it('renders the heading', () => {
    render(<TopCourses />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(/Top Courses/i)
  })

  it('renders all course cards with prices', () => {
    render(<TopCourses />)
    expect(screen.getByText('Target Specific Muscle')).toBeInTheDocument()
    expect(screen.getByText('$275')).toBeInTheDocument()
    expect(screen.getByText('Weightlifting')).toBeInTheDocument()
    expect(screen.getByText('$200')).toBeInTheDocument()
    expect(screen.getByText('Flex Your Muscle')).toBeInTheDocument()
    expect(screen.getByText('$225')).toBeInTheDocument()
    expect(screen.getByText('Cardio Blast')).toBeInTheDocument()
    expect(screen.getByText('$180')).toBeInTheDocument()
  })

  it('has join buttons for each course', () => {
    render(<TopCourses />)
    const joinButtons = screen.getAllByRole('link', { name: /Join/i })
    expect(joinButtons.length).toBe(4)
  })
})

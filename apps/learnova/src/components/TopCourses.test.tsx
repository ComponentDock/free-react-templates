import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TopCourses } from './TopCourses'

describe('TopCourses', () => {
  it('renders the section heading', () => {
    render(<TopCourses />)
    expect(screen.getByText('Top Courses')).toBeInTheDocument()
  })

  it('renders all 6 course cards', () => {
    render(<TopCourses />)
    const articles = screen.getAllByRole('article')
    expect(articles).toHaveLength(6)
  })

  it('renders course titles', () => {
    render(<TopCourses />)
    expect(screen.getByText('Web Development')).toBeInTheDocument()
    expect(screen.getByText('Data Science')).toBeInTheDocument()
    expect(screen.getByText('Graphic Design')).toBeInTheDocument()
    expect(screen.getByText('Digital Marketing')).toBeInTheDocument()
    expect(screen.getByText('Business Analytics')).toBeInTheDocument()
    expect(screen.getByText('Mobile Development')).toBeInTheDocument()
  })

  it('renders course prices', () => {
    render(<TopCourses />)
    expect(screen.getAllByText('$49').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('$59')).toBeInTheDocument()
  })

  it('renders Enroll buttons for each course', () => {
    render(<TopCourses />)
    const enrollButtons = screen.getAllByText('Enroll Now')
    expect(enrollButtons).toHaveLength(6)
  })

  it('has a section landmark', () => {
    render(<TopCourses />)
    expect(screen.getByRole('region')).toBeInTheDocument()
  })
})

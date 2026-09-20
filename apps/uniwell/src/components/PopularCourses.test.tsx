import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { PopularCourses } from './PopularCourses'

describe('PopularCourses', () => {
  it('renders the section heading', () => {
    render(<PopularCourses />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Popular Courses')
  })

  it('renders all six course cards', () => {
    render(<PopularCourses />)
    expect(screen.getByText('Complete Web Development Bootcamp')).toBeInTheDocument()
    expect(screen.getByText('Data Science & Machine Learning')).toBeInTheDocument()
    expect(screen.getByText('Mobile App Development with React Native')).toBeInTheDocument()
    expect(screen.getByText('Digital Marketing Masterclass')).toBeInTheDocument()
    expect(screen.getByText('UX/UI Design Fundamentals')).toBeInTheDocument()
    expect(screen.getByText('Business Analytics & Intelligence')).toBeInTheDocument()
  })

  it('renders course prices', () => {
    render(<PopularCourses />)
    expect(screen.getByText('$49.99')).toBeInTheDocument()
    expect(screen.getByText('$59.99')).toBeInTheDocument()
    expect(screen.getByText('$44.99')).toBeInTheDocument()
  })

  it('renders badges for tagged courses', () => {
    render(<PopularCourses />)
    expect(screen.getByText('Bestseller')).toBeInTheDocument()
    expect(screen.getByText('New')).toBeInTheDocument()
    expect(screen.getByText('Hot')).toBeInTheDocument()
  })

  it('renders enroll buttons', () => {
    render(<PopularCourses />)
    const buttons = screen.getAllByText('Enroll Now')
    expect(buttons.length).toBe(6)
  })

  it('renders instructor names', () => {
    render(<PopularCourses />)
    expect(screen.getByText('Dr. Sarah Mitchell')).toBeInTheDocument()
    expect(screen.getByText('Prof. James Chen')).toBeInTheDocument()
    expect(screen.getByText('Emily Rodriguez')).toBeInTheDocument()
  })

  it('renders student counts and durations', () => {
    render(<PopularCourses />)
    expect(screen.getByText(/12,450 students/)).toBeInTheDocument()
    expect(screen.getByText(/42 hours/)).toBeInTheDocument()
  })

  it('renders star ratings', () => {
    render(<PopularCourses />)
    const ratings = screen.getAllByText(/4\.\d/)
    expect(ratings.length).toBeGreaterThanOrEqual(1)
  })

  it('enroll buttons are clickable', async () => {
    const user = userEvent.setup()
    render(<PopularCourses />)
    const enrollButtons = screen.getAllByText('Enroll Now')
    expect(enrollButtons.length).toBeGreaterThan(0)
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    await user.click(enrollButtons[0]!)
    // Button should not throw
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    expect(enrollButtons[0]).toBeInTheDocument()
  })
})

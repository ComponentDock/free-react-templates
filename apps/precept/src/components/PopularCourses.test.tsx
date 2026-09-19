import { render, screen } from '@testing-library/react'
import { PopularCourses } from './PopularCourses'

describe('PopularCourses', () => {
  it('renders section heading', () => {
    render(<PopularCourses />)
    expect(screen.getByText(/Popular Courses We Offer/i)).toBeInTheDocument()
  })

  it('renders three course cards', () => {
    render(<PopularCourses />)
    expect(screen.getByText('Learn Designing')).toBeInTheDocument()
    expect(screen.getByText('Learn Web Development')).toBeInTheDocument()
    expect(screen.getByText('Learn Photography')).toBeInTheDocument()
  })

  it('displays prices', () => {
    render(<PopularCourses />)
    const prices = screen.getAllByText('$150')
    expect(prices).toHaveLength(3)
  })
})

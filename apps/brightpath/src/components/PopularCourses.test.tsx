import { render, screen } from '@testing-library/react'
import { PopularCourses } from './PopularCourses'

describe('PopularCourses', () => {
  it('renders section heading', () => {
    render(<PopularCourses />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Popular Courses')
  })

  it('renders all course titles', () => {
    render(<PopularCourses />)
    expect(screen.getByText('Learn React.js for Beginners')).toBeInTheDocument()
    expect(screen.getByText('Advanced CSS & Tailwind')).toBeInTheDocument()
    expect(screen.getByText('Python for Data Science')).toBeInTheDocument()
    expect(screen.getByText('UX Design Principles')).toBeInTheDocument()
  })

  it('renders course prices', () => {
    render(<PopularCourses />)
    expect(screen.getByText('$150')).toBeInTheDocument()
    expect(screen.getByText('$120')).toBeInTheDocument()
    expect(screen.getByText('$180')).toBeInTheDocument()
    expect(screen.getByText('$95')).toBeInTheDocument()
  })

  it('renders author names', () => {
    render(<PopularCourses />)
    expect(screen.getByText('Mart Taylor')).toBeInTheDocument()
    expect(screen.getByText('Sarah Chen')).toBeInTheDocument()
  })

  it('renders student and comment counts', () => {
    render(<PopularCourses />)
    expect(screen.getByText('355')).toBeInTheDocument()
    expect(screen.getByText('35')).toBeInTheDocument()
  })
})

import { render, screen } from '@testing-library/react'
import { Courses } from './Courses'

describe('Courses', () => {
  it('renders section heading', () => {
    render(<Courses />)
    expect(screen.getByText('Featured Courses')).toBeInTheDocument()
    expect(screen.getByText('Popular Courses')).toBeInTheDocument()
  })

  it('renders all three course cards', () => {
    render(<Courses />)
    expect(screen.getByText('Full-Stack Web Development Bootcamp')).toBeInTheDocument()
    expect(screen.getByText('UX/UI Design Masterclass')).toBeInTheDocument()
    expect(screen.getByText('Advanced WordPress Development')).toBeInTheDocument()
  })

  it('renders course prices', () => {
    render(<Courses />)
    expect(screen.getByText('$130.00')).toBeInTheDocument()
    expect(screen.getByText('$160.00')).toBeInTheDocument()
    expect(screen.getByText('$140.00')).toBeInTheDocument()
  })

  it('renders course metadata', () => {
    render(<Courses />)
    expect(screen.getByText('12 weeks')).toBeInTheDocument()
    expect(screen.getByText('2,340')).toBeInTheDocument()
  })

  it('renders instructor names', () => {
    render(<Courses />)
    expect(screen.getByText('Sarah Mitchell')).toBeInTheDocument()
    expect(screen.getByText('David Chen')).toBeInTheDocument()
    expect(screen.getByText('Michael Brooks')).toBeInTheDocument()
  })

  it('renders course images', () => {
    render(<Courses />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(3)
  })
})

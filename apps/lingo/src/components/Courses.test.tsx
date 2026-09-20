import { render, screen } from '@testing-library/react'
import Courses from './Courses'

describe('Courses', () => {
  it('renders the section heading', () => {
    render(<Courses />)
    expect(screen.getByRole('heading', { level: 2, name: /our courses/i })).toBeInTheDocument()
  })

  it('renders 3 course cards', () => {
    render(<Courses />)
    expect(screen.getByText('Conversational Spanish')).toBeInTheDocument()
    expect(screen.getByText('Business Japanese')).toBeInTheDocument()
    expect(screen.getByText('French for Beginners')).toBeInTheDocument()
  })

  it('displays course instructor names', () => {
    render(<Courses />)
    expect(screen.getByText(/maria garcia/i)).toBeInTheDocument()
    expect(screen.getByText(/takeshi yamada/i)).toBeInTheDocument()
    expect(screen.getByText(/sophie laurent/i)).toBeInTheDocument()
  })

  it('displays free and paid badges', () => {
    render(<Courses />)
    const freeBadges = screen.getAllByText('Free')
    expect(freeBadges.length).toBeGreaterThanOrEqual(2)
    expect(screen.getByText('Paid')).toBeInTheDocument()
  })

  it('displays student counts', () => {
    render(<Courses />)
    expect(screen.getByText('342 students')).toBeInTheDocument()
    expect(screen.getByText('215 students')).toBeInTheDocument()
    expect(screen.getByText('489 students')).toBeInTheDocument()
  })

  it('displays ratings', () => {
    render(<Courses />)
    expect(screen.getByText('4.8')).toBeInTheDocument()
    expect(screen.getByText('4.7')).toBeInTheDocument()
    expect(screen.getByText('4.9')).toBeInTheDocument()
  })
})

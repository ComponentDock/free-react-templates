import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all major sections', () => {
    render(<App />)
    expect(screen.getByText(/We Ensure Better Education/i)).toBeInTheDocument()
    expect(screen.getByText(/Learn Online Courses/i)).toBeInTheDocument()
    expect(screen.getByText(/Popular Courses/i)).toBeInTheDocument()
    expect(screen.getByText(/Expert Instructors/i)).toBeInTheDocument()
    expect(screen.getByText(/Upcoming Events/i)).toBeInTheDocument()
    expect(screen.getByText(/Latest Posts/i)).toBeInTheDocument()
    expect(screen.getByText(/Subscribe to Get Updated/i)).toBeInTheDocument()
  })
})

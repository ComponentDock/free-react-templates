import { render, screen } from '@testing-library/react'
import { Departments } from './Departments'

describe('Departments', () => {
  it('renders the section heading', () => {
    render(<Departments />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Over 2500 Courses from 5 Platforms',
    )
  })

  it('renders all department names', () => {
    render(<Departments />)
    for (const name of [
      'Languages',
      'Business',
      'Literature',
      'Software',
      'Design',
      'Coaching',
      'Development',
    ]) {
      expect(screen.getByText(name)).toBeInTheDocument()
    }
  })

  it('renders explore courses button', () => {
    render(<Departments />)
    expect(screen.getByRole('link', { name: /explore courses/i })).toBeInTheDocument()
  })

  it('renders description text', () => {
    render(<Departments />)
    expect(screen.getByText(/explore a vast library/i)).toBeInTheDocument()
  })
})

import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Departments } from './Departments'

const departmentNames = [
  'Cardiology',
  'Gastroenterology',
  'Medical Lab',
  'Dental Care',
  'Surgery',
  'Neurology',
  'Orthopaedy',
  'Pediatry',
  'Ophthalmology',
]

describe('Departments', () => {
  it('renders the section heading', () => {
    render(<Departments />)
    expect(screen.getByRole('heading', { level: 2, name: /our departments/i })).toBeInTheDocument()
  })

  it('renders all 9 department cards', () => {
    render(<Departments />)
    for (const name of departmentNames) {
      expect(screen.getByRole('heading', { level: 3, name })).toBeInTheDocument()
    }
  })

  it('renders read more links for each department', () => {
    render(<Departments />)
    const readMoreLinks = screen.getAllByRole('link', { name: /read more/i })
    expect(readMoreLinks).toHaveLength(9)
  })

  it('has proper aria-label', () => {
    render(<Departments />)
    expect(screen.getByRole('region', { name: /our departments/i })).toBeInTheDocument()
  })

  it('renders description text for each department', () => {
    render(<Departments />)
    expect(screen.getByText(/comprehensive heart care/i)).toBeInTheDocument()
    expect(screen.getByText(/digestive system disorders/i)).toBeInTheDocument()
    expect(screen.getByText(/laboratory services/i)).toBeInTheDocument()
  })
})

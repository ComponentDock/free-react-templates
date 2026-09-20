import { render, screen } from '@testing-library/react'
import { Facts } from './Facts'

describe('Facts', () => {
  it('renders section heading', () => {
    render(<Facts />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Facts that Make us Unique')
  })

  it('renders all fact titles', () => {
    render(<Facts />)
    for (const title of [
      'Expert Mentors',
      '25,000+ Courses',
      'Student Membership',
      'Lifetime Access',
      'Source Files Included',
      'Certified Programs',
    ]) {
      expect(screen.getByText(title)).toBeInTheDocument()
    }
  })

  it('renders fact descriptions', () => {
    render(<Facts />)
    expect(screen.getByText(/learn from industry professionals/i)).toBeInTheDocument()
    expect(screen.getByText(/access an extensive library/i)).toBeInTheDocument()
  })
})

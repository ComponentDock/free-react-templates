import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Departments } from './Departments'

describe('Departments', () => {
  it('renders the heading', () => {
    render(<Departments />)
    expect(screen.getByRole('heading', { name: /our departments/i })).toBeInTheDocument()
  })

  it('renders all 7 departments', () => {
    render(<Departments />)
    const deptNames = [
      'Neurology',
      'Ophthalmology',
      'Nuclear Magnetic',
      'X-Ray',
      'Surgical',
      'Cardiology',
      'Dental',
    ]
    for (const name of deptNames) {
      expect(screen.getByText(name)).toBeInTheDocument()
    }
  })
})

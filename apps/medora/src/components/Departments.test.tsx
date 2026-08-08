import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Departments } from './Departments'

const titles = [
  'Cardiology',
  'Pediatrics',
  'Orthopedics',
  'Neurology',
  'Dental Care',
  'Emergency',
] as const

describe('Departments', () => {
  it('renders the section heading and six department cards', () => {
    render(<Departments />)
    expect(screen.getByRole('heading', { level: 2, name: 'Our Departments' })).toBeInTheDocument()
    for (const title of titles) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }
  })

  it('renders a description and an icon for every card', () => {
    const { container } = render(<Departments />)
    expect(screen.getByText(/heart health, diagnostics/i)).toBeInTheDocument()
    expect(screen.getByText(/24\/7 urgent care/i)).toBeInTheDocument()
    expect(container.querySelectorAll('svg[aria-hidden="true"]')).toHaveLength(6)
  })
})

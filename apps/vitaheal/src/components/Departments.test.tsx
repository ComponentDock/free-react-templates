import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Departments } from './Departments'

describe('Departments', () => {
  it('shows the section heading', () => {
    render(<Departments />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Our Departments')
  })

  it('renders all 4 department cards', () => {
    render(<Departments />)
    const depts = ['Neonatology', 'Dentistry', 'Orthopedics', 'Laboratory']
    for (const name of depts) {
      expect(screen.getByText(name)).toBeInTheDocument()
    }
  })

  it('has Read More links for each department', () => {
    render(<Departments />)
    const links = screen.getAllByRole('link', { name: /read more/i })
    expect(links.length).toBe(4)
  })
})

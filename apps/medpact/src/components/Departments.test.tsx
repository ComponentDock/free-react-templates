import { render, screen } from '@testing-library/react'
import { Departments } from './Departments'
import { departmentsTitle, departments } from '../data'
import { describe, expect, it } from 'vitest'

describe('Departments', () => {
  it('renders the section heading', () => {
    render(<Departments />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(departmentsTitle)
  })

  it('renders all department cards', () => {
    render(<Departments />)
    for (const dept of departments) {
      expect(screen.getByText(dept.title)).toBeInTheDocument()
      expect(screen.getByText(dept.description)).toBeInTheDocument()
    }
  })

  it('renders exactly 6 department cards', () => {
    render(<Departments />)
    const headings = screen.getAllByRole('heading', { level: 3 })
    expect(headings).toHaveLength(departments.length)
  })
})

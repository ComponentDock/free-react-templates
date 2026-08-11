import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Departments } from './Departments'
import { departments, departmentsHeading } from '../data'

describe('Departments', () => {
  it('renders the section heading', () => {
    render(<Departments />)

    expect(screen.getByRole('heading', { level: 2, name: departmentsHeading })).toBeInTheDocument()
  })

  it('renders four bordered department cards', () => {
    render(<Departments />)

    expect(departments).toHaveLength(4)
    // All four cards share the same title/blurb (faithful to the source).
    const headings = screen.getAllByRole('heading', { level: 4, name: departments[0]!.title })
    expect(headings).toHaveLength(4)
    expect(screen.getAllByText(departments[0]!.blurb)).toHaveLength(4)
  })
})

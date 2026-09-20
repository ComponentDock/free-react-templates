import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Instructors } from './Instructors'

describe('Instructors', () => {
  it('renders section heading', () => {
    render(<Instructors />)
    expect(screen.getByText('Our Instructors')).toBeInTheDocument()
  })

  it('renders 4 instructor cards', () => {
    render(<Instructors />)
    expect(screen.getByText('Olivia Young')).toBeInTheDocument()
    expect(screen.getByText('Daniel Anderson')).toBeInTheDocument()
    expect(screen.getByText('David Brook')).toBeInTheDocument()
    expect(screen.getByText('Brigeth Smith')).toBeInTheDocument()
  })

  it('renders instructor role', () => {
    render(<Instructors />)
    const roles = screen.getAllByText('Instructor')
    expect(roles).toHaveLength(4)
  })
})

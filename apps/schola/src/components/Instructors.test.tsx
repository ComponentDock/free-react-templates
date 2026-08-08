import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Instructors } from './Instructors'

describe('Instructors', () => {
  it('renders the section heading', () => {
    render(<Instructors />)
    expect(screen.getByRole('heading', { name: /Learn from Industry Leaders/ })).toBeInTheDocument()
  })

  it('shows instructor cards with names and roles', () => {
    render(<Instructors />)
    expect(screen.getByText('Dr. Maya Chen')).toBeInTheDocument()
    expect(screen.getByText('Marcus Thompson')).toBeInTheDocument()
    expect(screen.getByText('Elena Rodriguez')).toBeInTheDocument()
    expect(screen.getByText('James Okonkwo')).toBeInTheDocument()
    expect(screen.getByText('Priya Sharma')).toBeInTheDocument()
    expect(screen.getByText('AI Research Scientist & Educator')).toBeInTheDocument()
    expect(screen.getByText('Senior Product Designer')).toBeInTheDocument()
  })
})

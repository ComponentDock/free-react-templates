import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Departments } from './Departments'

describe('Departments', () => {
  it('renders the section heading', () => {
    render(<Departments />)
    expect(screen.getByRole('heading', { name: /Our Popular Departments/i })).toBeInTheDocument()
  })

  it('renders all six department names', () => {
    render(<Departments />)
    expect(screen.getByText('Cardiology')).toBeInTheDocument()
    expect(screen.getByText('Urology')).toBeInTheDocument()
    expect(screen.getByText('Dental Care')).toBeInTheDocument()
    expect(screen.getByText('Eye Care')).toBeInTheDocument()
    expect(screen.getByText('Neurology')).toBeInTheDocument()
    expect(screen.getByText('Plastic Surgery')).toBeInTheDocument()
  })
})

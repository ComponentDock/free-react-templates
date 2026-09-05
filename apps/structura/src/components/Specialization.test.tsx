import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Specialization } from './Specialization'

describe('Specialization', () => {
  it('renders the section heading', () => {
    render(<Specialization />)
    expect(screen.getByRole('heading', { name: /Our Specialization/i })).toBeInTheDocument()
  })

  it('displays all 6 specialization items', () => {
    render(<Specialization />)
    expect(screen.getByText('Architecture')).toBeInTheDocument()
    expect(screen.getByText('Interior Design')).toBeInTheDocument()
    expect(screen.getByText('Building Design')).toBeInTheDocument()
    expect(screen.getByText('Art Design')).toBeInTheDocument()
    expect(screen.getByText('Home Design')).toBeInTheDocument()
    expect(screen.getByText('Hotel Design')).toBeInTheDocument()
  })
})

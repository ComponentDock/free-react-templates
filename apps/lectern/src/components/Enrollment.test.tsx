import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Enrollment } from './Enrollment'

describe('Enrollment', () => {
  it('renders the section heading', () => {
    render(<Enrollment />)
    expect(screen.getByText(/enrollment/i)).toBeInTheDocument()
  })

  it('renders all three enrollment steps', () => {
    render(<Enrollment />)
    expect(screen.getByText('Contact')).toBeInTheDocument()
    expect(screen.getByText('Consulting')).toBeInTheDocument()
    expect(screen.getByText('Register')).toBeInTheDocument()
  })

  it('has correct aria-label', () => {
    render(<Enrollment />)
    expect(screen.getByRole('region', { name: 'Enrollment' })).toBeInTheDocument()
  })
})

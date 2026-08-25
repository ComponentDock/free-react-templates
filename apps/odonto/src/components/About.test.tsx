import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the about heading and description', () => {
    render(<About />)
    expect(screen.getByText(/Toothcare is a Dental Clinic/)).toBeInTheDocument()
    expect(screen.getByText(/Far far away/)).toBeInTheDocument()
  })

  it('renders the clinic image', () => {
    render(<About />)
    expect(screen.getByRole('img', { name: 'Modern dental clinic' })).toBeInTheDocument()
  })
})

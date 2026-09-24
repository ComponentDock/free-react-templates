import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the testimonials heading and patient quotes', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { name: /Happy Patients/i })).toBeInTheDocument()
    expect(screen.getByText(/exceptional\. The doctors/i)).toBeInTheDocument()
    expect(screen.getByText(/state-of-the-art facilities/i)).toBeInTheDocument()
    expect(screen.getByText(/moment I arrived/i)).toBeInTheDocument()
  })
})

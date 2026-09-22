import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ChooseUs } from './ChooseUs'

describe('ChooseUs', () => {
  it('renders the heading and all four reason cards', () => {
    render(<ChooseUs />)
    expect(screen.getByRole('heading', { name: /Why Choose Us/i })).toBeInTheDocument()
    expect(screen.getByText('Professional Staff')).toBeInTheDocument()
    expect(screen.getByText('Latest Machinery')).toBeInTheDocument()
    expect(screen.getByText('Certified Material')).toBeInTheDocument()
    expect(screen.getByText('Affordable Cost')).toBeInTheDocument()
  })

  it('renders descriptions for each reason', () => {
    render(<ChooseUs />)
    expect(screen.getByText(/experienced woodworkers/i)).toBeInTheDocument()
    expect(screen.getByText(/state-of-the-art tools/i)).toBeInTheDocument()
    expect(screen.getByText(/sustainable suppliers/i)).toBeInTheDocument()
    expect(screen.getByText(/competitive pricing/i)).toBeInTheDocument()
  })
})

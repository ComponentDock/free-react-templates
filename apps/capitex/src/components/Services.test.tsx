import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Services } from './Services'

describe('Services', () => {
  it('renders section title', () => {
    render(<Services />)
    expect(screen.getByText(/Loan for your business & startup/i)).toBeInTheDocument()
  })

  it('renders three service cards', () => {
    render(<Services />)
    expect(screen.getByText('Student Loan')).toBeInTheDocument()
    expect(screen.getByText('Business Loan')).toBeInTheDocument()
    expect(screen.getByText('Startup Loan')).toBeInTheDocument()
  })

  it('renders Apply For Loan buttons for each card', () => {
    render(<Services />)
    const buttons = screen.getAllByText('Apply For Loan')
    expect(buttons).toHaveLength(3)
  })

  it('renders card images', () => {
    render(<Services />)
    expect(screen.getByAltText('Student Loan')).toBeInTheDocument()
    expect(screen.getByAltText('Business Loan')).toBeInTheDocument()
    expect(screen.getByAltText('Startup Loan')).toBeInTheDocument()
  })

  it('has gray background', () => {
    const { container } = render(<Services />)
    const section = container.querySelector('section')!
    expect(section.className).toContain('bg-gray-bg')
  })
})

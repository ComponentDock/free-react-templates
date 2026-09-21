import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { HowItWorks } from './HowItWorks'

describe('HowItWorks', () => {
  it('renders the section heading', () => {
    render(<HowItWorks />)
    expect(screen.getByText('How it Works')).toBeInTheDocument()
  })

  it('renders three steps', () => {
    render(<HowItWorks />)
    expect(screen.getByText('Apply for loan')).toBeInTheDocument()
    expect(screen.getByText('Application review')).toBeInTheDocument()
    expect(screen.getByText('Get funding fast')).toBeInTheDocument()
  })

  it('renders step numbers', () => {
    render(<HowItWorks />)
    expect(screen.getByText('01')).toBeInTheDocument()
    expect(screen.getByText('02')).toBeInTheDocument()
    expect(screen.getByText('03')).toBeInTheDocument()
  })

  it('renders step descriptions', () => {
    render(<HowItWorks />)
    const descriptions = screen.getAllByText(/We will customize a loan/)
    expect(descriptions).toHaveLength(3)
  })
})

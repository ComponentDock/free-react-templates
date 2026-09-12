import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { HowItWorks } from './HowItWorks'

describe('HowItWorks', () => {
  it('renders section title', () => {
    render(<HowItWorks />)
    expect(screen.getByText('How it works')).toBeInTheDocument()
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
    expect(screen.getByText(/Fill out our simple online application/)).toBeInTheDocument()
    expect(screen.getByText(/Our team reviews your application/)).toBeInTheDocument()
    expect(screen.getByText(/Once approved, funds are transferred/)).toBeInTheDocument()
  })
})

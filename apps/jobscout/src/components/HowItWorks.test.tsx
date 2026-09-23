import { render, screen } from '@testing-library/react'
import { HowItWorks } from './HowItWorks'

describe('HowItWorks', () => {
  it('renders the section heading', () => {
    render(<HowItWorks />)
    expect(screen.getByText('How it works')).toBeInTheDocument()
  })

  it('renders 3 step cards', () => {
    render(<HowItWorks />)
    expect(screen.getByText('1. Search a job')).toBeInTheDocument()
    expect(screen.getByText('2. Apply for job')).toBeInTheDocument()
    expect(screen.getByText('3. Get your job')).toBeInTheDocument()
  })

  it('renders step descriptions', () => {
    render(<HowItWorks />)
    expect(screen.getByText(/Browse thousands of job listings/)).toBeInTheDocument()
    expect(screen.getByText(/Submit your application/)).toBeInTheDocument()
    expect(screen.getByText(/Land your dream job/)).toBeInTheDocument()
  })
})

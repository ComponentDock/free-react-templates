import { render, screen } from '@testing-library/react'
import { HowItWorks } from './HowItWorks'

describe('HowItWorks', () => {
  it('renders section heading', () => {
    render(<HowItWorks />)
    expect(screen.getByText('How It Works')).toBeInTheDocument()
  })

  it('renders 3 numbered steps', () => {
    render(<HowItWorks />)
    expect(screen.getByText('Online Applications')).toBeInTheDocument()
    expect(screen.getByText('Get an Approval')).toBeInTheDocument()
    expect(screen.getByText('Card Delivery')).toBeInTheDocument()
  })

  it('renders step numbers', () => {
    render(<HowItWorks />)
    expect(screen.getByText('1')).toBeInTheDocument()
    expect(screen.getByText('2')).toBeInTheDocument()
    expect(screen.getByText('3')).toBeInTheDocument()
  })
})

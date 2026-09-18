import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { HowItWorks } from './HowItWorks'

describe('HowItWorks', () => {
  it('renders the section heading', () => {
    render(<HowItWorks />)
    expect(screen.getByRole('heading', { level: 2, name: 'How It Works' })).toBeInTheDocument()
  })

  it('renders 3 step cards', () => {
    render(<HowItWorks />)
    expect(screen.getByText('Decide What To Do')).toBeInTheDocument()
    expect(screen.getByText('Find What You Want')).toBeInTheDocument()
    expect(screen.getByText('Explore Amazing Places')).toBeInTheDocument()
  })

  it('displays step numbers', () => {
    render(<HowItWorks />)
    expect(screen.getByText('1')).toBeInTheDocument()
    expect(screen.getByText('2')).toBeInTheDocument()
    expect(screen.getByText('3')).toBeInTheDocument()
  })

  it('renders step descriptions', () => {
    render(<HowItWorks />)
    expect(screen.getByText(/Think about what kind/)).toBeInTheDocument()
  })
})

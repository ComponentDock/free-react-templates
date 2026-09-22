import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { HowItWorks } from './HowItWorks'

describe('HowItWorks', () => {
  it('renders heading', () => {
    render(<HowItWorks />)
    expect(screen.getByText('How it works?')).toBeInTheDocument()
    expect(screen.getByText('Other Services')).toBeInTheDocument()
  })

  it('renders 4 step cards', () => {
    render(<HowItWorks />)
    expect(screen.getByText('Follow the program')).toBeInTheDocument()
    expect(screen.getByText('Work for result')).toBeInTheDocument()
    expect(screen.getByText('Eat healthy food')).toBeInTheDocument()
    expect(screen.getByText('Enjoy your life')).toBeInTheDocument()
  })

  it('renders step descriptions', () => {
    render(<HowItWorks />)
    expect(screen.getByText(/personalized assessment/)).toBeInTheDocument()
    expect(screen.getByText(/Stay committed/)).toBeInTheDocument()
    expect(screen.getByText(/nutritious meals/)).toBeInTheDocument()
    expect(screen.getByText(/improved health/)).toBeInTheDocument()
  })
})

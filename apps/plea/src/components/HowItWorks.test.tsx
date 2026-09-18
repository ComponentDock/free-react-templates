import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { HowItWorks } from './HowItWorks'

describe('HowItWorks', () => {
  it('renders all three steps', () => {
    render(<HowItWorks />)
    expect(screen.getByText('Make Schedule')).toBeInTheDocument()
    expect(screen.getByText('Start Discussion')).toBeInTheDocument()
    expect(screen.getByText('Enjoy Plan')).toBeInTheDocument()
  })

  it('renders step numbers', () => {
    render(<HowItWorks />)
    expect(screen.getByText('01')).toBeInTheDocument()
    expect(screen.getByText('02')).toBeInTheDocument()
    expect(screen.getByText('03')).toBeInTheDocument()
  })

  it('renders step descriptions', () => {
    render(<HowItWorks />)
    expect(screen.getByText(/easy scheduling system/)).toBeInTheDocument()
    expect(screen.getByText(/safe environment/)).toBeInTheDocument()
    expect(screen.getByText(/customized plan/)).toBeInTheDocument()
  })
})

import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline', () => {
    render(<Hero />)
    expect(screen.getByText('Banking Solutions')).toBeInTheDocument()
  })

  it('renders the subtitle', () => {
    render(<Hero />)
    expect(screen.getByText(/comprehensive financial services/)).toBeInTheDocument()
  })

  it('renders 3 service summary cards', () => {
    render(<Hero />)
    expect(screen.getByText('Financing Solutions')).toBeInTheDocument()
    expect(screen.getByText('Credit & Debit Cards')).toBeInTheDocument()
    expect(screen.getByText('Savings Accounts')).toBeInTheDocument()
  })
})

import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline', () => {
    render(<Hero />)
    expect(screen.getByText(/Get Loan for your Business growth or startup/)).toBeInTheDocument()
  })

  it('renders the How it Works button', () => {
    render(<Hero />)
    expect(screen.getByText('How it Works')).toBeInTheDocument()
  })

  it('renders the loan calculator heading', () => {
    render(<Hero />)
    expect(screen.getByText('How much do you want?')).toBeInTheDocument()
  })

  it('renders the Amount dropdown', () => {
    render(<Hero />)
    expect(screen.getByLabelText('Amount')).toBeInTheDocument()
  })

  it('renders the Month dropdown', () => {
    render(<Hero />)
    expect(screen.getByLabelText('Month')).toBeInTheDocument()
  })

  it('renders the Continue button', () => {
    render(<Hero />)
    expect(screen.getByText('Continue')).toBeInTheDocument()
  })

  it('shows the payment display', () => {
    render(<Hero />)
    expect(screen.getByText('You have to pay:')).toBeInTheDocument()
  })

  it('allows changing the amount dropdown', async () => {
    render(<Hero />)
    const amountSelect = screen.getByLabelText('Amount')
    await userEvent.selectOptions(amountSelect, '$50')
    expect(amountSelect).toHaveValue('$50')
  })

  it('allows changing the month dropdown', async () => {
    render(<Hero />)
    const monthSelect = screen.getByLabelText('Month')
    await userEvent.selectOptions(monthSelect, '6 Month')
    expect(monthSelect).toHaveValue('6 Month')
  })
})

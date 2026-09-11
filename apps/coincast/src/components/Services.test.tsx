import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the section title', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Why Choose Coincast')
  })

  it('renders 4 service items', () => {
    render(<Services />)
    expect(screen.getByText('Crypto Wallet Setup')).toBeInTheDocument()
    expect(screen.getByText('Trading Strategies')).toBeInTheDocument()
    expect(screen.getByText('Security Audits')).toBeInTheDocument()
    expect(screen.getByText('Blockchain Development')).toBeInTheDocument()
  })

  it('renders Free Consultation button', () => {
    render(<Services />)
    expect(screen.getByRole('button', { name: /Free Consultation/i })).toBeInTheDocument()
  })

  it('renders service descriptions', () => {
    render(<Services />)
    expect(screen.getByText(/secure wallets/)).toBeInTheDocument()
    expect(screen.getByText(/Custom trading algorithms/)).toBeInTheDocument()
  })
})

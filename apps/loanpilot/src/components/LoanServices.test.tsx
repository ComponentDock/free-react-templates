import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { LoanServices } from './LoanServices'

describe('LoanServices', () => {
  it('renders the section heading', () => {
    render(<LoanServices />)
    expect(
      screen.getByRole('heading', { level: 2, name: /Discover all the loans for you/i }),
    ).toBeInTheDocument()
  })

  it('renders all four loan service cards', () => {
    render(<LoanServices />)
    expect(screen.getByText('Personal Loan')).toBeInTheDocument()
    expect(screen.getByText('Business Loan')).toBeInTheDocument()
    expect(screen.getByText('Education Loan')).toBeInTheDocument()
    expect(screen.getByText('Commercial Loan')).toBeInTheDocument()
  })

  it('renders the numbered labels', () => {
    render(<LoanServices />)
    expect(screen.getByText('01.')).toBeInTheDocument()
    expect(screen.getByText('02.')).toBeInTheDocument()
    expect(screen.getByText('03.')).toBeInTheDocument()
    expect(screen.getByText('04.')).toBeInTheDocument()
  })

  it('renders Find Out More links for each card', () => {
    render(<LoanServices />)
    const links = screen.getAllByRole('link', { name: /Find Out More/i })
    expect(links.length).toBe(4)
  })

  it('renders loan service images', () => {
    render(<LoanServices />)
    const cards = document.querySelectorAll('[style*="background-image"]')
    expect(cards.length).toBe(4)
  })
})

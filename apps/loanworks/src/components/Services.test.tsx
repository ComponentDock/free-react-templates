import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Services } from './Services'

describe('Services', () => {
  it('renders the section heading', () => {
    render(<Services />)
    expect(screen.getByText('What we offer for you')).toBeInTheDocument()
  })

  it('renders three service cards', () => {
    render(<Services />)
    expect(screen.getByText('Home Loan')).toBeInTheDocument()
    expect(screen.getByText('Car Loan')).toBeInTheDocument()
    expect(screen.getByText('Education Loan')).toBeInTheDocument()
  })

  it('renders price range on each card', () => {
    render(<Services />)
    const prices = screen.getAllByText('$3000-$10000')
    expect(prices).toHaveLength(3)
  })

  it('renders Apply Now buttons', () => {
    render(<Services />)
    const buttons = screen.getAllByText('Apply Now')
    expect(buttons).toHaveLength(3)
  })

  it('renders loan details', () => {
    render(<Services />)
    const items = screen.getAllByText(/Borrow - \$350 over 3 months/)
    expect(items.length).toBeGreaterThan(0)
  })
})

import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import FinancialSolution from './FinancialSolution'

describe('FinancialSolution', () => {
  it('renders the section heading', () => {
    render(<FinancialSolution />)
    expect(screen.getByText(/Gives you the best Financial solution/)).toBeInTheDocument()
  })

  it('renders the description paragraph', () => {
    render(<FinancialSolution />)
    expect(screen.getByText(/Nemo enim ipsam voluptatem/)).toBeInTheDocument()
  })

  it('renders the Learn More button', () => {
    render(<FinancialSolution />)
    expect(screen.getByText('Learn More')).toBeInTheDocument()
  })

  it('renders the finance image', () => {
    render(<FinancialSolution />)
    const img = screen.getByAltText('Financial solutions')
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
  })
})

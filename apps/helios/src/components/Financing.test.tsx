import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Financing } from './Financing'

describe('Financing', () => {
  it('renders the section heading and all three pricing cards', () => {
    render(<Financing />)
    expect(screen.getByRole('heading', { name: 'Flexible Payment Options' })).toBeInTheDocument()
    for (const name of ['Cash Purchase', 'Solar Lease', 'Power Purchase Agreement']) {
      expect(screen.getByRole('heading', { name })).toBeInTheDocument()
    }
    expect(screen.getByText('Best Value')).toBeInTheDocument()
    expect(screen.getByText('Most Popular')).toBeInTheDocument()
    expect(screen.getByText('Zero Risk')).toBeInTheDocument()
    expect(screen.getByText('$15,000')).toBeInTheDocument()
    expect(screen.getByText('$0 down')).toBeInTheDocument()
    expect(screen.getByText('$0 upfront')).toBeInTheDocument()
  })

  it('renders four bullets and a Learn More link per card', () => {
    render(<Financing />)
    const learnMore = screen.getAllByRole('link', { name: 'Learn More' })
    expect(learnMore).toHaveLength(3)
    for (const bullet of [
      'No monthly payments',
      '30% federal tax credit',
      'No upfront cost',
      'Locked-in energy rate',
      'Pay only for what you use',
    ]) {
      expect(screen.getByText(bullet)).toBeInTheDocument()
    }
  })
})

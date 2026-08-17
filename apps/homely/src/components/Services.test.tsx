import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Services } from './Services'

describe('Services', () => {
  it('renders the heading, subtitle, and three labeled loan cards', () => {
    render(<Services />)

    expect(
      screen.getByRole('heading', { name: 'Solutions for every business need.' }),
    ).toBeInTheDocument()
    expect(screen.getByText(/Compare fixed and variable home-loan rates/)).toBeInTheDocument()

    for (const label of ['Home Loan', 'Car Loan', 'Business Loan']) {
      expect(screen.getByText(label)).toBeInTheDocument()
    }
    expect(
      screen.getByRole('heading', { name: 'What are my options and the cost to exercise?' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'Should I exercise now or later? How can I afford it?' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        name: 'I own my shares — can I get liquidity now without selling?',
      }),
    ).toBeInTheDocument()

    expect(screen.getAllByRole('link', { name: 'Learn More' })).toHaveLength(3)
  })
})

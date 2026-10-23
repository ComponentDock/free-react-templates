import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('renders the heading and all four feature cards with icon, title, and copy', () => {
    render(<Features />)
    expect(
      screen.getByRole('heading', { level: 2, name: 'Some of the best features Of Our App!' }),
    ).toBeInTheDocument()

    for (const title of [
      'Easy to Costomize',
      'Extreme Security',
      'Customer Support',
      'Creative Design',
    ]) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }

    expect(screen.getByText(/fully customizable/i)).toBeInTheDocument()
    expect(screen.getByText(/bank-grade/i)).toBeInTheDocument()
    expect(screen.getByText(/24\/7 support/)).toBeInTheDocument()
    expect(screen.getByText(/pixel-perfect design/)).toBeInTheDocument()
  })
})

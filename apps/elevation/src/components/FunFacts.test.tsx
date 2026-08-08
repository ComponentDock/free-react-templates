import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FunFacts } from './FunFacts'

describe('FunFacts', () => {
  it('renders the section title and four stat counters', () => {
    render(<FunFacts />)
    expect(screen.getByText('CAREER OVERVIEW')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Quick Facts/i })).toBeInTheDocument()

    for (const [value, label] of [
      ['596', 'Projects Completed'],
      ['552', 'Really Happy Clients'],
      ['1009', 'Cups of Coffee Taken'],
      ['435', 'In House Professionals'],
    ] as const) {
      expect(screen.getByText(value)).toBeInTheDocument()
      expect(screen.getByText(label)).toBeInTheDocument()
    }
  })
})

import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Counters } from '../components/Counters'
import { counters } from '../content'

describe('Counters', () => {
  it('renders every figure at its final value when no viewport observer exists', () => {
    render(<Counters />)
    for (const counter of counters) {
      expect(screen.getByTestId(`counter-${counter.target}`)).toHaveTextContent(String(counter.target))
      expect(screen.getByText(counter.label)).toBeInTheDocument()
    }
  })

  it('prints 9400 without a thousands separator', () => {
    render(<Counters />)
    expect(screen.getByTestId('counter-9400')).toHaveTextContent('9400')
  })
})

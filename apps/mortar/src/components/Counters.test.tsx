import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Counters } from './Counters'
import { counters } from '../data'

describe('Counters', () => {
  it('renders the four counters with values and labels', () => {
    render(<Counters />)
    for (const counter of counters) {
      expect(screen.getByText(counter.value)).toBeInTheDocument()
      expect(screen.getByText(counter.label)).toBeInTheDocument()
    }
  })
})

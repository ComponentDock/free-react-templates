import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Counters } from './Counters'
import { counters } from '../data'

describe('Counters', () => {
  it('renders four white cards with final values and labels (jsdom fallback)', () => {
    const { container } = render(<Counters />)
    expect(container.querySelectorAll('div.rounded-xl')).toHaveLength(4)
    for (const counter of counters) {
      expect(screen.getByText(counter.label)).toBeInTheDocument()
    }
    // Projects and Clients share the 1200 target → two occurrences.
    expect(screen.getAllByText('1,200')).toHaveLength(2)
    expect(screen.getByText('100')).toBeInTheDocument()
    expect(screen.getByText('500')).toBeInTheDocument()
  })
})

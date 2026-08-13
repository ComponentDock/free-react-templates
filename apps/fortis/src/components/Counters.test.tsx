import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Counters } from './Counters'
import { counters } from '../data'

describe('Counters', () => {
  it('renders the light band with four icon + number + label stats', () => {
    const { container } = render(<Counters />)
    const section = container.querySelector('section')!
    expect(section.className).toContain('bg-light')

    for (const counter of counters) {
      // "3892" appears twice (Cup of Coffee and Project Finish) — the value
      // may match more than one element.
      expect(screen.getAllByText(counter.value).length).toBeGreaterThan(0)
      expect(screen.getByText(counter.label)).toBeInTheDocument()
    }
    expect(container.querySelectorAll('svg')).toHaveLength(counters.length)
  })
})

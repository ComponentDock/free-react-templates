import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Counters } from './Counters'

describe('Counters', () => {
  it('renders four counters with numbers', () => {
    render(<Counters />)
    for (const label of ['Places', 'Events', 'Photos', 'Speakers']) {
      expect(screen.getByText(label)).toBeInTheDocument()
    }
    expect(screen.getAllByText(/\d+/).length).toBeGreaterThanOrEqual(4)
  })
})

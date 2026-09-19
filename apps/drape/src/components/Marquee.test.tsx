import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Marquee } from './Marquee'

describe('Marquee', () => {
  it('renders all marquee text items (repeated for animation)', () => {
    render(<Marquee />)
    expect(screen.getAllByText('Free shipping over $100').length).toBeGreaterThanOrEqual(4)
    expect(screen.getAllByText('30 day returns').length).toBeGreaterThanOrEqual(4)
    expect(screen.getAllByText('Carbon neutral delivery').length).toBeGreaterThanOrEqual(4)
    expect(screen.getAllByText('Natural fibres only').length).toBeGreaterThanOrEqual(4)
  })
})

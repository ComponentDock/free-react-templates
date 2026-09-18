import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { GOLD_SPONSORS, SILVER_SPONSORS } from '../data'
import { Sponsors } from './Sponsors'

describe('Sponsors', () => {
  it('renders the heading and all sponsor names', () => {
    render(<Sponsors />)
    expect(screen.getByText('Official Sponsors')).toBeInTheDocument()
    for (const sponsor of [...GOLD_SPONSORS, ...SILVER_SPONSORS]) {
      expect(screen.getByText(sponsor)).toBeInTheDocument()
    }
  })

  it('renders Gold and Silver tier labels', () => {
    render(<Sponsors />)
    expect(screen.getByText('Gold Sponsors')).toBeInTheDocument()
    expect(screen.getByText('Silver Sponsors')).toBeInTheDocument()
  })
})

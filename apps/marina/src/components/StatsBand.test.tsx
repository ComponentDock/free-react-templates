import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { StatsBand } from './StatsBand'
import { stats } from '../data'

describe('StatsBand', () => {
  it('renders the five white counters with values and labels', () => {
    render(<StatsBand />)
    expect(screen.getByRole('region', { name: 'Company statistics' })).toBeInTheDocument()
    for (const stat of stats) {
      expect(screen.getByText(stat.value)).toBeInTheDocument()
      expect(screen.getByText(stat.label)).toBeInTheDocument()
    }
  })

  it('applies the fixed-attachment background and blue overlay classes', () => {
    const { container } = render(<StatsBand />)
    const section = container.querySelector('section')!
    expect(section.className).toContain('bg-fixed')
    const overlay = container.querySelector('.bg-overlay')!
    expect(overlay).not.toBeNull()
  })
})

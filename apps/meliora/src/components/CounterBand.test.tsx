import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CounterBand } from './CounterBand'
import { counters, counterBgImage } from '../data'

describe('CounterBand', () => {
  it('renders all four counters with values and labels', () => {
    render(<CounterBand />)
    for (const counter of counters) {
      expect(screen.getByText(counter.value)).toBeInTheDocument()
      expect(screen.getByText(counter.label)).toBeInTheDocument()
    }
  })

  it('uses the photo background', () => {
    render(<CounterBand />)
    const section = screen.getByLabelText('Impact counters')
    expect(section.style.backgroundImage).toContain(counterBgImage.src)
  })
})

import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Process } from './Process'
import { steps } from '../data'

describe('Process', () => {
  it('renders the three steps in order with their durations', () => {
    render(<Process />)

    const items = screen.getAllByRole('listitem')
    expect(items).toHaveLength(3)
    expect(items.map((item) => item.querySelector('h3')?.textContent)).toEqual([
      'You pick the window',
      'We diagnose and quote',
      'We fix it and log it',
    ])

    steps.forEach((step, index) => {
      const text = items[index]?.textContent ?? ''
      expect(text).toContain(step.ordinal)
      expect(text).toContain(step.body)
      expect(text).toContain(step.duration)
    })
  })
})

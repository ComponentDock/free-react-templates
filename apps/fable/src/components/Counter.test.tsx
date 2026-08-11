import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Counter } from './Counter'
import { counterHeading, counterSectionLabel, counterStats } from '../data'

describe('Counter', () => {
  it('renders four stat blocks with numbers, labels, and icons in gradient circles', () => {
    const { container } = render(<Counter />)
    const section = screen.getByRole('region', { name: counterSectionLabel })
    expect(section).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: counterHeading })).toBeInTheDocument()

    expect(container.querySelectorAll('img')).toHaveLength(1)
    const circles = container.querySelectorAll('[data-icon-circle]')
    expect(circles).toHaveLength(counterStats.length)
    for (const circle of circles) {
      expect(circle.className).toMatch(/from-counter-from/i)
    }
    for (const stat of counterStats) {
      expect(screen.getByText(stat.label)).toBeInTheDocument()
      expect(screen.getByText(stat.value.toString())).toBeInTheDocument()
    }
  })
})

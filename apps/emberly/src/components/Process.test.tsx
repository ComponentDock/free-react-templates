import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Process } from './Process'
import { PROCESS } from '../content'

describe('Process', () => {
  it('renders three ordered steps with numerals, rules and notes', () => {
    const { container } = render(<Process />)

    const steps = container.querySelectorAll('[data-process-step]')
    expect(steps).toHaveLength(3)
    expect(container.querySelector('ol')).toHaveClass('sm:grid-cols-3')

    for (const step of PROCESS.steps) {
      expect(screen.getByText(step.index)).toHaveClass('tabular-nums', 'text-primary-600')
      expect(screen.getByRole('heading', { name: step.name })).toBeInTheDocument()
      expect(screen.getByText(step.body)).toBeInTheDocument()
      expect(screen.getByText(step.note)).toHaveClass('font-semibold', 'text-primary-700')
    }
  })

  it('draws the hairline rule beside each numeral', () => {
    const { container } = render(<Process />)
    const rules = container.querySelectorAll('span[aria-hidden="true"]')
    expect(rules).toHaveLength(3)
    expect(rules[0]).toHaveClass('h-px', 'flex-1', 'bg-ink-100')
  })
})

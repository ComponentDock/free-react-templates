import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Process } from './Process'
import { PROCESS_COPY, STEPS } from '../content'

describe('Process', () => {
  it('is three numbered steps in order', () => {
    render(<Process />)
    const steps = screen.getAllByRole('listitem')
    expect(steps).toHaveLength(3)
    expect(screen.getByText('01')).toBeInTheDocument()
    expect(screen.getByText('02')).toBeInTheDocument()
    expect(screen.getByText('03')).toBeInTheDocument()
    STEPS.forEach((step) => {
      expect(screen.getByRole('heading', { level: 3, name: step.title })).toBeInTheDocument()
      expect(screen.getByText(step.body)).toBeInTheDocument()
      expect(screen.getByText(step.promise)).toBeInTheDocument()
    })
  })

  it('opens each step with a hairline rule that fills the row', () => {
    render(<Process />)
    const rules = document.querySelectorAll('li > div > span.h-px')
    expect(rules).toHaveLength(3)
    rules.forEach((rule) => expect(rule.className).toContain('flex-1'))
  })

  it('uses the deeper eyebrow ink only here', () => {
    render(<Process />)
    expect(screen.getByText(PROCESS_COPY.eyebrow).className).toContain('text-primary-700')
    expect(screen.getByText(STEPS[2]!.promise).className).toContain('text-primary-700')
  })

  it('is an ordered list on the white ground', () => {
    const { container } = render(<Process />)
    expect(container.querySelector('ol')).not.toBeNull()
    expect((container.querySelector('section') as HTMLElement).className).toContain('bg-white')
  })
})

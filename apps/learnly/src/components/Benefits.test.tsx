import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Benefits } from './Benefits'
import { benefits, sectionHeadings } from '../data'

describe('Benefits', () => {
  it('renders the Learn Anything heading block', () => {
    render(<Benefits />)

    expect(screen.getByText(sectionHeadings.learnAnythingSub)).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: sectionHeadings.learnAnythingTitle }),
    ).toBeInTheDocument()
  })

  it('renders three benefit rows with title and copy', () => {
    render(<Benefits />)

    for (const benefit of benefits) {
      expect(screen.getByRole('heading', { level: 3, name: benefit.title })).toBeInTheDocument()
      expect(screen.getAllByText(benefit.copy).length).toBeGreaterThan(0)
    }
  })

  it('renders a teal icon circle per row', () => {
    const { container } = render(<Benefits />)

    expect(container.querySelectorAll('svg')).toHaveLength(benefits.length)
    expect(container.querySelectorAll('[data-benefit-icon]')).toHaveLength(benefits.length)
  })
})

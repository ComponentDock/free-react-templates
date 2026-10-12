import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { SectionHeading } from './SectionHeading'

describe('SectionHeading', () => {
  it('prints the heading, the red ornament rule and the subtext', () => {
    const { container } = render(<SectionHeading title="Wedding Info" subtext="Three parts of one day." />)

    const heading = screen.getByRole('heading', { level: 2 })

    expect(heading).toHaveTextContent('Wedding Info')
    expect(heading).toHaveClass('text-[32px]', 'font-bold', 'text-ink')
    expect(screen.getByText('Three parts of one day.')).toHaveClass('text-muted')

    const rule = container.querySelector('svg')

    expect(rule).not.toBeNull()
    expect(rule).toHaveClass('text-brand')
    expect(rule).toHaveAttribute('aria-hidden', 'true')
  })
})

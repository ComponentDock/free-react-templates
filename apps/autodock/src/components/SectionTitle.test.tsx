import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SectionTitle } from './SectionTitle'

describe('SectionTitle', () => {
  it('renders the title in dark tone by default', () => {
    render(<SectionTitle title="About us" />)
    const heading = screen.getByRole('heading', { level: 2, name: 'About us' })
    expect(heading).toHaveClass('text-ink')
  })

  it('renders the title in light tone when specified', () => {
    render(<SectionTitle title="Pricing" tone="light" />)
    const heading = screen.getByRole('heading', { level: 2, name: 'Pricing' })
    expect(heading).toHaveClass('text-white')
  })

  it('merges a custom className', () => {
    render(<SectionTitle title="Custom" className="mb-4" />)
    expect(screen.getByRole('heading', { name: 'Custom' }).parentElement).toHaveClass('mb-4')
  })
})

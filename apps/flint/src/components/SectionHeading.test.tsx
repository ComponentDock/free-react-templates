import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { SectionHeading } from './SectionHeading'

describe('SectionHeading', () => {
  it('renders a left-aligned heading with the brand rule', () => {
    const { container } = render(<SectionHeading title="Left aligned" />)

    expect(screen.getByRole('heading', { level: 2, name: 'Left aligned' })).toBeInTheDocument()
    expect(container.querySelector('.bg-brand')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2 }).className).not.toContain('text-center')
  })

  it('centres the heading when asked', () => {
    render(<SectionHeading title="Centred" centered />)

    expect(screen.getByRole('heading', { level: 2 }).className).toContain('text-center')
  })
})

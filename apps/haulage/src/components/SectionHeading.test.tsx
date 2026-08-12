import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SectionHeading } from './SectionHeading'

describe('SectionHeading', () => {
  it('renders the title in an h2', () => {
    render(<SectionHeading title="What We Offer" />)
    expect(screen.getByRole('heading', { level: 2, name: 'What We Offer' })).toBeInTheDocument()
  })

  it('renders the blurb when provided', () => {
    render(<SectionHeading title="Pricing" blurb="A short description." />)
    expect(screen.getByText('A short description.')).toBeInTheDocument()
  })

  it('centers the block when requested', () => {
    const { container } = render(<SectionHeading center title="FAQ" />)
    expect(container.firstChild).toHaveClass('text-center')
  })
})

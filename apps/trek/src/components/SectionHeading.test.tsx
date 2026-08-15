import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { SectionHeading } from './SectionHeading'

describe('SectionHeading', () => {
  it('renders the backdrop, label, and title centered by default', () => {
    render(<SectionHeading backdrop="Story" label="Discover Story" title="Our Story" />)

    const backdrop = screen.getByText('Story')
    expect(backdrop).toHaveAttribute('aria-hidden', 'true')
    expect(backdrop).toHaveClass('text-ghost')
    expect(screen.getByText('Discover Story')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Our Story' })).toBeInTheDocument()
  })

  it('supports the left-aligned variant', () => {
    const { container } = render(
      <SectionHeading backdrop="Story" label="Discover Story" title="Our Story" align="left" />,
    )
    expect(container.firstElementChild).toHaveClass('text-left')
    expect(screen.getByRole('heading', { level: 3, name: 'Our Story' })).toBeInTheDocument()
  })
})

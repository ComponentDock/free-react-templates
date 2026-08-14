import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { SectionHeading } from './SectionHeading'

describe('SectionHeading', () => {
  it('renders the title with an indigo underline', () => {
    const { container } = render(<SectionHeading title="Resume" />)
    expect(screen.getByRole('heading', { level: 2, name: 'Resume' })).toBeInTheDocument()
    const underline = container.querySelector('span[aria-hidden="true"]')
    expect(underline).toHaveClass('bg-brand')
  })
})

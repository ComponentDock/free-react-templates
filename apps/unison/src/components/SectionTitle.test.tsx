import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { SectionTitle } from './SectionTitle'

describe('SectionTitle', () => {
  it('renders the section heading at level 2 with the given text', () => {
    render(<SectionTitle>About Unison</SectionTitle>)
    expect(screen.getByRole('heading', { level: 2, name: 'About Unison' })).toBeInTheDocument()
  })

  it('appends extra className while keeping the base styling', () => {
    const { container } = render(<SectionTitle className="mt-8">Pricing</SectionTitle>)
    expect(container.firstChild).toHaveClass('mt-8', 'text-brand', 'font-black')
  })
})

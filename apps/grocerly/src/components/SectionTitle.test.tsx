import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { SectionTitle } from './SectionTitle'

describe('SectionTitle', () => {
  it('renders the heading text', () => {
    render(<SectionTitle>Featured Product</SectionTitle>)

    expect(screen.getByRole('heading', { name: 'Featured Product' })).toBeInTheDocument()
  })

  it('appends custom classes when provided', () => {
    const { container } = render(<SectionTitle className="text-left">From The Blog</SectionTitle>)

    expect(container.querySelector('h2')).toHaveClass('text-left')
  })
})

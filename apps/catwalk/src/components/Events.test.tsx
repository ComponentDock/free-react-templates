import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Events } from './Events'

describe('Events', () => {
  it('renders the image, the eyebrow, the heading, and descriptive paragraphs', () => {
    render(<Events />)
    expect(screen.getByText('Events')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Latest Fashion Shows' })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /runway/ })).toHaveAttribute(
      'src',
      'https://picsum.photos/seed/catwalk-events/800/600',
    )
    expect(screen.getByText(/On her way she met a copy/)).toBeInTheDocument()
    expect(screen.getByText(/insidious Copy Writers/)).toBeInTheDocument()
  })
})

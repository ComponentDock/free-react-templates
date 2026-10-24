import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders three cards with a charcoal date tile and amber meta', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Recent Blog')
    const cards = screen.getAllByRole('listitem')
    expect(cards).toHaveLength(3)
    expect(screen.getByText('12')).toBeInTheDocument()
    expect(screen.getByText('Oct')).toBeInTheDocument()
    expect(screen.getByText('Bea Alam')).toBeInTheDocument()
    expect(screen.getByText('12 comments')).toBeInTheDocument()
    expect(screen.getAllByRole('heading', { level: 3 })[0]).toHaveTextContent(
      'Biggest construction in New York, USA',
    )
    expect(screen.getAllByRole('link', { name: 'Read more' })).toHaveLength(3)
  })
})

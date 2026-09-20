import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { IconBoxes } from './IconBoxes'

describe('IconBoxes', () => {
  it('renders all four feature titles', () => {
    render(<IconBoxes />)

    expect(screen.getByRole('heading', { name: 'Learn From Experts' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Book Library & Store' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Best Course Online' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Best Industry Leaders' })).toBeInTheDocument()
  })

  it('renders feature descriptions', () => {
    render(<IconBoxes />)

    const descriptions = screen.getAllByText(/far far away, behind the word mountains/i)
    expect(descriptions.length).toBe(4)
  })

  it('renders read more links with arrows', () => {
    render(<IconBoxes />)

    const links = screen.getAllByText('read more')
    expect(links.length).toBe(4)
    links.forEach((link) => {
      expect(link.closest('a')).toHaveAttribute('href', '#')
    })
  })
})

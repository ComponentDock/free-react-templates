import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { AboutAuthors } from './AboutAuthors'

describe('AboutAuthors', () => {
  it('renders heading, text, and CTA', () => {
    render(<AboutAuthors />)
    expect(screen.getByText('Welcome to Pressline')).toBeInTheDocument()
    expect(screen.getByText('Pressline Created By Authors')).toBeInTheDocument()
    expect(screen.getByText(/passionate team of writers/)).toBeInTheDocument()
    expect(screen.getByText('View All Our Authors')).toBeInTheDocument()
  })

  it('renders author images', () => {
    render(<AboutAuthors />)
    const images = screen.getAllByAltText('Author portrait')
    expect(images).toHaveLength(2)
  })
})

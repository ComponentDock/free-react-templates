import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { AboutAuthor } from './AboutAuthor'

describe('AboutAuthor', () => {
  it('renders the author heading and bio', () => {
    render(<AboutAuthor />)
    expect(screen.getByRole('heading', { name: /Hello, I'm the Author/i })).toBeInTheDocument()
    expect(screen.getByText(/Writing has always been my passion/i)).toBeInTheDocument()
  })

  it('renders the author name and role', () => {
    render(<AboutAuthor />)
    expect(screen.getByText('Jane Smith')).toBeInTheDocument()
    expect(screen.getByText('Book Author & Publisher')).toBeInTheDocument()
  })

  it('renders the author portrait image', () => {
    render(<AboutAuthor />)
    expect(screen.getByAltText('Author portrait')).toBeInTheDocument()
  })
})

import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ArtistBio } from './ArtistBio'

describe('ArtistBio', () => {
  it('renders the section heading', () => {
    render(<ArtistBio />)
    expect(screen.getByRole('heading', { name: /Artist Bio/i })).toBeInTheDocument()
  })

  it('renders the artist name', () => {
    render(<ArtistBio />)
    const names = screen.getAllByText(/Michael Smithson/)
    expect(names.length).toBeGreaterThanOrEqual(1)
  })

  it('renders the artist image', () => {
    render(<ArtistBio />)
    expect(screen.getByRole('img', { name: /artist performing/i })).toBeInTheDocument()
  })

  it('renders bio paragraphs', () => {
    render(<ArtistBio />)
    expect(screen.getByText(/Nulla pretium tincidunt felis/)).toBeInTheDocument()
    expect(screen.getByText(/Curabitur consectetur nunc sem/)).toBeInTheDocument()
  })

  it('has a background image with overlay', () => {
    render(<ArtistBio />)
    const section = document.querySelector('[style*="background-image"]')
    expect(section).toBeInTheDocument()
  })
})

import { render, screen } from '@testing-library/react'
import { AuthorBio } from './AuthorBio'
import { describe, it, expect } from 'vitest'

describe('AuthorBio', () => {
  it('renders the author name', () => {
    render(<AuthorBio />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Franklin Henderson')
  })

  it('renders the subheading', () => {
    render(<AuthorBio />)
    expect(screen.getByText('Know More About The Author')).toBeInTheDocument()
  })

  it('renders info items', () => {
    render(<AuthorBio />)
    expect(screen.getByText(/name:/i)).toBeInTheDocument()
    expect(screen.getByText(/date of birth:/i)).toBeInTheDocument()
    expect(screen.getByText(/address:/i)).toBeInTheDocument()
    expect(screen.getByText(/email:/i)).toBeInTheDocument()
    expect(screen.getByText(/phone:/i)).toBeInTheDocument()
  })

  it('renders the view all books count', () => {
    render(<AuthorBio />)
    expect(screen.getByText('120')).toBeInTheDocument()
    expect(screen.getByText('View All Books')).toBeInTheDocument()
  })

  it('renders the author image', () => {
    render(<AuthorBio />)
    expect(screen.getByAltText('Author portrait')).toBeInTheDocument()
  })
})

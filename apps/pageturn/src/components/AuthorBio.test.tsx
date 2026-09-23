import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { AuthorBio } from './AuthorBio'

describe('AuthorBio', () => {
  it('renders author name heading', () => {
    render(<AuthorBio />)

    expect(screen.getAllByText('Franklin Henderson').length).toBeGreaterThanOrEqual(1)
  })

  it('renders author details', () => {
    render(<AuthorBio />)

    expect(screen.getByText('Name:')).toBeInTheDocument()
    expect(screen.getAllByText('Franklin Henderson').length).toBe(2)
    expect(screen.getByText('Date of Birth:')).toBeInTheDocument()
    expect(screen.getByText('Email:')).toBeInTheDocument()
    expect(screen.getByText('Phone:')).toBeInTheDocument()
  })

  it('renders View All Books button', () => {
    render(<AuthorBio />)

    expect(screen.getByRole('button', { name: 'View All Books' })).toBeInTheDocument()
  })

  it('displays author portrait', () => {
    render(<AuthorBio />)

    expect(screen.getByRole('img', { name: 'Franklin Henderson' })).toHaveAttribute(
      'src',
      expect.stringContaining('picsum.photos'),
    )
  })
})

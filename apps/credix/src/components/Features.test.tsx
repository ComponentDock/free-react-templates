import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('renders the heading card and image cards', () => {
    render(<Features />)
    expect(screen.getByRole('heading', { name: 'Our Loans' })).toBeInTheDocument()
    expect(screen.getByText('We take care of you')).toBeInTheDocument()
    expect(screen.getByText('No documents needed')).toBeInTheDocument()
    expect(screen.getByText('Fast & easy loans')).toBeInTheDocument()
  })

  it('renders the Discover button', () => {
    render(<Features />)
    expect(screen.getByRole('link', { name: 'Discover' })).toBeInTheDocument()
  })
})

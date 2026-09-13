import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ClientReviews } from './ClientReviews'

describe('ClientReviews', () => {
  it('renders section heading', () => {
    render(<ClientReviews />)
    expect(screen.getByText('What they said')).toBeInTheDocument()
  })

  it('renders all four review cards', () => {
    render(<ClientReviews />)
    expect(screen.getByText(/Sarah Mitchell/)).toBeInTheDocument()
    expect(screen.getByText(/James Rodriguez/)).toBeInTheDocument()
    expect(screen.getByText(/Emily Chen/)).toBeInTheDocument()
    expect(screen.getByText(/Michael Brown/)).toBeInTheDocument()
  })

  it('renders review text excerpts', () => {
    render(<ClientReviews />)
    expect(screen.getByText(/absolutely magical experience/)).toBeInTheDocument()
    expect(screen.getByText(/honeymoon trip/)).toBeInTheDocument()
  })
})

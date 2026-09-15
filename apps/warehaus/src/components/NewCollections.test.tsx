import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { NewCollections } from '../components/NewCollections'

describe('NewCollections', () => {
  it('renders women collection title', () => {
    render(<NewCollections />)
    expect(screen.getByText(/New Women's Clothing/)).toBeInTheDocument()
  })

  it('renders men collection title', () => {
    render(<NewCollections />)
    expect(screen.getByText(/New Men's Clothing/)).toBeInTheDocument()
  })

  it('renders collection images', () => {
    render(<NewCollections />)
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(2)
  })
})

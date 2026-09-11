import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Gallery } from './Gallery'

describe('Gallery', () => {
  it('renders the section heading', () => {
    render(<Gallery />)
    expect(screen.getByRole('heading', { name: 'My Photography' })).toBeInTheDocument()
  })

  it('renders 10 gallery images', () => {
    render(<Gallery />)
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(10)
  })
})

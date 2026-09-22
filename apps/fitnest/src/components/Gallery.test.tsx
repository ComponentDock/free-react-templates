import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Gallery } from './Gallery'

describe('Gallery', () => {
  it('renders the heading and eight studio photos', () => {
    render(<Gallery />)
    expect(screen.getByRole('heading', { name: 'Our Studio' })).toBeInTheDocument()
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(8)
    expect(images[0]).toHaveAttribute('alt', 'Studio photo 1')
  })
})

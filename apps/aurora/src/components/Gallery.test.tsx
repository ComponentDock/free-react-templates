import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Gallery } from './Gallery'

describe('Gallery', () => {
  it('renders the heading and six lookbook images', () => {
    render(<Gallery />)
    expect(screen.getByRole('heading', { name: 'Lookbook' })).toBeInTheDocument()
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(6)
    expect(images[0]).toHaveAttribute('alt', 'Lookbook photo 1')
  })
})

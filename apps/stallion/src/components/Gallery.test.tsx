import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Gallery } from './Gallery'

describe('Gallery', () => {
  it('renders the heading', () => {
    render(<Gallery />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(/Image Gallery/i)
  })

  it('renders all gallery images', () => {
    render(<Gallery />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBe(6)
  })
})

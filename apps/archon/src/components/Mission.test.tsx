import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Mission } from './Mission'

describe('Mission', () => {
  it('renders two mission blocks with images and an Our Mission button', () => {
    render(<Mission />)

    expect(screen.getAllByText('Our Mission').length).toBeGreaterThanOrEqual(2)
    expect(
      screen.getByRole('heading', { level: 2, name: 'Structures that speak to the sky' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        level: 2,
        name: 'A practice built on craft and curiosity',
      }),
    ).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /curved architecture/i })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /building facade/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Our Mission' })).toBeInTheDocument()
  })

  it('renders the counters with values and labels', () => {
    render(<Mission />)

    expect(screen.getByText('30,210')).toBeInTheDocument()
    expect(screen.getByText('9,102')).toBeInTheDocument()
    expect(screen.getByText('40,244')).toBeInTheDocument()
    expect(screen.getByText('Share')).toBeInTheDocument()
    expect(screen.getByText('Likes')).toBeInTheDocument()
    expect(screen.getByText('Love')).toBeInTheDocument()
  })
})

import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Gallery } from './Gallery'

describe('Gallery', () => {
  it('renders the heading and seven gallery images', () => {
    render(<Gallery />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Latest Player Showcase' }),
    ).toBeInTheDocument()

    const images = screen.getAllByRole('img', { name: /gallery/i })
    expect(images).toHaveLength(7)
  })

  it('renders the hover caption on every gallery item', () => {
    render(<Gallery />)

    expect(screen.getAllByText('Lead Trainer')).toHaveLength(7)
    expect(screen.getAllByText('Multi Plus Gym, USA')).toHaveLength(7)
  })
})

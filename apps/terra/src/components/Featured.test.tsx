import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Featured } from './Featured'

const featuredNames = [
  'Massage',
  'Tea Therapy',
  'Hand & Foot Spa',
  'Body Treatments',
  'Facials',
  'Waxing',
]

describe('Featured', () => {
  it('shows the heading and six featured services', () => {
    render(<Featured />)
    expect(
      screen.getByRole('heading', { name: 'Discover the Best Beauty Salon Center' }),
    ).toBeInTheDocument()

    for (const name of featuredNames) {
      expect(screen.getByRole('heading', { name })).toBeInTheDocument()
    }
  })
})

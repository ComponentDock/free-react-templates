import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Intro } from './Intro'

describe('Intro', () => {
  it('shows the section heading', () => {
    render(<Intro />)
    expect(
      screen.getByRole('heading', { name: 'Benefits of Doing Spa & Massage' }),
    ).toBeInTheDocument()
  })

  it('renders the three intro cards', () => {
    render(<Intro />)
    for (const title of ['Book Your Treatment', 'Great Gift Packages', 'Special Offer & Deal']) {
      expect(screen.getByRole('heading', { name: title })).toBeInTheDocument()
    }
  })
})

import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Intro } from './Intro'

describe('Intro', () => {
  it('shows the three intro service blocks with icons, titles, and copy', () => {
    render(<Intro />)

    for (const title of ['Dog Walking', 'Pet Daycare', 'Pet Grooming']) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }
    expect(screen.getByText(/Leisurely walks around the neighborhood/)).toBeInTheDocument()
    expect(screen.getByText(/Safe, supervised play all day/)).toBeInTheDocument()
    expect(screen.getByText(/Baths, trims, and brush-outs/)).toBeInTheDocument()
  })
})

import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the reviewer name, rating, quote, and customer avatars', () => {
    render(<Testimonials />)

    expect(screen.getByRole('heading', { level: 3, name: 'Fanny Spencer' })).toBeInTheDocument()
    expect(screen.getByText('Rated 5 out of 5')).toBeInTheDocument()
    expect(
      screen.getByText(/As conscious travelers we must always be concerned about our planet/),
    ).toBeInTheDocument()

    for (let index = 1; index <= 4; index += 1) {
      expect(screen.getByRole('img', { name: `Customer avatar ${index}` })).toBeInTheDocument()
    }
  })
})

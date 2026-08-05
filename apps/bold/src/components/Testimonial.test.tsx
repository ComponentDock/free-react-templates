import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonial } from './Testimonial'

describe('Testimonial', () => {
  it('renders the heading, quote, and reviewer', () => {
    render(<Testimonial />)

    expect(
      screen.getByRole('heading', {
        level: 2,
        name: 'Join over 1M+ people who enjoy using our app',
      }),
    ).toBeInTheDocument()

    expect(
      screen.getByText(/behind the word mountains, far from the countries/),
    ).toBeInTheDocument()

    expect(screen.getByRole('heading', { level: 3, name: 'Kayla Bryant' })).toBeInTheDocument()
    expect(screen.getByText('Social Media Manager')).toBeInTheDocument()
  })
})

import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Satisfaction } from './Satisfaction'

describe('Satisfaction', () => {
  it('renders the title, three bullets and the testimonial', () => {
    render(<Satisfaction />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Aim Client Satisfaction' }),
    ).toBeInTheDocument()
    for (const title of ['Easy To Use', '24/7 Support', 'Well Documentation']) {
      expect(screen.getByRole('heading', { level: 4, name: title })).toBeInTheDocument()
    }

    expect(screen.getByText('Mr. Jonathon Smith')).toBeInTheDocument()
    expect(screen.getByText('CEO, Hazrat Group')).toBeInTheDocument()
    expect(screen.getByRole('blockquote')).toBeInTheDocument()
  })
})

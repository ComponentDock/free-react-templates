import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Groomers } from './Groomers'

describe('Groomers', () => {
  it('shows the heading and the four groomer cards with names and roles', () => {
    render(<Groomers />)

    expect(screen.getByRole('heading', { name: 'Our Groomers' })).toBeInTheDocument()
    for (const name of ['Lloyd Wilson', 'Rachel Parker', 'Ian Smith', 'Alicia Henderson']) {
      expect(screen.getByRole('heading', { name })).toBeInTheDocument()
    }
    expect(screen.getByText('CEO, Founder')).toBeInTheDocument()
    expect(screen.getAllByText('Groomer')).toHaveLength(2)
  })
})

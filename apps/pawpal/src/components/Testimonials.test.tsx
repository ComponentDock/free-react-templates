import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the heading and at least two customer quote cards with names', () => {
    render(<Testimonials />)
    expect(
      screen.getByRole('heading', { level: 2, name: 'What Pet Parents Say' }),
    ).toBeInTheDocument()

    for (const name of ['Sarah Mitchell', 'Jessica Thompson', 'Michael Park', 'David Martinez']) {
      expect(screen.getByText(name)).toBeInTheDocument()
    }

    expect(screen.getByText(/anxious rescue dog/)).toBeInTheDocument()
    expect(screen.getByText(/daily report cards/)).toBeInTheDocument()
  })
})

import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the heading and four service cards', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { name: /Our Services/i })).toBeInTheDocument()
    for (const title of ['24/7 Car Support', 'Lots of location', 'Reservation', 'Rental Cars']) {
      expect(screen.getByRole('heading', { name: title })).toBeInTheDocument()
    }
  })
})

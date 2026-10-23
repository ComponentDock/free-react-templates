import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Brands } from './Brands'

describe('Brands', () => {
  it('renders the heading and the brand logo strip', () => {
    render(<Brands />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'What Our Clients Say About Us' }),
    ).toBeInTheDocument()
    expect(screen.getAllByRole('img', { hidden: true }).length).toBeGreaterThanOrEqual(4)
  })
})

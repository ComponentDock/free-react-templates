import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('shows the heading and a quote with author and role', () => {
    render(<Testimonials />)

    expect(
      screen.getByRole('heading', { level: 2, name: /Our Customers Feedback/ }),
    ).toBeInTheDocument()
    expect(screen.getByText(/Separated they live in Bookmarksgrove/)).toBeInTheDocument()
    expect(screen.getByText('James Anderson')).toBeInTheDocument()
    expect(screen.getByText('Facebook, Product Lead')).toBeInTheDocument()
  })
})

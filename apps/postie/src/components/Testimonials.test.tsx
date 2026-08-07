import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the heading and three attributed quotes', () => {
    render(<Testimonials />)

    expect(
      screen.getByRole('heading', { level: 2, name: /1 Million\+ Users Can't Be Wrong/ }),
    ).toBeInTheDocument()

    for (const name of ['Jordan Lee', 'Sam Rivera', 'Taylor Kim']) {
      expect(screen.getByText(name)).toBeInTheDocument()
    }
  })
})

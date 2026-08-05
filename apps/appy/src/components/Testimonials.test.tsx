import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the heading, quote, and reviewer', () => {
    render(<Testimonials />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Our Clients Love Us' }),
    ).toBeInTheDocument()

    expect(
      screen.getByText(/Appy gave our product the landing page it deserved/),
    ).toBeInTheDocument()

    expect(screen.getByRole('heading', { level: 3, name: 'Ashekur Rahman' })).toBeInTheDocument()
    expect(screen.getByText('Art Director')).toBeInTheDocument()
  })
})

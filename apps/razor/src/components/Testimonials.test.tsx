import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('shows the testimonials heading and quote cards', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { name: 'People Say About Our Barber' })).toBeInTheDocument()
    expect(screen.getByText('Roger Scott')).toBeInTheDocument()
    expect(screen.getAllByRole('figure')).toHaveLength(3)
  })
})

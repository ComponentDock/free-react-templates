import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the heading, quote, and reviewer details', () => {
    render(<Testimonials />)

    expect(screen.getByRole('heading', { level: 2, name: 'Testimonials' })).toBeInTheDocument()

    expect(screen.getByText(/best computer accessory for your laptop/)).toBeInTheDocument()

    expect(screen.getByText('Mark Alviro Wiens')).toBeInTheDocument()
    expect(screen.getByText('CEO at Google')).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'Mark Alviro Wiens' })).toBeInTheDocument()
  })
})

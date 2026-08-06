import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the heading and a quote attributed to Mark Alviro Wiens', () => {
    render(<Testimonials />)

    expect(screen.getByRole('heading', { name: 'Feedback from Customers' })).toBeInTheDocument()
    expect(screen.getByText('Mark Alviro Wiens')).toBeInTheDocument()
    expect(screen.getAllByRole('img', { name: '5 out of 5 stars' }).length).toBe(3)
    expect(screen.getAllByRole('blockquote').length).toBe(3)
  })
})

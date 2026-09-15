import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the heading', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { name: 'Our satisfied customer says' })).toBeInTheDocument()
  })

  it('renders at least 3 testimonial cards with names', () => {
    render(<Testimonials />)
    const names = ['John Smith', 'Sarah Johnson', 'Mike Anderson', 'Emily Davis']
    for (const name of names) {
      expect(screen.getByText(name)).toBeInTheDocument()
    }
  })

  it('renders role for each testimonial', () => {
    render(<Testimonials />)
    expect(screen.getByText('Businessman')).toBeInTheDocument()
    expect(screen.getByText('Housewife')).toBeInTheDocument()
    expect(screen.getByText('Chef')).toBeInTheDocument()
    expect(screen.getByText('Nutritionist')).toBeInTheDocument()
  })
})

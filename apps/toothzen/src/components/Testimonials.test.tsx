import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

it('renders the testimonials heading', () => {
  render(<Testimonials />)
  expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('What Our Clients Say')
})

it('renders all three testimonial cards', () => {
  render(<Testimonials />)
  expect(screen.getByText('Client One')).toBeInTheDocument()
  expect(screen.getByText('Client Two')).toBeInTheDocument()
  expect(screen.getByText('Client Three')).toBeInTheDocument()
})

it('renders testimonial quotes', () => {
  render(<Testimonials />)
  expect(screen.getByText(/behind the word mountains/i)).toBeInTheDocument()
})

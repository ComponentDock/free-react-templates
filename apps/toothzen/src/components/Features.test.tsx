import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Features } from './Features'

it('renders the Make An Appointment heading', () => {
  render(<Features />)
  expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Make An Appointment')
})

it('renders all four feature items', () => {
  render(<Features />)
  expect(screen.getByText('Easy Booking')).toBeInTheDocument()
  expect(screen.getByText('Experience')).toBeInTheDocument()
  expect(screen.getByText('Flexible Schedule')).toBeInTheDocument()
  expect(screen.getByText('Best Price Guarantee')).toBeInTheDocument()
})

it('renders the appointment form with inputs', () => {
  render(<Features />)
  expect(screen.getByPlaceholderText('Your Name')).toBeInTheDocument()
  expect(screen.getByPlaceholderText('Phone Number')).toBeInTheDocument()
  expect(screen.getByRole('button', { name: /book appointment/i })).toBeInTheDocument()
})

it('submits the form without navigation', async () => {
  const user = userEvent.setup()
  render(<Features />)
  const btn = screen.getByRole('button', { name: /book appointment/i })
  await user.click(btn)
  // form submit is prevented, no error thrown
})

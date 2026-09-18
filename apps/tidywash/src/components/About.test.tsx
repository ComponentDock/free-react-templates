import { expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { About } from './About'

it('renders about heading and form', () => {
  render(<About />)
  expect(screen.getByText('About Company')).toBeInTheDocument()
  expect(screen.getByText('Most Awarded Cleaning Company Since 2000')).toBeInTheDocument()
  expect(screen.getByText('Book A Service')).toBeInTheDocument()
})

it('allows filling all form fields and submitting', async () => {
  const user = userEvent.setup()
  render(<About />)
  await user.type(screen.getByPlaceholderText('First Name'), 'John')
  await user.type(screen.getByPlaceholderText('Last Name'), 'Doe')
  await user.type(screen.getByPlaceholderText('Phone'), '555-1234')
  await user.type(screen.getByPlaceholderText('Date'), '2025-01-15')
  await user.type(screen.getByPlaceholderText('Time'), '10:00')
  await user.selectOptions(screen.getByLabelText('Service'), 'Residential')
  expect(screen.getByDisplayValue('John')).toBeInTheDocument()
  expect(screen.getByDisplayValue('Doe')).toBeInTheDocument()
  expect(screen.getByDisplayValue('555-1234')).toBeInTheDocument()
  expect(screen.getByDisplayValue('2025-01-15')).toBeInTheDocument()
  expect(screen.getByDisplayValue('10:00')).toBeInTheDocument()
  expect(screen.getByDisplayValue('Residential')).toBeInTheDocument()
  await user.click(screen.getByRole('button', { name: 'Book Now' }))
})

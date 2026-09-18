import { render, screen } from '@testing-library/react'
import { Services } from './Services'

it('renders all four service cards', () => {
  render(<Services />)
  expect(screen.getByText('Emergency Service')).toBeInTheDocument()
  expect(screen.getByText('Qualified Dentist')).toBeInTheDocument()
  expect(screen.getByText('General Treatment')).toBeInTheDocument()
  expect(screen.getByText('Online Appointment')).toBeInTheDocument()
})

it('renders service descriptions', () => {
  render(<Services />)
  const descriptions = screen.getAllByText(/A small river named Duden/)
  expect(descriptions.length).toBeGreaterThanOrEqual(4)
})

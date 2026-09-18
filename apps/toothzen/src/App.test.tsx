import { render, screen } from '@testing-library/react'
import { App } from './App'

it('renders the full page with all sections', () => {
  render(<App />)

  expect(screen.getByRole('navigation', { name: /main navigation/i })).toBeInTheDocument()
  expect(screen.getAllByText('Toothzen').length).toBeGreaterThanOrEqual(1)
  expect(screen.getByText(/Achieve Desired Perfect Smile/i)).toBeInTheDocument()
  expect(screen.getByText(/Emergency Service/i)).toBeInTheDocument()
  expect(screen.getAllByText(/Make An Appointment/i).length).toBeGreaterThanOrEqual(1)
  expect(screen.getByText(/We Are Toothzen A Dental Clinic/i)).toBeInTheDocument()
  expect(screen.getByText(/Our Qualified Dentist/i)).toBeInTheDocument()
  expect(screen.getByText(/Year Experience/i)).toBeInTheDocument()
  expect(screen.getByText(/What Our Clients Say/i)).toBeInTheDocument()
  expect(screen.getByText(/Recent Posts/i)).toBeInTheDocument()
  expect(screen.getByText(/Subscribe to our Newsletter/i)).toBeInTheDocument()
  expect(screen.getByText(/Component Dock/i)).toBeInTheDocument()
})

it('sets document title on mount', () => {
  render(<App />)
  expect(document.title).toBe('Toothzen — Dental Clinic Template')
})

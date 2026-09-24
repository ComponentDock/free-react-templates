import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('renders all sections', () => {
    render(<App />)

    expect(screen.getAllByText(/Medprime/).length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText(/Bringing health/)).toBeInTheDocument()
    expect(screen.getByText(/Welcome to/)).toBeInTheDocument()
    expect(screen.getAllByText(/Departments/).length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText(/Our Doctors/).length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText(/Book Appointment/).length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText(/Quality Health/).length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText(/Emergency Call/)).toBeInTheDocument()
    expect(screen.getByText(/Component Dock/)).toBeInTheDocument()
  })
})

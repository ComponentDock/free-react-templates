import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('renders all sections', () => {
    render(<App />)

    expect(screen.getAllByText(/Medflow/).length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText(/Bringing health/)).toBeInTheDocument()
    expect(screen.getByText(/Welcome To/)).toBeInTheDocument()
    expect(screen.getAllByText('Departments').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText(/Our Doctors/)).toBeInTheDocument()
    expect(screen.getByText(/Book an/)).toBeInTheDocument()
    expect(screen.getByText(/Quality Health/)).toBeInTheDocument()
    expect(screen.getByText(/Emergency Medical Care/)).toBeInTheDocument()
    expect(screen.getByText(/Component Dock/)).toBeInTheDocument()
  })
})

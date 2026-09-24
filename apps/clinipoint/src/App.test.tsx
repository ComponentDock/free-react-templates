import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('renders all sections', () => {
    render(<App />)
    expect(screen.getAllByText('Clinipoint').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText(/We provide top medical services/)).toBeInTheDocument()
    expect(screen.getByText(/Our Services/)).toBeInTheDocument()
    expect(screen.getByText(/Our Doctors/)).toBeInTheDocument()
    expect(screen.getByText(/Clients Testimonials/)).toBeInTheDocument()
    expect(screen.getAllByText(/Book an Appointment/).length).toBeGreaterThanOrEqual(1)
  })
})

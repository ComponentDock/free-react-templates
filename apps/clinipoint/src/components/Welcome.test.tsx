import { render, screen } from '@testing-library/react'
import Welcome from './Welcome'

describe('Welcome', () => {
  it('renders heading', () => {
    render(<Welcome />)
    expect(screen.getByText('Welcome to Clinipoint Health Center')).toBeInTheDocument()
  })

  it('renders specialty list', () => {
    render(<Welcome />)
    expect(screen.getByText('Cardiovascular Diseases')).toBeInTheDocument()
    expect(screen.getByText('Neonatology')).toBeInTheDocument()
    expect(screen.getByText('Ophthalmology')).toBeInTheDocument()
    expect(screen.getByText('Toracic Surgery')).toBeInTheDocument()
    expect(screen.getByText('Gastroenterology')).toBeInTheDocument()
    expect(screen.getByText('Plastic Surgery')).toBeInTheDocument()
    expect(screen.getByText('Neurology')).toBeInTheDocument()
    expect(screen.getByText('Orthopedics')).toBeInTheDocument()
  })

  it('renders emergency card', () => {
    render(<Welcome />)
    expect(screen.getByText('For Emergencies')).toBeInTheDocument()
    expect(screen.getByText(/Our emergency department is open 24/)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Call Now/ })).toBeInTheDocument()
  })

  it('renders doctors card', () => {
    render(<Welcome />)
    expect(screen.getByText('The Doctors')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Meet Our Team/ })).toBeInTheDocument()
  })

  it('renders appointment card', () => {
    render(<Welcome />)
    expect(screen.getByText('Book an Appointment')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Your Name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Phone Number')).toBeInTheDocument()
  })
})

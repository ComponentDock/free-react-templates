import { render, screen } from '@testing-library/react'
import Footer from './Footer'

describe('Footer', () => {
  it('renders logo', () => {
    render(<Footer />)
    expect(screen.getByText('Clinipoint')).toBeInTheDocument()
  })

  it('renders Quick Links section', () => {
    render(<Footer />)
    expect(screen.getByText('Quick Links')).toBeInTheDocument()
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Services')).toBeInTheDocument()
    expect(screen.getByText('Doctors')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
    expect(screen.getByText('Appointment')).toBeInTheDocument()
  })

  it('renders Contact Info section', () => {
    render(<Footer />)
    expect(screen.getByText('Contact Info')).toBeInTheDocument()
    expect(screen.getByText('+1 234 567 890')).toBeInTheDocument()
    expect(screen.getByText('info@clinipoint.com')).toBeInTheDocument()
  })

  it('renders Component Dock link', () => {
    render(<Footer />)
    const link = screen.getByText('Component Dock')
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('renders copyright year', () => {
    render(<Footer />)
    const year = new Date().getFullYear().toString()
    expect(screen.getByText(new RegExp(`© ${year}`))).toBeInTheDocument()
  })
})

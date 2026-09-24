import { render, screen } from '@testing-library/react'
import Doctors from './Doctors'

describe('Doctors', () => {
  it('renders section heading', () => {
    render(<Doctors />)

    expect(screen.getByText('Our Doctors')).toBeInTheDocument()
    expect(screen.getByText(/experienced healthcare professionals/)).toBeInTheDocument()
  })

  it('renders all doctor cards', () => {
    render(<Doctors />)

    expect(screen.getByText('Dr. Sarah Mitchell')).toBeInTheDocument()
    expect(screen.getByText('Dr. James Wilson')).toBeInTheDocument()
    expect(screen.getByText('Dr. Emily Chen')).toBeInTheDocument()
  })

  it('renders specialties', () => {
    render(<Doctors />)

    expect(screen.getByText('Dentist')).toBeInTheDocument()
    expect(screen.getByText('Cardiologist')).toBeInTheDocument()
    expect(screen.getByText('ENT Specialist')).toBeInTheDocument()
  })

  it('renders social links for each doctor', () => {
    render(<Doctors />)

    const facebookLinks = screen.getAllByLabelText(/on Facebook/)
    expect(facebookLinks).toHaveLength(3)

    const linkedinLinks = screen.getAllByLabelText(/on LinkedIn/)
    expect(linkedinLinks).toHaveLength(3)

    const twitterLinks = screen.getAllByLabelText(/on Twitter/)
    expect(twitterLinks).toHaveLength(3)
  })

  it('renders doctor images', () => {
    render(<Doctors />)

    expect(screen.getByAltText('Portrait of Dr. Sarah Mitchell')).toBeInTheDocument()
    expect(screen.getByAltText('Portrait of Dr. James Wilson')).toBeInTheDocument()
    expect(screen.getByAltText('Portrait of Dr. Emily Chen')).toBeInTheDocument()
  })
})

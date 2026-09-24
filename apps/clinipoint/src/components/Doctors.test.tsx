import { render, screen } from '@testing-library/react'
import Doctors from './Doctors'

describe('Doctors', () => {
  it('renders heading', () => {
    render(<Doctors />)
    expect(screen.getByText('Our Doctors')).toBeInTheDocument()
  })

  it('renders 4 doctor names', () => {
    render(<Doctors />)
    expect(screen.getByText('Dr. Melissa Smith')).toBeInTheDocument()
    expect(screen.getByText('Dr. Josh Henderson')).toBeInTheDocument()
    expect(screen.getByText('Dr. Christinne Jones')).toBeInTheDocument()
    expect(screen.getByText('Dr. William Stan')).toBeInTheDocument()
  })

  it('renders specialties', () => {
    render(<Doctors />)
    expect(screen.getByText('Cardiologist')).toBeInTheDocument()
    expect(screen.getByText('Plastic Surgeon')).toBeInTheDocument()
    expect(screen.getByText('Pediatrist')).toBeInTheDocument()
    expect(screen.getByText('General Practitioner')).toBeInTheDocument()
  })

  it('renders social icons', () => {
    render(<Doctors />)
    const twitterLinks = screen.getAllByLabelText('Twitter')
    const facebookLinks = screen.getAllByLabelText('Facebook')
    const linkedinLinks = screen.getAllByLabelText('LinkedIn')
    expect(twitterLinks.length).toBe(4)
    expect(facebookLinks.length).toBe(4)
    expect(linkedinLinks.length).toBe(4)
  })
})

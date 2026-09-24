import { render, screen } from '@testing-library/react'
import Doctors from './Doctors'

describe('Doctors', () => {
  it('renders section heading', () => {
    render(<Doctors />)

    expect(screen.getByText('Our Doctors')).toBeInTheDocument()
    expect(screen.getByText('Meet Our Specialists')).toBeInTheDocument()
  })

  it('renders all doctor cards', () => {
    render(<Doctors />)

    expect(screen.getByText('Dr. Sarah Mitchell')).toBeInTheDocument()
    expect(screen.getByText('Dr. James Cooper')).toBeInTheDocument()
    expect(screen.getByText('Dr. Emily Chen')).toBeInTheDocument()
  })

  it('renders specialties', () => {
    render(<Doctors />)

    expect(screen.getByText('Cardiologist')).toBeInTheDocument()
    expect(screen.getByText('Neurologist')).toBeInTheDocument()
    expect(screen.getByText('Ophthalmologist')).toBeInTheDocument()
  })

  it('renders social links for each doctor', () => {
    render(<Doctors />)

    const facebookLinks = screen.getAllByLabelText(/on Facebook/)
    expect(facebookLinks).toHaveLength(3)

    const twitterLinks = screen.getAllByLabelText(/on Twitter/)
    expect(twitterLinks).toHaveLength(3)

    const instagramLinks = screen.getAllByLabelText(/on Instagram/)
    expect(instagramLinks).toHaveLength(3)
  })

  it('renders doctor images', () => {
    render(<Doctors />)

    expect(screen.getByAltText('Dr. Sarah Mitchell')).toBeInTheDocument()
    expect(screen.getByAltText('Dr. James Cooper')).toBeInTheDocument()
    expect(screen.getByAltText('Dr. Emily Chen')).toBeInTheDocument()
  })
})

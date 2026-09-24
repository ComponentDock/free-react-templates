import { render, screen } from '@testing-library/react'
import Departments from './Departments'

describe('Departments', () => {
  it('renders section heading', () => {
    render(<Departments />)

    expect(screen.getByText('Our Departments')).toBeInTheDocument()
    expect(screen.getByText('Quality Healthcare Services')).toBeInTheDocument()
  })

  it('renders all department cards', () => {
    render(<Departments />)

    expect(screen.getByText('Cardiology')).toBeInTheDocument()
    expect(screen.getByText('Neurology')).toBeInTheDocument()
    expect(screen.getByText('Ophthalmology')).toBeInTheDocument()
    expect(screen.getByText('Orthopedics')).toBeInTheDocument()
    expect(screen.getByText('General Medicine')).toBeInTheDocument()
    expect(screen.getByText('Pediatrics')).toBeInTheDocument()
  })

  it('renders department descriptions', () => {
    render(<Departments />)

    expect(screen.getByText(/Heart health diagnostics/)).toBeInTheDocument()
    expect(screen.getByText(/Expert care for neurological/)).toBeInTheDocument()
    expect(screen.getByText(/Complete eye care/)).toBeInTheDocument()
  })

  it('renders six department cards', () => {
    const { container } = render(<Departments />)

    const cards = container.querySelectorAll('.bg-white.rounded-lg')
    expect(cards).toHaveLength(6)
  })
})

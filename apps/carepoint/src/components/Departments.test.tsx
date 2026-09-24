import { render, screen } from '@testing-library/react'
import { Departments } from './Departments'

describe('Departments', () => {
  it('renders the section heading', () => {
    render(<Departments />)
    expect(screen.getByText('Our Medical Departments')).toBeInTheDocument()
  })

  it('renders all department cards', () => {
    render(<Departments />)
    expect(screen.getByText('Plastic Surgery')).toBeInTheDocument()
    expect(screen.getByText('Gastroenterology')).toBeInTheDocument()
    expect(screen.getByText('Dentistry')).toBeInTheDocument()
  })

  it('renders doctor names', () => {
    render(<Departments />)
    expect(screen.getByText('Dr. James Smith')).toBeInTheDocument()
    expect(screen.getByText('Dr. Gunter Roscoe')).toBeInTheDocument()
    expect(screen.getByText('Dr. Maria Williams')).toBeInTheDocument()
  })

  it('renders the Read More card', () => {
    render(<Departments />)
    expect(screen.getByText('Read More')).toBeInTheDocument()
  })

  it('renders department images with alt text', () => {
    render(<Departments />)
    expect(screen.getByAltText('Plastic Surgery')).toBeInTheDocument()
    expect(screen.getByAltText('Gastroenterology')).toBeInTheDocument()
    expect(screen.getByAltText('Dentistry')).toBeInTheDocument()
  })
})

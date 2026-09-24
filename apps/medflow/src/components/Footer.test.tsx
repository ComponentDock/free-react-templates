import { render, screen } from '@testing-library/react'
import Footer from './Footer'

describe('Footer', () => {
  it('renders logo and description', () => {
    render(<Footer />)

    expect(screen.getByText('Medflow')).toBeInTheDocument()
    expect(screen.getByText(/quality healthcare services/)).toBeInTheDocument()
  })

  it('renders departments list', () => {
    render(<Footer />)

    expect(screen.getByText('Our Departments')).toBeInTheDocument()
    expect(screen.getByText('Births')).toBeInTheDocument()
    expect(screen.getByText('Cardiology')).toBeInTheDocument()
    expect(screen.getByText('Neurology')).toBeInTheDocument()
  })

  it('renders hours', () => {
    render(<Footer />)

    expect(screen.getByText(/Available/)).toBeInTheDocument()
    expect(screen.getByText('Monday - Friday')).toBeInTheDocument()
    expect(screen.getAllByText('8.00 - 18.00').length).toBe(2)
  })

  it('renders Component Dock link', () => {
    render(<Footer />)

    const link = screen.getByText('Component Dock')
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('renders social links', () => {
    render(<Footer />)

    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
  })
})

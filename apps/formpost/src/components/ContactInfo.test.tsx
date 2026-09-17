import { render, screen } from '@testing-library/react'
import { ContactInfo } from './ContactInfo'

describe('ContactInfo', () => {
  it('displays three contact items', () => {
    render(<ContactInfo />)
    expect(screen.getByText(/address/i)).toBeInTheDocument()
    expect(screen.getByText(/phone/i)).toBeInTheDocument()
    expect(screen.getByText(/email/i)).toBeInTheDocument()
  })

  it('shows the address value', () => {
    render(<ContactInfo />)
    expect(screen.getByText(/198 west 21th street/i)).toBeInTheDocument()
  })

  it('shows the phone value', () => {
    render(<ContactInfo />)
    expect(screen.getByText(/\+ 1235 2355 98/)).toBeInTheDocument()
  })

  it('shows the email value', () => {
    render(<ContactInfo />)
    expect(screen.getByText(/info@yoursite\.com/)).toBeInTheDocument()
  })

  it('renders three icons', () => {
    const { container } = render(<ContactInfo />)
    const icons = container.querySelectorAll('[aria-hidden="true"]')
    expect(icons.length).toBe(3)
  })
})

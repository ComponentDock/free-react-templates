import { render, screen } from '@testing-library/react'
import { ContactInfo } from './ContactInfo'

describe('ContactInfo', () => {
  it('renders the Contact us heading', () => {
    render(<ContactInfo />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Contact us')
  })

  it('displays the address', () => {
    render(<ContactInfo />)
    expect(screen.getByText('ADDRESS:')).toBeInTheDocument()
    expect(
      screen.getByText('198 West 21th Street, Suite 721 New York NY 10016'),
    ).toBeInTheDocument()
  })

  it('displays the phone number', () => {
    render(<ContactInfo />)
    expect(screen.getByText('PHONE:')).toBeInTheDocument()
    expect(screen.getByText('+ 1235 2355 98')).toBeInTheDocument()
  })

  it('displays the email', () => {
    render(<ContactInfo />)
    expect(screen.getByText('EMAIL:')).toBeInTheDocument()
    expect(screen.getByText('info@yoursite.com')).toBeInTheDocument()
  })

  it('displays the website', () => {
    render(<ContactInfo />)
    expect(screen.getByText('WEBSITE:')).toBeInTheDocument()
    expect(screen.getByText('yoursite.com')).toBeInTheDocument()
  })

  it('renders icons for each contact item', () => {
    const { container } = render(<ContactInfo />)
    const icons = container.querySelectorAll('svg')
    expect(icons.length).toBe(4)
  })
})

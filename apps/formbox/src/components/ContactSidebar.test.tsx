import { render, screen } from '@testing-library/react'
import { ContactSidebar } from './ContactSidebar'

describe('ContactSidebar', () => {
  it('renders the contact information heading', () => {
    render(<ContactSidebar />)
    expect(screen.getByRole('heading', { name: /contact information/i })).toBeInTheDocument()
  })

  it('renders the description paragraph', () => {
    render(<ContactSidebar />)
    expect(screen.getByText(/lorem ipsum dolor sit amet/i)).toBeInTheDocument()
  })

  it('displays the address', () => {
    render(<ContactSidebar />)
    expect(screen.getByText(/9757 aspen lane/i)).toBeInTheDocument()
  })

  it('displays the phone number', () => {
    render(<ContactSidebar />)
    expect(screen.getByText(/\+1 \(291\) 939 9321/)).toBeInTheDocument()
  })

  it('displays the email address', () => {
    render(<ContactSidebar />)
    expect(screen.getByText(/info@mywebsite\.com/)).toBeInTheDocument()
  })

  it('renders three icons', () => {
    const { container } = render(<ContactSidebar />)
    const icons = container.querySelectorAll('[aria-hidden="true"]')
    expect(icons.length).toBe(3)
  })
})

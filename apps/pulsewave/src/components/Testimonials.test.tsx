import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the section heading', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Happy Customers')
  })

  it('renders the first testimonial by default', () => {
    render(<Testimonials />)
    expect(screen.getByText(/Far far away/)).toBeInTheDocument()
    expect(screen.getByText('John Doe')).toBeInTheDocument()
  })

  it('renders pagination buttons', () => {
    render(<Testimonials />)
    const buttons = screen.getAllByRole('button', { name: /show testimonial/i })
    expect(buttons.length).toBe(3)
  })

  it('switches testimonial on button click', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    await user.click(screen.getByRole('button', { name: /show testimonial 2/i }))
    expect(screen.getByText('Jane Smith')).toBeInTheDocument()
  })
})

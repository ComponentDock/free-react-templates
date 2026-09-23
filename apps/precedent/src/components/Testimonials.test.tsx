import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the section heading', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Happy Clients')
  })

  it('renders the first testimonial', () => {
    render(<Testimonials />)
    expect(screen.getByText(/Precedent handled our case/)).toBeInTheDocument()
    expect(screen.getByText('Sarah Mitchell')).toBeInTheDocument()
  })

  it('navigates to next testimonial', async () => {
    const userEvent = (await import('@testing-library/user-event')).default
    const user = userEvent.setup()
    render(<Testimonials />)
    const nextBtn = screen.getByLabelText('Next testimonial')
    await user.click(nextBtn)
    expect(screen.getByText('David Chen')).toBeInTheDocument()
    expect(screen.getByText('2 / 5')).toBeInTheDocument()
  })

  it('navigates to previous testimonial', async () => {
    const userEvent = (await import('@testing-library/user-event')).default
    const user = userEvent.setup()
    render(<Testimonials />)
    const prevBtn = screen.getByLabelText('Previous testimonial')
    await user.click(prevBtn)
    expect(screen.getByText('Jennifer Adams')).toBeInTheDocument()
    expect(screen.getByText('5 / 5')).toBeInTheDocument()
  })

  it('has aria-live on counter', () => {
    render(<Testimonials />)
    expect(screen.getByText('1 / 5')).toHaveAttribute('aria-live', 'polite')
  })

  it('has aria-labelledby on section', () => {
    render(<Testimonials />)
    expect(screen.getByRole('region', { name: /Happy Clients/i })).toBeInTheDocument()
  })
})

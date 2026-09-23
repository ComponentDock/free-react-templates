import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders dark purple background', () => {
    render(<Testimonials />)
    const section = screen.getByTestId('testimonials')
    expect(section.className).toContain('bg-plum')
  })

  it('renders first testimonial by default', () => {
    render(<Testimonials />)
    expect(screen.getByText(/Nascent completely transformed/)).toBeInTheDocument()
    expect(screen.getByText('Sarah Mitchell')).toBeInTheDocument()
    expect(screen.getByText('Founder, NovaTech')).toBeInTheDocument()
  })

  it('navigates to second testimonial on dot click', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    const dots = screen.getAllByLabelText(/Go to testimonial/)
    const secondDot = dots[1]
    if (!secondDot) throw new Error('Second dot not found')
    await user.click(secondDot)
    expect(screen.getByText(/Nothing else comes close/)).toBeInTheDocument()
    expect(screen.getByText('David Chen')).toBeInTheDocument()
  })

  it('navigates to third testimonial', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    const dots = screen.getAllByLabelText(/Go to testimonial/)
    const thirdDot = dots[2]
    if (!thirdDot) throw new Error('Third dot not found')
    await user.click(thirdDot)
    expect(screen.getByText(/analytics alone saved us/)).toBeInTheDocument()
    expect(screen.getByText('Emily Park')).toBeInTheDocument()
  })

  it('has three dot pagination controls', () => {
    render(<Testimonials />)
    expect(screen.getAllByLabelText(/Go to testimonial/).length).toBe(3)
  })
})

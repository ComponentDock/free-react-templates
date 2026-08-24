import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders first testimonial heading and text', () => {
    render(<Testimonials />)
    expect(screen.getByText('Nice Accommodation')).toBeInTheDocument()
    expect(screen.getByText(/The rooms were beautifully decorated/)).toBeInTheDocument()
  })

  it('renders star rating', () => {
    render(<Testimonials />)
    const stars = document.querySelectorAll('.fill-brand')
    expect(stars.length).toBe(5)
  })

  it('navigates to next testimonial', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByText('Wonderful Experience')).toBeInTheDocument()
  })

  it('navigates to previous testimonial', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    await user.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    expect(screen.getByText('Perfect Getaway')).toBeInTheDocument()
  })

  it('navigates via dot buttons', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    await user.click(screen.getByRole('button', { name: 'Go to testimonial 2' }))
    expect(screen.getByText('Wonderful Experience')).toBeInTheDocument()
  })

  it('renders author names', () => {
    render(<Testimonials />)
    expect(screen.getByText('— Sarah Johnson')).toBeInTheDocument()
  })
})

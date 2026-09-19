import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the first testimonial quote', () => {
    render(<Testimonials />)
    expect(screen.getByText(/I just wanted to say thank you/)).toBeInTheDocument()
    expect(screen.getByText('Alejandro Houston')).toBeInTheDocument()
    expect(screen.getByText('Businessman')).toBeInTheDocument()
  })

  it('has accessible navigation buttons', () => {
    render(<Testimonials />)
    expect(screen.getByRole('button', { name: 'Previous testimonial' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Next testimonial' })).toBeInTheDocument()
  })

  it('navigates to the next testimonial on click', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByText('Sarah Mitchell')).toBeInTheDocument()
  })

  it('navigates to the previous testimonial on click', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByText('Sarah Mitchell')).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    expect(screen.getByText('Alejandro Houston')).toBeInTheDocument()
  })
})

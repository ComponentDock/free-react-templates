import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders heading and testimonials', () => {
    render(<Testimonials />)
    expect(screen.getByText('Happy Clients')).toBeInTheDocument()
    expect(screen.getByText('Danica Lewis')).toBeInTheDocument()
    expect(screen.getByText('Nicole Simon')).toBeInTheDocument()
  })

  it('navigates testimonials with arrows', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    const prevBtn = screen.getByLabelText('Previous testimonial')
    const nextBtn = screen.getByLabelText('Next testimonial')

    expect(prevBtn).toBeInTheDocument()
    expect(nextBtn).toBeInTheDocument()

    await user.click(nextBtn)
    await user.click(prevBtn)
  })
})

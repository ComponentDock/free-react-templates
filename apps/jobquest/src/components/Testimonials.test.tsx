import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the first testimonial quote', () => {
    render(<Testimonials />)
    expect(screen.getByText(/JobQuest made my job search/)).toBeInTheDocument()
  })

  it('renders the first testimonial name', () => {
    render(<Testimonials />)
    expect(screen.getByText('— Richard Anderson')).toBeInTheDocument()
  })

  it('navigates to next testimonial', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    await user.click(screen.getByLabelText('Next testimonial'))
    expect(screen.getByText('— Sarah Mitchell')).toBeInTheDocument()
  })

  it('navigates to previous testimonial', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    await user.click(screen.getByLabelText('Previous testimonial'))
    expect(screen.getByText('— James Parker')).toBeInTheDocument()
  })

  it('wraps around from last to first', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    await user.click(screen.getByLabelText('Next testimonial'))
    await user.click(screen.getByLabelText('Next testimonial'))
    expect(screen.getByText('— James Parker')).toBeInTheDocument()

    await user.click(screen.getByLabelText('Next testimonial'))
    expect(screen.getByText('— Richard Anderson')).toBeInTheDocument()
  })

  it('wraps around from first to last', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    await user.click(screen.getByLabelText('Previous testimonial'))
    expect(screen.getByText('— James Parker')).toBeInTheDocument()
  })
})

import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { nextSlideLabel, previousSlideLabel, slideLabelPrefix, testimonials } from '../data'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the first testimonial with photo, quote, and author', () => {
    render(<Testimonials />)
    expect(screen.getByRole('img', { name: testimonials[0].author })).toBeInTheDocument()
    expect(screen.getByText(testimonials[0].quote)).toBeInTheDocument()
    expect(screen.getByText(testimonials[0].author)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: previousSlideLabel })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: nextSlideLabel })).toBeInTheDocument()
  })

  it('navigates through the testimonials with arrows and dots', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    await user.click(screen.getByRole('button', { name: nextSlideLabel }))
    expect(screen.getByText(testimonials[1].author)).toBeInTheDocument()
    expect(screen.queryByText(testimonials[0].author)).not.toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: `${slideLabelPrefix} 3` }))
    expect(screen.getByText(testimonials[2].author)).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: previousSlideLabel }))
    expect(screen.getByText(testimonials[1].author)).toBeInTheDocument()
  })
})

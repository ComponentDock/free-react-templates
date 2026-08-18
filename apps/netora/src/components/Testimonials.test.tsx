import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import userEvent from '@testing-library/user-event'
import { Testimonials } from './Testimonials'
import { testimonials } from '../data'

describe('Testimonials', () => {
  it('renders the header and the first testimonial with stars and author', () => {
    render(<Testimonials />)
    const section = screen.getByRole('region', { name: 'Testimonials' })
    expect(section.className).toContain('bg-testimonial')
    expect(
      within(section).getByRole('heading', { level: 2, name: 'Love from our client' }),
    ).toBeInTheDocument()
    expect(
      within(section).getByRole('heading', { level: 3, name: 'Brilliant work' }),
    ).toBeInTheDocument()
    expect(screen.getByText(`“${testimonials[0]!.quote}”`)).toBeInTheDocument()
    expect(screen.getByText(testimonials[0]!.name)).toBeInTheDocument()
    expect(screen.getByRole('img', { name: '5 out of 5 stars' })).toBeInTheDocument()
    expect(
      screen.getByRole('img', { name: `Portrait of ${testimonials[0]!.name}` }),
    ).toBeInTheDocument()
  })

  it('advances and wraps through the testimonial slides', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByText(`“${testimonials[1]!.quote}”`)).toBeInTheDocument()
    expect(screen.getByText(testimonials[1]!.name)).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByText(`“${testimonials[0]!.quote}”`)).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    expect(screen.getByText(`“${testimonials[1]!.quote}”`)).toBeInTheDocument()
  })
})

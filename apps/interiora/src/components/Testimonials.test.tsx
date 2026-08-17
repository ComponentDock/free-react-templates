import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import userEvent from '@testing-library/user-event'
import { Testimonials } from './Testimonials'
import { TESTIMONIALS } from '../data'

describe('Testimonials', () => {
  it('renders the section on the peach band with its heading', () => {
    render(<Testimonials />)
    const section = screen.getByRole('region', { name: 'Testimonials' })
    expect(section.className).toContain('bg-peach')
    expect(screen.getByRole('heading', { level: 2 }).textContent).toContain('Customer testimonial')
  })

  it('shows the first testimonial with author and five stars', () => {
    render(<Testimonials />)
    expect(screen.getByText(TESTIMONIALS[0]!.quote)).toBeInTheDocument()
    expect(screen.getByText(TESTIMONIALS[0]!.author)).toBeInTheDocument()
    expect(screen.getAllByLabelText('Star rating')).toHaveLength(5)
  })

  it('moves between slides with the next and previous arrows', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByText(TESTIMONIALS[1]!.quote)).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    expect(screen.getByText(TESTIMONIALS[0]!.quote)).toBeInTheDocument()
  })

  it('wraps around from the last slide to the first', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByText(TESTIMONIALS[0]!.quote)).toBeInTheDocument()
  })
})

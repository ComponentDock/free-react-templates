import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { SPONSORS, TESTIMONIALS } from '../data'
import { Sponsors } from './Sponsors'

describe('Sponsors', () => {
  it('renders the heading and eight bordered sponsor tiles', () => {
    render(<Sponsors />)
    expect(screen.getByText('Partners & Sponsors')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 4, name: 'Official Sponsor' })).toBeInTheDocument()
    for (const sponsor of SPONSORS) {
      expect(screen.getByText(sponsor)).toBeInTheDocument()
    }
  })

  it('shows the first testimonial with quote, avatar, name and role', () => {
    render(<Sponsors />)
    const first = TESTIMONIALS[0]!
    expect(screen.getByText(first.quote)).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 6, name: first.name })).toBeInTheDocument()
    expect(screen.getByText(first.role)).toBeInTheDocument()
  })

  it('cycles testimonials with the arrows and dots', async () => {
    const user = userEvent.setup()
    render(<Sponsors />)
    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    const second = TESTIMONIALS[1]!
    expect(screen.getByText(second.quote)).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    expect(screen.getByText(TESTIMONIALS[0]!.quote)).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Go to testimonial 3' }))
    expect(screen.getByText(TESTIMONIALS[2]!.quote)).toBeInTheDocument()
  })
})

import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('shows the section heading and the first testimonial', () => {
    render(<Testimonials />)

    expect(screen.getByRole('heading', { name: 'What Clients Say' })).toBeInTheDocument()
    expect(screen.getByText('Mosan Cameron')).toBeInTheDocument()
    expect(screen.getByText(/Executive of FedEx/)).toBeInTheDocument()
  })

  it('advances and rewinds through the testimonials', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    expect(screen.getByText('Mosan Cameron')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByText('Evelyn Hart')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    expect(screen.getByText('Mosan Cameron')).toBeInTheDocument()
  })

  it('wraps around from the last testimonial to the first', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    await user.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    expect(screen.getByText('Evelyn Hart')).toBeInTheDocument()
  })
})

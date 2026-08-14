import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import userEvent from '@testing-library/user-event'
import { Testimonials } from './Testimonials'
import { testimonials } from '../data'

describe('Testimonials', () => {
  it('renders the subheading, heading and intro paragraph', () => {
    render(<Testimonials />)
    expect(screen.getByText(testimonials.subheading)).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: testimonials.heading }),
    ).toBeInTheDocument()
    expect(screen.getByText(testimonials.intro)).toBeInTheDocument()
  })

  it('shows the first testimonial with avatar, quote, name and position', () => {
    render(<Testimonials />)
    const first = testimonials.items[0]!
    expect(screen.getByText(first.quote)).toBeInTheDocument()
    expect(screen.getByText(first.name)).toBeInTheDocument()
    expect(screen.getByText(first.position)).toBeInTheDocument()
    expect(screen.getByRole('img', { name: `Portrait of ${first.name}` })).toHaveAttribute(
      'src',
      expect.stringContaining('parley-client-1'),
    )
    expect(screen.getByText(`1 / ${testimonials.items.length}`)).toBeInTheDocument()
  })

  it('navigates forward and backward through all five slides', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    const next = screen.getByRole('button', { name: 'Next testimonial' })
    const previous = screen.getByRole('button', { name: 'Previous testimonial' })

    await user.click(next)
    expect(screen.getByText(testimonials.items[1]!.name)).toBeInTheDocument()
    expect(screen.getByText('2 / 5')).toBeInTheDocument()

    await user.click(previous)
    expect(screen.getByText(testimonials.items[0]!.name)).toBeInTheDocument()

    await user.click(next)
    await user.click(next)
    await user.click(next)
    expect(screen.getByText('4 / 5')).toBeInTheDocument()
    await user.click(next)
    expect(screen.getByText(testimonials.items[4]!.name)).toBeInTheDocument()
    expect(screen.getByText('5 / 5')).toBeInTheDocument()

    await user.click(next)
    expect(screen.getByText(testimonials.items[0]!.name)).toBeInTheDocument()
  })
})

import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { FEEDBACK_TITLE, TESTIMONIALS } from '../data'
import { Feedback } from './Feedback'

describe('Feedback', () => {
  it('renders the light panel with the heading and the first testimonial slide', () => {
    const { container } = render(<Feedback />)
    const section = container.querySelector('section')!
    expect(section).toHaveAttribute('id', 'feedback')
    expect(screen.getByRole('heading', { level: 3, name: FEEDBACK_TITLE })).toBeInTheDocument()
    expect(screen.getByText(TESTIMONIALS[0].quote)).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 4, name: TESTIMONIALS[0].name }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 5, name: TESTIMONIALS[0].role }),
    ).toBeInTheDocument()
    const avatar = section.querySelector('img')!
    expect(avatar).toHaveAttribute('src', TESTIMONIALS[0].avatar)
    expect(screen.getByRole('button', { name: 'Previous testimonial' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Next testimonial' })).toBeInTheDocument()
  })

  it('cycles forward through the slides and wraps to the first', async () => {
    const user = userEvent.setup()
    render(<Feedback />)
    const next = screen.getByRole('button', { name: 'Next testimonial' })
    await user.click(next)
    expect(screen.getByText(TESTIMONIALS[1].quote)).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 4, name: TESTIMONIALS[1].name }),
    ).toBeInTheDocument()
    await user.click(next)
    expect(screen.getByText(TESTIMONIALS[2].quote)).toBeInTheDocument()
    await user.click(next)
    expect(screen.getByText(TESTIMONIALS[0].quote)).toBeInTheDocument()
  })

  it('cycles backward and wraps from the first slide to the last', async () => {
    const user = userEvent.setup()
    render(<Feedback />)
    const prev = screen.getByRole('button', { name: 'Previous testimonial' })
    await user.click(prev)
    expect(screen.getByText(TESTIMONIALS[2].quote)).toBeInTheDocument()
    await user.click(prev)
    expect(screen.getByText(TESTIMONIALS[1].quote)).toBeInTheDocument()
  })
})

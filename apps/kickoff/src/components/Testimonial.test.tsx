import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Testimonial } from './Testimonial'

describe('Testimonial', () => {
  it('renders the heading and the first quote slide', () => {
    render(<Testimonial />)

    expect(screen.getByText('Testimonial')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Happy Viewers' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Arthur Browner' })).toBeInTheDocument()
    expect(screen.getByText('Viewer')).toBeInTheDocument()
    expect(screen.getByText(/Far far away, behind the word mountains/)).toBeInTheDocument()
  })

  it('cycles the slides with prev/next', async () => {
    const user = userEvent.setup()
    render(<Testimonial />)

    const avatar = () => screen.getByRole('img', { name: 'Arthur Browner' })

    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(avatar()).toHaveAttribute('src', expect.stringContaining('kickoff-fan-2'))

    await user.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    expect(avatar()).toHaveAttribute('src', expect.stringContaining('kickoff-fan-1'))

    await user.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    expect(avatar()).toHaveAttribute('src', expect.stringContaining('kickoff-fan-3'))
  })
})

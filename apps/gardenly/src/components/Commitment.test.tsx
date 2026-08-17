import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Commitment } from './Commitment'
import { COMMITMENTS } from '../data'

describe('Commitment', () => {
  it('renders the heading with the first quote and founder row', () => {
    render(<Commitment />)
    expect(screen.getByRole('heading', { name: 'Our Commitment' })).toBeInTheDocument()
    expect(screen.getByText(COMMITMENTS[0]!.quote)).toBeInTheDocument()
    expect(screen.getByText(COMMITMENTS[0]!.author)).toBeInTheDocument()
    expect(screen.getByText(COMMITMENTS[0]!.role)).toBeInTheDocument()
  })

  it('navigates to the next slide with the next button and wraps around', async () => {
    const user = userEvent.setup()
    render(<Commitment />)
    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByText(COMMITMENTS[1]!.quote)).toBeInTheDocument()
    expect(screen.queryByText(COMMITMENTS[0]!.quote)).not.toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByText(COMMITMENTS[0]!.quote)).toBeInTheDocument()
  })

  it('navigates to the previous slide with the prev button', async () => {
    const user = userEvent.setup()
    render(<Commitment />)
    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    await user.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    expect(screen.getByText(COMMITMENTS[0]!.quote)).toBeInTheDocument()
  })
})

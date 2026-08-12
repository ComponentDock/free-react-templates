import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SuccessStories } from './SuccessStories'

describe('SuccessStories', () => {
  it('renders the heading, photo and first testimonial', () => {
    const { container } = render(<SuccessStories />)
    expect(screen.getByRole('heading', { name: 'Success Stories' })).toBeInTheDocument()
    expect(screen.getByText('Fernando Obiga')).toBeInTheDocument()
    expect(screen.getByText('Businessman')).toBeInTheDocument()
    expect(container.querySelector('img')).toHaveAttribute(
      'src',
      'https://picsum.photos/seed/kindred-testimony/640/640',
    )
  })

  it('navigates between testimonials with next and previous', async () => {
    const user = userEvent.setup()
    render(<SuccessStories />)
    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByText('Jeffrey Blatch')).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByText('Jeff Chan')).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    expect(screen.getByText('Henry Ford')).toBeInTheDocument()
  })

  it('wraps around from the first testimonial to the last', async () => {
    const user = userEvent.setup()
    render(<SuccessStories />)
    await user.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    expect(screen.getByText('Michael Bubble')).toBeInTheDocument()
  })
})

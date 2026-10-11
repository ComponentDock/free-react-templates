import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the heading and only the active quote over the cover image', () => {
    const { container } = render(<Testimonials />)

    const section = container.querySelector('#testimonials')
    expect(section).not.toBeNull()
    expect(section).toHaveStyle({
      backgroundImage: 'url(https://picsum.photos/seed/wanderbug-testimonial-bg/1440/800)',
    })

    const heading = screen.getByRole('heading', { level: 2, name: 'What customers say' })
    expect(heading).toHaveClass('text-white')

    expect(screen.getByText(/your dream will come true/)).toBeInTheDocument()
    expect(screen.getByText('Mark Anthony')).toBeInTheDocument()
    expect(screen.getByText('CEO of Wanderbug')).toBeInTheDocument()
    expect(screen.queryByText('Elena Marsh')).not.toBeInTheDocument()

    expect(screen.getByRole('img', { name: 'Mark Anthony' })).toHaveAttribute(
      'src',
      'https://picsum.photos/seed/wanderbug-founder-1/160/160',
    )
  })

  it('advances to the next testimonial and clamps at both ends', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    await user.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    expect(screen.getByText('Mark Anthony')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByText('Elena Marsh')).toBeInTheDocument()
    expect(screen.getByText('Repeat traveller')).toBeInTheDocument()
    expect(screen.queryByText('Mark Anthony')).not.toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByText('Elena Marsh')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    expect(screen.getByText('Mark Anthony')).toBeInTheDocument()
  })
})

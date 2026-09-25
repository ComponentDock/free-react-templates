import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Carousel } from './Carousel'

describe('Carousel', () => {
  it('renders the first testimonial with heading and text', () => {
    render(<Carousel />)

    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent(
      'From the root of experience',
    )
    expect(screen.getByText(/their crafting workshops/i)).toBeInTheDocument()
  })

  it('navigates to the next testimonial', async () => {
    const user = userEvent.setup()
    render(<Carousel />)

    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('Creative excellence')
  })

  it('navigates to the previous testimonial', async () => {
    const user = userEvent.setup()
    render(<Carousel />)

    await user.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent(
      'Where tradition meets innovation',
    )
  })
})

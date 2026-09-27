import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Testimony } from './Testimony'

describe('Testimony', () => {
  it('renders the heading and first testimonial', () => {
    render(<Testimony />)

    expect(screen.getByText('What Our Clients Say')).toBeInTheDocument()
    expect(screen.getByText('Testimony')).toBeInTheDocument()
    expect(screen.getByText(/Exceptional service/)).toBeInTheDocument()
    expect(screen.getByText('Garreth Smith')).toBeInTheDocument()
  })

  it('navigates to next testimonial on button click', async () => {
    const user = userEvent.setup()
    render(<Testimony />)

    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByText('Sarah Johnson')).toBeInTheDocument()
  })

  it('navigates to previous testimonial on button click', async () => {
    const user = userEvent.setup()
    render(<Testimony />)

    await user.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    expect(screen.getByText('David Wilson')).toBeInTheDocument()
  })

  it('wraps around from last to first on next click', async () => {
    const user = userEvent.setup()
    render(<Testimony />)

    // Click next 4 times to get to the last testimonial
    for (let i = 0; i < 4; i++) {
      await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    }
    expect(screen.getByText('David Wilson')).toBeInTheDocument()

    // Click next once more to wrap to first
    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByText('Garreth Smith')).toBeInTheDocument()
  })

  it('wraps around from first to last on previous click', async () => {
    const user = userEvent.setup()
    render(<Testimony />)

    await user.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    expect(screen.getByText('David Wilson')).toBeInTheDocument()
  })
})

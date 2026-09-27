import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Reviews } from './Reviews'

describe('Reviews', () => {
  it('renders the section heading', () => {
    render(<Reviews />)

    expect(screen.getByText('What Our Clients Say')).toBeInTheDocument()
  })

  it('renders the first review by default', () => {
    render(<Reviews />)

    expect(screen.getByText(/Propwell made finding our dream home/)).toBeInTheDocument()
    expect(screen.getByText('Jennifer Wilson')).toBeInTheDocument()
    expect(screen.getByText('Home Buyer')).toBeInTheDocument()
  })

  it('renders star ratings', () => {
    render(<Reviews />)

    const stars = document.querySelectorAll('.fill-primary')
    expect(stars.length).toBeGreaterThanOrEqual(1)
  })

  it('navigates to the next review', async () => {
    const user = userEvent.setup()
    render(<Reviews />)

    await user.click(screen.getByLabelText('Next review'))

    expect(screen.getByText(/The service we received was exceptional/)).toBeInTheDocument()
    expect(screen.getByText('Robert Johnson')).toBeInTheDocument()
  })

  it('navigates to the previous review', async () => {
    const user = userEvent.setup()
    render(<Reviews />)

    await user.click(screen.getByLabelText('Previous review'))

    expect(screen.getByText(/Great experience with Propwell/)).toBeInTheDocument()
    expect(screen.getByText('Emily Davis')).toBeInTheDocument()
  })

  it('has an aria-label', () => {
    render(<Reviews />)

    expect(screen.getByLabelText('Customer reviews')).toBeInTheDocument()
  })

  it('cycles through all reviews with next', async () => {
    const user = userEvent.setup()
    render(<Reviews />)

    // First review (index 0)
    expect(screen.getByText('Jennifer Wilson')).toBeInTheDocument()

    // Click next to go to index 1
    await user.click(screen.getByLabelText('Next review'))
    expect(screen.getByText('Robert Johnson')).toBeInTheDocument()

    // Click next to go to index 2
    await user.click(screen.getByLabelText('Next review'))
    expect(screen.getByText('Emily Davis')).toBeInTheDocument()

    // Click next to wrap back to index 0
    await user.click(screen.getByLabelText('Next review'))
    expect(screen.getByText('Jennifer Wilson')).toBeInTheDocument()
  })
})

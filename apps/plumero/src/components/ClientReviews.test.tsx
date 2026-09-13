import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ClientReviews } from './ClientReviews'

describe('ClientReviews', () => {
  it('renders the heading and first review', () => {
    render(<ClientReviews />)

    expect(screen.getByRole('heading', { name: 'Client Reviews' })).toBeInTheDocument()
    expect(screen.getByText('Sarah Johnson')).toBeInTheDocument()
    expect(screen.getByText(/These pillows changed/)).toBeInTheDocument()
  })

  it('renders previous and next navigation buttons', () => {
    render(<ClientReviews />)

    expect(screen.getByRole('button', { name: 'Previous review' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Next review' })).toBeInTheDocument()
  })

  it('renders dot navigation buttons', () => {
    render(<ClientReviews />)

    expect(screen.getByRole('button', { name: 'Go to review 1' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Go to review 2' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Go to review 3' })).toBeInTheDocument()
  })

  it('navigates to next review when clicking Next', async () => {
    const user = userEvent.setup()
    render(<ClientReviews />)

    await user.click(screen.getByRole('button', { name: 'Next review' }))
    expect(screen.getByText('Michael Chen')).toBeInTheDocument()
  })

  it('navigates to previous review when clicking Previous', async () => {
    const user = userEvent.setup()
    render(<ClientReviews />)

    await user.click(screen.getByRole('button', { name: 'Previous review' }))
    expect(screen.getByText('Emily Davis')).toBeInTheDocument()
  })

  it('wraps to first review when clicking Next from last review', async () => {
    const user = userEvent.setup()
    render(<ClientReviews />)

    // Navigate to last review
    await user.click(screen.getByRole('button', { name: 'Go to review 3' }))
    expect(screen.getByText('Emily Davis')).toBeInTheDocument()

    // Next wraps to first
    await user.click(screen.getByRole('button', { name: 'Next review' }))
    expect(screen.getByText('Sarah Johnson')).toBeInTheDocument()
  })

  it('wraps to last review when clicking Previous from first review', async () => {
    const user = userEvent.setup()
    render(<ClientReviews />)

    // Already on first review
    await user.click(screen.getByRole('button', { name: 'Previous review' }))
    expect(screen.getByText('Emily Davis')).toBeInTheDocument()
  })

  it('navigates to a previous non-first review when clicking Previous', async () => {
    const user = userEvent.setup()
    render(<ClientReviews />)

    // Go to review 2
    await user.click(screen.getByRole('button', { name: 'Go to review 2' }))
    // Previous goes to review 1 (non-wrapping path)
    await user.click(screen.getByRole('button', { name: 'Previous review' }))
    expect(screen.getByText('Sarah Johnson')).toBeInTheDocument()
  })
})

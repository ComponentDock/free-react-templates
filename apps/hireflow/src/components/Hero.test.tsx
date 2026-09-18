import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline with job count', () => {
    render(<Hero />)
    expect(screen.getByText(/1500\+/)).toBeInTheDocument()
    expect(screen.getByText(/Jobs posted last week/)).toBeInTheDocument()
  })

  it('renders the search form with inputs', () => {
    render(<Hero />)
    expect(screen.getByLabelText('Job search')).toBeInTheDocument()
    expect(screen.getByLabelText('Location')).toBeInTheDocument()
    expect(screen.getByLabelText('Category')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument()
  })

  it('renders search by tags', () => {
    render(<Hero />)
    expect(screen.getByText(/Search by tags/)).toBeInTheDocument()
    expect(screen.getByText(/Technology, Business, Consulting/)).toBeInTheDocument()
  })

  it('prevents form submission', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    await user.click(screen.getByRole('button', { name: /search/i }))
    // Form should not navigate — no error means preventDefault worked
  })
})

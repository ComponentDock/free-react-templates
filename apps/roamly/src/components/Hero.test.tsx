import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the badge, headline, subtext and CTAs', () => {
    render(<Hero />)
    expect(screen.getByText('Top-Rated Travel Agency 2025')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      /Discover Your Next Adventure/,
    )
    expect(screen.getByRole('link', { name: /explore tours/i })).toHaveAttribute('href', '#tours')
    expect(screen.getByRole('link', { name: /watch our story/i })).toBeInTheDocument()
    expect(
      screen.getByText(/Explore breathtaking destinations around the world/),
    ).toBeInTheDocument()
  })

  it('renders the four hero stats', () => {
    render(<Hero />)
    expect(screen.getByText('50+')).toBeInTheDocument()
    expect(screen.getByText('Destinations')).toBeInTheDocument()
    expect(screen.getByText('200+')).toBeInTheDocument()
    expect(screen.getByText('Tour Packages')).toBeInTheDocument()
    expect(screen.getByText('15k+')).toBeInTheDocument()
    expect(screen.getByText('Happy Travelers')).toBeInTheDocument()
    expect(screen.getByText('98%')).toBeInTheDocument()
    expect(screen.getByText('Satisfaction Rate')).toBeInTheDocument()
  })

  it('renders the search widget fields', () => {
    render(<Hero />)
    expect(screen.getByLabelText('Destination')).toHaveAttribute('placeholder', 'Where to?')
    expect(screen.getByLabelText('Check In')).toHaveAttribute('type', 'date')
    expect(screen.getByLabelText('Check Out')).toHaveAttribute('type', 'date')
    expect(screen.getByLabelText('Travelers')).toHaveValue('1 Traveler')
    expect(screen.getByRole('button', { name: 'Search Tours' })).toBeInTheDocument()
  })

  it('shows an error when submitting without a destination', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    await user.click(screen.getByRole('button', { name: 'Search Tours' }))
    expect(screen.getByText('Please enter a destination')).toBeInTheDocument()
    expect(screen.queryByText(/perfect tours/)).not.toBeInTheDocument()
  })

  it('clears the error as the user types a destination', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    await user.click(screen.getByRole('button', { name: 'Search Tours' }))
    expect(screen.getByText('Please enter a destination')).toBeInTheDocument()
    await user.type(screen.getByLabelText('Destination'), 'Bali')
    expect(screen.queryByText('Please enter a destination')).not.toBeInTheDocument()
  })

  it('shows a success message when submitting with a destination', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    await user.type(screen.getByLabelText('Destination'), 'Bali')
    await user.click(screen.getByRole('button', { name: 'Search Tours' }))
    expect(screen.getByText(/perfect tours/)).toBeInTheDocument()
    expect(screen.queryByText('Please enter a destination')).not.toBeInTheDocument()
  })
})

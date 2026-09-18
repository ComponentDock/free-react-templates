import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders heading and subtext', () => {
    render(<Hero />)
    expect(screen.getByText('Discover The Best Services Near You')).toBeInTheDocument()
    expect(screen.getByText(/1,118,940,376/)).toBeInTheDocument()
  })

  it('renders search form with input, selects, and button', () => {
    render(<Hero />)
    expect(screen.getByLabelText('Search')).toBeInTheDocument()
    expect(screen.getByLabelText('Choose categories')).toBeInTheDocument()
    expect(screen.getByLabelText('Choose location')).toBeInTheDocument()
    expect(screen.getByText('EXPLORE NOW')).toBeInTheDocument()
  })

  it('renders category pills', () => {
    render(<Hero />)
    // Some pill labels also appear as select options, so use getAllByText
    expect(screen.getAllByText('Restaurant').length).toBeGreaterThanOrEqual(2)
    expect(screen.getAllByText('Food & Drink').length).toBeGreaterThanOrEqual(2)
    expect(screen.getAllByText('Shopping').length).toBeGreaterThanOrEqual(2)
    expect(screen.getAllByText('Beauty').length).toBeGreaterThanOrEqual(2)
    expect(screen.getAllByText('Hotels').length).toBeGreaterThanOrEqual(2)
    expect(screen.getByText('All Categories')).toBeInTheDocument()
  })

  it('allows form submission via button click', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    await user.type(screen.getByLabelText('Search'), 'cafe')
    await user.click(screen.getByText('EXPLORE NOW'))
  })
})

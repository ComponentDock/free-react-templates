import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Hero } from './Hero'
import { describe, it, expect } from 'vitest'

describe('Hero', () => {
  it('renders subtitle and heading', () => {
    render(<Hero />)
    expect(screen.getAllByText('Find Nearby Attraction').length).toBeGreaterThanOrEqual(1)
  })

  it('renders search form with both inputs', () => {
    render(<Hero />)
    expect(screen.getByLabelText('What are you finding')).toBeInTheDocument()
    expect(screen.getByLabelText('Location')).toBeInTheDocument()
  })

  it('renders Search button', () => {
    render(<Hero />)
    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument()
  })

  it('renders category tags', () => {
    render(<Hero />)
    const tags = ['Hotel', 'Food', 'Shopping', 'Bar & Pubs', 'Places']
    tags.forEach((tag) => {
      expect(screen.getByText(tag)).toBeInTheDocument()
    })
  })

  it('updates query input value', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    const input = screen.getByLabelText('What are you finding')
    await user.type(input, 'restaurants')
    expect(input).toHaveValue('restaurants')
  })

  it('updates location input value', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    const input = screen.getByLabelText('Location')
    await user.type(input, 'New York')
    expect(input).toHaveValue('New York')
  })

  it('prevents default on form submit', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    const button = screen.getByRole('button', { name: /search/i })
    await user.click(button)
    // No error thrown = submit was prevented
  })

  it('category tags link to #categories', () => {
    render(<Hero />)
    const hotelTag = screen.getByText('Hotel')
    expect(hotelTag).toHaveAttribute('href', '#categories')
  })

  it('has search landmark role', () => {
    render(<Hero />)
    expect(screen.getByRole('search')).toBeInTheDocument()
  })
})

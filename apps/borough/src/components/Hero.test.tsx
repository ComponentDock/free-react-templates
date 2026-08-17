import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Hero } from './Hero'
import { searchOptions } from '../data'

describe('Hero', () => {
  it('renders the headline, subtext, and search bar columns', () => {
    render(<Hero />)

    expect(
      screen.getByRole('heading', { level: 1, name: "Let's Explore Your Awesome City" }),
    ).toBeInTheDocument()
    expect(
      screen.getByText('Find great places to stay, eat, shop, or visit from local experts.'),
    ).toBeInTheDocument()

    const form = screen.getByRole('search', { name: 'Search listings' })
    expect(form).toHaveClass('rounded-[5px]')

    expect(screen.getByRole('textbox', { name: 'What are you looking for?' })).toHaveAttribute(
      'placeholder',
      'What are you looking for?',
    )
    expect(screen.getByRole('textbox', { name: 'Search Location' })).toHaveAttribute(
      'placeholder',
      'Search Location',
    )

    const select = screen.getByRole('combobox', { name: 'All Categories' })
    const options = screen.getAllByRole('option')
    expect(options).toHaveLength(searchOptions.length)
    expect(select).toHaveValue('All Categories')

    expect(screen.getByRole('button', { name: 'Search' })).toBeInTheDocument()
  })

  it('submits the search form without navigating', () => {
    render(<Hero />)
    const form = screen.getByRole('search', { name: 'Search listings' })
    expect(() => fireEvent.submit(form)).not.toThrow()
  })
})

import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline and subtext', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { name: /Find What You Need/i })).toBeInTheDocument()
    expect(screen.getByText(/Browse thousands of classified ads/i)).toBeInTheDocument()
  })

  it('renders the search form with query, location, category, and search button', () => {
    render(<Hero />)
    expect(screen.getByRole('textbox', { name: /search query/i })).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: /location/i })).toBeInTheDocument()
    expect(screen.getByRole('combobox', { name: /category/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument()
  })

  it('allows typing in the search and location fields', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    const queryInput = screen.getByRole('textbox', { name: /search query/i })
    const locationInput = screen.getByRole('textbox', { name: /location/i })

    await user.type(queryInput, 'apartment')
    expect(queryInput).toHaveValue('apartment')

    await user.type(locationInput, 'New York')
    expect(locationInput).toHaveValue('New York')
  })

  it('allows changing the category dropdown', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    const select = screen.getByRole('combobox', { name: /category/i })
    await user.selectOptions(select, 'Real Estate')
    expect(select).toHaveValue('Real Estate')
  })

  it('submits the search form without error', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    await user.click(screen.getByRole('button', { name: /search/i }))
  })
})

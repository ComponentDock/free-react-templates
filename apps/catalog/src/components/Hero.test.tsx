import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the welcome heading', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Welcome To Catalog')
  })

  it('renders the search form', () => {
    render(<Hero />)
    expect(screen.getByLabelText('Search keyword')).toBeInTheDocument()
    expect(screen.getByLabelText('Location')).toBeInTheDocument()
    expect(screen.getByLabelText('Category')).toBeInTheDocument()
  })

  it('renders the search button', () => {
    render(<Hero />)
    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument()
  })

  it('renders trending search tags', () => {
    render(<Hero />)
    expect(screen.getByText('Trending Search:')).toBeInTheDocument()
    expect(screen.getByText('iPhone')).toBeInTheDocument()
    expect(screen.getByText('Cars')).toBeInTheDocument()
    expect(screen.getByText('Flowers')).toBeInTheDocument()
    expect(screen.getByText('House')).toBeInTheDocument()
    expect(screen.getAllByText('Furniture').length).toBeGreaterThanOrEqual(2)
  })

  it('has category options', () => {
    render(<Hero />)
    const select = screen.getByLabelText('Category')
    expect(select).toBeInTheDocument()
    const options = select.querySelectorAll('option')
    expect(options.length).toBeGreaterThanOrEqual(6)
  })

  it('submits the hero search form without error', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    await user.type(screen.getByLabelText('Search keyword'), 'laptop')
    await user.type(screen.getByLabelText('Location'), 'New York')
    await user.selectOptions(screen.getByLabelText('Category'), 'electronics')
    await user.click(screen.getByRole('button', { name: /search/i }))
  })
})

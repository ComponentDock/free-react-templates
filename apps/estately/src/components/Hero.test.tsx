import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import userEvent from '@testing-library/user-event'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the background image with a dark overlay and the charcoal search panel', () => {
    const { container } = render(<Hero />)
    const section = container.querySelector('section')
    expect(section).toHaveStyle('background-image: url(https://picsum.photos/id/30/1920/1080)')
  })

  it('renders five property-type tabs with Buy selected', () => {
    render(<Hero />)
    expect(screen.getByRole('radio', { name: 'Buy' })).toBeChecked()
    for (const tab of ['Rent', 'Sell', 'Property Value', 'Agents']) {
      expect(screen.getByRole('radio', { name: tab })).not.toBeChecked()
    }
  })

  it('shows the search input, Search button and disclaimer', () => {
    render(<Hero />)
    expect(screen.getByPlaceholderText('Search by state, postcode or suburb')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument()
    expect(screen.getByText(/Lorem ipsum dolor sit amet/i)).toBeInTheDocument()
  })

  it('switches the selected tab when another tab is clicked', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    await user.click(screen.getByRole('radio', { name: 'Property Value' }))
    expect(screen.getByRole('radio', { name: 'Property Value' })).toBeChecked()
    expect(screen.getByRole('radio', { name: 'Buy' })).not.toBeChecked()
  })

  it('submits the search form without navigating or reloading', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    await user.type(screen.getByPlaceholderText('Search by state, postcode or suburb'), 'Sydney')
    await user.click(screen.getByRole('button', { name: /search/i }))
    expect(screen.getByDisplayValue('Sydney')).toBeInTheDocument()
  })
})

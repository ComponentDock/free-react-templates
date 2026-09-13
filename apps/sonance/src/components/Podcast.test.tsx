import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Podcast } from './Podcast'

describe('Podcast', () => {
  it('renders the section heading', () => {
    render(<Podcast />)
    expect(screen.getByRole('heading', { level: 2, name: /live & upcoming/i })).toBeInTheDocument()
  })

  it('renders all category filter tabs', () => {
    render(<Podcast />)
    for (const cat of ['All', 'Entrepreneurship', 'Media', 'Tech', 'Tutorials']) {
      expect(screen.getByRole('tab', { name: cat })).toBeInTheDocument()
    }
  })

  it('shows all episodes when "All" tab is selected', () => {
    render(<Podcast />)
    expect(screen.getByText(/6 Powerful Tips/)).toBeInTheDocument()
    expect(screen.getByText(/How To Build A Personal Brand/)).toBeInTheDocument()
    expect(screen.getByText(/Mastering Social Media Marketing/)).toBeInTheDocument()
  })

  it('filters episodes when a category tab is clicked', async () => {
    const user = userEvent.setup()
    render(<Podcast />)

    await user.click(screen.getByRole('tab', { name: 'Tech' }))
    expect(screen.getByRole('tab', { name: 'Tech' })).toHaveAttribute('aria-selected', 'true')
    expect(screen.getByText(/Mastering Social Media Marketing/)).toBeInTheDocument()
  })

  it('shows play buttons for each episode', () => {
    render(<Podcast />)
    const playButtons = screen.getAllByRole('button', { name: /play episode/i })
    expect(playButtons.length).toBeGreaterThan(0)
  })
})

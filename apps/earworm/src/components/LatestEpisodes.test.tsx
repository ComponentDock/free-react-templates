import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { LatestEpisodes } from './LatestEpisodes'

describe('LatestEpisodes', () => {
  it('renders the section heading and filter tabs', () => {
    render(<LatestEpisodes />)
    expect(screen.getByRole('heading', { name: 'Latest Episodes' })).toBeInTheDocument()
    for (const cat of ['All', 'Entrepreneurship', 'Media', 'Tech', 'Tutorials']) {
      expect(screen.getByRole('button', { name: cat })).toBeInTheDocument()
    }
  })

  it('shows all episodes by default', () => {
    render(<LatestEpisodes />)
    expect(screen.getByText(/Episode 201/)).toBeInTheDocument()
    expect(screen.getByText(/Episode 206/)).toBeInTheDocument()
  })

  it('filters episodes by category', async () => {
    const user = userEvent.setup()
    render(<LatestEpisodes />)
    await user.click(screen.getByRole('button', { name: 'Media' }))
    expect(screen.getByText(/Episode 203/)).toBeInTheDocument()
    expect(screen.queryByText(/Episode 201/)).not.toBeInTheDocument()
  })

  it('shows audio players and action links', () => {
    const { container } = render(<LatestEpisodes />)
    const audioPlayers = container.querySelectorAll('audio')
    expect(audioPlayers.length).toBeGreaterThan(0)
    expect(screen.getAllByText(/Like \(29\)/).length).toBeGreaterThan(0)
  })

  it('has a Load More button', () => {
    render(<LatestEpisodes />)
    expect(screen.getByRole('button', { name: /Load More/i })).toBeInTheDocument()
  })
})

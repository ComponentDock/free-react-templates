import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { PodcastSection } from './PodcastSection'

describe('PodcastSection', () => {
  it('has testid podcast-section', () => {
    render(<PodcastSection />)
    expect(screen.getByTestId('podcast-section')).toBeInTheDocument()
  })

  it('renders section title', () => {
    render(<PodcastSection />)
    expect(screen.getByText('Latest Podcast')).toBeInTheDocument()
  })

  it('renders album art image', () => {
    render(<PodcastSection />)
    const img = screen.getByRole('img', { name: /album art/i })
    expect(img).toBeInTheDocument()
  })

  it('renders track name', () => {
    render(<PodcastSection />)
    expect(screen.getByText(/Hernan Cataneo/i)).toBeInTheDocument()
  })

  it('renders LISTEN LIVE button', () => {
    render(<PodcastSection />)
    expect(screen.getByRole('button', { name: /listen live/i })).toBeInTheDocument()
  })

  it('LISTEN LIVE button is clickable', async () => {
    const user = userEvent.setup()
    render(<PodcastSection />)
    const btn = screen.getByRole('button', { name: /listen live/i })
    await user.click(btn)
    expect(btn).toBeInTheDocument()
  })
})

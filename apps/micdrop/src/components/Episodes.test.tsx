import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Episodes } from './Episodes'

describe('Episodes', () => {
  it('renders the section heading', () => {
    render(<Episodes />)
    expect(screen.getByText('Latest Episodes')).toBeInTheDocument()
  })

  it('renders the section subtitle', () => {
    render(<Episodes />)
    expect(screen.getByText(/Catch up on our most recent conversations/)).toBeInTheDocument()
  })

  it('renders all six episode titles', () => {
    render(<Episodes />)
    expect(screen.getByText('The Future of AI in Creative Industries')).toBeInTheDocument()
    expect(screen.getByText('Building Sustainable Tech Companies')).toBeInTheDocument()
    expect(screen.getByText('Remote Work Revolution: Lessons Learned')).toBeInTheDocument()
    expect(screen.getByText('From Startup to Scaleup: Growth Strategies')).toBeInTheDocument()
    expect(screen.getByText('The Art of Product Design')).toBeInTheDocument()
    expect(screen.getByText('Cybersecurity in the Modern Era')).toBeInTheDocument()
  })

  it('renders play buttons for each episode', () => {
    render(<Episodes />)
    const playButtons = screen.getAllByText('Play')
    expect(playButtons).toHaveLength(6)
  })

  it('renders episode dates and durations', () => {
    render(<Episodes />)
    expect(screen.getByText('Sep 16, 2024')).toBeInTheDocument()
    expect(screen.getByText('45 min')).toBeInTheDocument()
    expect(screen.getByText('Aug 12, 2024')).toBeInTheDocument()
    expect(screen.getByText('48 min')).toBeInTheDocument()
  })

  it('renders episode images with correct attributes', () => {
    render(<Episodes />)
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(6)
    expect(images[0]).toHaveAttribute('alt', 'The Future of AI in Creative Industries')
    expect(images[0]).toHaveAttribute('src', 'https://picsum.photos/seed/ep1/400/250')
  })

  it('has the correct aria-label', () => {
    render(<Episodes />)
    expect(screen.getByLabelText('Recent episodes')).toBeInTheDocument()
  })

  it('play buttons have correct aria-labels', () => {
    render(<Episodes />)
    expect(
      screen.getByLabelText('Play The Future of AI in Creative Industries'),
    ).toBeInTheDocument()
    expect(screen.getByLabelText('Play Cybersecurity in the Modern Era')).toBeInTheDocument()
  })

  it('play buttons are clickable', async () => {
    const user = userEvent.setup()
    render(<Episodes />)
    const playBtn = screen.getByLabelText('Play The Future of AI in Creative Industries')
    await user.click(playBtn)
  })
})

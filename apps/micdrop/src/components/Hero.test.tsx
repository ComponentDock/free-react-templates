import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the badge text', () => {
    render(<Hero />)
    expect(screen.getByText('New Episode Every Tuesday')).toBeInTheDocument()
  })

  it('renders the main headline', () => {
    render(<Hero />)
    expect(screen.getByText(/Stories That/)).toBeInTheDocument()
    expect(screen.getByText('Spark Ideas')).toBeInTheDocument()
  })

  it('renders the subtitle', () => {
    render(<Hero />)
    expect(screen.getByText(/Conversations with innovators/)).toBeInTheDocument()
  })

  it('renders the Listen Latest Episode CTA', () => {
    render(<Hero />)
    expect(screen.getByText('Listen Latest Episode')).toBeInTheDocument()
  })

  it('renders the Subscribe button', () => {
    render(<Hero />)
    expect(screen.getByText('Subscribe')).toBeInTheDocument()
  })

  it('renders Available on heading', () => {
    render(<Hero />)
    expect(screen.getByText('Available on')).toBeInTheDocument()
  })

  it('renders platform links', () => {
    render(<Hero />)
    expect(screen.getByText('Spotify')).toBeInTheDocument()
    expect(screen.getByText('Apple Podcasts')).toBeInTheDocument()
    expect(screen.getByText('Google Podcasts')).toBeInTheDocument()
    expect(screen.getByText('YouTube')).toBeInTheDocument()
  })

  it('renders correct platform link hrefs', () => {
    render(<Hero />)
    const spotifyLink = screen.getByText('Spotify').closest('a')
    expect(spotifyLink).toHaveAttribute('href', '#')
  })
})

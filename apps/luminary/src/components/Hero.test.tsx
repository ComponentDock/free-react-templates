import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the main heading', () => {
    render(<Hero />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toHaveTextContent('We Inspire You To Create Great Things')
  })

  it('renders a subtext paragraph', () => {
    render(<Hero />)
    expect(screen.getByText(/Discover our world-class/)).toBeInTheDocument()
  })

  it('renders the play button', () => {
    render(<Hero />)
    const playBtn = screen.getByRole('link', { name: /play video/i })
    expect(playBtn).toBeInTheDocument()
  })

  it('renders social icons', () => {
    render(<Hero />)
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
  })
})

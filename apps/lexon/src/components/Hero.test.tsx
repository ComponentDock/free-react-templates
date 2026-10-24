import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the main headline', () => {
    render(<Hero />)
    expect(screen.getByText(/we will fight/i)).toBeInTheDocument()
    expect(screen.getByText(/for you like a friend/i)).toBeInTheDocument()
  })

  it('renders the subtitle', () => {
    render(<Hero />)
    expect(screen.getByText('Professional lawyers')).toBeInTheDocument()
  })

  it('renders the consultation bar with phone number', () => {
    render(<Hero />)
    expect(screen.getByText(/schedule a free consultation/i)).toBeInTheDocument()
    expect(screen.getByText('01654.066.456')).toBeInTheDocument()
  })

  it('renders the video play button', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: /play video/i })).toBeInTheDocument()
  })
})

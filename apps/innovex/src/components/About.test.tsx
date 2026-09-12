import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders heading, description, and experience counter', () => {
    render(<About />)
    expect(screen.getByText('Highest Creative Standards')).toBeInTheDocument()
    expect(screen.getByText('42')).toBeInTheDocument()
    expect(screen.getByText(/Years Of/)).toBeInTheDocument()
    expect(screen.getByText('Welcome to Innovex')).toBeInTheDocument()
  })

  it('renders description paragraph', () => {
    render(<About />)
    expect(screen.getByText(/Far far away, behind the word mountains/)).toBeInTheDocument()
  })
})

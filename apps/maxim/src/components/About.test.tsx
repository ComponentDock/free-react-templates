import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the kicker and heading', () => {
    render(<About />)
    expect(screen.getByText('Welcome')).toBeInTheDocument()
    expect(screen.getByText('Welcome to Maxim A Law Firm')).toBeInTheDocument()
  })

  it('renders the about paragraphs', () => {
    render(<About />)
    expect(screen.getByText(/A small river named Duden/)).toBeInTheDocument()
  })

  it('renders the play button', () => {
    render(<About />)
    expect(screen.getByRole('button', { name: 'Play video' })).toBeInTheDocument()
  })
})

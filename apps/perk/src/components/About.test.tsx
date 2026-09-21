import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the subtitle', () => {
    render(<About />)
    expect(screen.getByText(/live coffee making process/i)).toBeInTheDocument()
  })

  it('renders the heading', () => {
    render(<About />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(/we telecast our/i)
  })

  it('renders description text', () => {
    render(<About />)
    expect(screen.getByText(/we are here to listen/i)).toBeInTheDocument()
  })

  it('renders play button', () => {
    render(<About />)
    expect(screen.getByRole('button', { name: /play video/i })).toBeInTheDocument()
  })
})

import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the section title with the accent line', () => {
    render(<About />)
    expect(screen.getByRole('heading', { level: 2, name: /about us/i })).toBeInTheDocument()
  })

  it('renders the descriptive copy and CTA buttons', () => {
    render(<About />)
    expect(screen.getByText(/renting a car simple/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /book a car/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /contact us/i })).toBeInTheDocument()
  })

  it('renders the video placeholder with a play button', () => {
    render(<About />)
    expect(screen.getByAltText('Fleet showcase video')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /play showcase video/i })).toBeInTheDocument()
  })
})

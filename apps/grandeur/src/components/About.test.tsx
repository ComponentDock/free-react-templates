import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { About } from './About'

describe('About', () => {
  it('renders the subtitle text', () => {
    render(<About />)
    expect(screen.getByText(/About Us · Our History/)).toBeDefined()
  })

  it('renders the heading', () => {
    render(<About />)
    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading.textContent).toContain('About Us Our History')
  })

  it('renders the description paragraph', () => {
    render(<About />)
    expect(screen.getByText(/We believe that exceptional hospitality/)).toBeDefined()
  })

  it('renders the Request Custom Price button', () => {
    render(<About />)
    expect(screen.getByText('Request Custom Price')).toBeDefined()
  })

  it('renders the video play button', () => {
    render(<About />)
    expect(screen.getByLabelText('Play hotel video')).toBeDefined()
  })

  it('renders the about image', () => {
    render(<About />)
    expect(screen.getByAltText('Hotel lounge')).toBeDefined()
  })
})

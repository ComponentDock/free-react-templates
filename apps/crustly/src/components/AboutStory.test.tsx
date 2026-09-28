import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { AboutStory } from './AboutStory'

describe('AboutStory', () => {
  it('renders the section heading', () => {
    render(<AboutStory />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('About Our Story')
  })

  it('renders the story paragraph', () => {
    render(<AboutStory />)
    expect(screen.getByText(/At Crustly, we believe/)).toBeInTheDocument()
  })

  it('renders the View Full Menu button', () => {
    render(<AboutStory />)
    expect(screen.getByText('View Full Menu')).toBeInTheDocument()
  })

  it('renders the image', () => {
    render(<AboutStory />)
    expect(screen.getByRole('img', { name: /our bakery story/i })).toBeInTheDocument()
  })
})

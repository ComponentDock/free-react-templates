import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import About from './About'

describe('About', () => {
  it('renders the heading', () => {
    render(<About />)
    expect(screen.getByText('About Myself')).toBeInTheDocument()
  })

  it('renders description paragraphs', () => {
    render(<About />)
    const paragraphs = screen.getAllByText(/Inappropriate behavior/)
    expect(paragraphs.length).toBeGreaterThanOrEqual(1)
  })

  it('renders the More Info button', () => {
    render(<About />)
    expect(screen.getByRole('link', { name: /more info/i })).toHaveAttribute('href', '#contact')
  })

  it('renders the about image', () => {
    render(<About />)
    expect(screen.getByAltText('About me')).toBeInTheDocument()
  })
})

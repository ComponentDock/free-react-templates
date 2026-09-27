import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders section title and image', () => {
    render(<About />)
    expect(screen.getByRole('heading', { name: 'About Us' })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'About Servhub' })).toBeInTheDocument()
  })

  it('renders descriptive paragraphs', () => {
    render(<About />)
    const paragraphs = screen.getAllByText(/Even the all-powerful Pointing/)
    expect(paragraphs.length).toBeGreaterThanOrEqual(2)
  })
})

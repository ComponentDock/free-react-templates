import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the section title', () => {
    render(<About />)
    expect(screen.getByText(/Introduce About Myself/)).toBeInTheDocument()
  })

  it('renders description text', () => {
    render(<About />)
    expect(screen.getByText(/Up my excuse to suffer/)).toBeInTheDocument()
  })

  it('renders the Read More button', () => {
    render(<About />)
    expect(screen.getByRole('link', { name: /read more/i })).toBeInTheDocument()
  })

  it('renders the about image', () => {
    render(<About />)
    expect(screen.getByAltText('Photographer portrait')).toBeInTheDocument()
  })
})

import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { About } from './About'

describe('About', () => {
  it('renders the heading', () => {
    render(<About />)
    expect(screen.getByText(/Introduce About/i)).toBeInTheDocument()
  })

  it('renders bio paragraphs', () => {
    render(<About />)
    expect(screen.getByText(/Passionate about creating/i)).toBeInTheDocument()
    expect(screen.getByText(/From concept to deployment/i)).toBeInTheDocument()
  })

  it('renders the Download CV button', () => {
    render(<About />)
    expect(screen.getByRole('button', { name: /download cv/i })).toBeInTheDocument()
  })

  it('renders the about image', () => {
    render(<About />)
    expect(screen.getByAltText('About Kael')).toBeInTheDocument()
  })
})

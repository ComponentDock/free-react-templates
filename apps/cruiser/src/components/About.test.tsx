import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the section heading', () => {
    render(<About />)
    expect(screen.getByRole('heading', { level: 2, name: 'About Cruiser' })).toBeInTheDocument()
  })

  it('renders all stat labels', () => {
    render(<About />)
    expect(screen.getByText('Years Experience')).toBeInTheDocument()
    expect(screen.getByText('Skaters Trained')).toBeInTheDocument()
    expect(screen.getByText('Events Hosted')).toBeInTheDocument()
    expect(screen.getByText('Community Members')).toBeInTheDocument()
  })

  it('renders stat counter values', () => {
    render(<About />)
    expect(screen.getByText('15+')).toBeInTheDocument()
    expect(screen.getByText('200+')).toBeInTheDocument()
    expect(screen.getByText('50+')).toBeInTheDocument()
    expect(screen.getByText('10K+')).toBeInTheDocument()
  })

  it('renders the video play button', () => {
    render(<About />)
    expect(screen.getByRole('button', { name: 'Play video' })).toBeInTheDocument()
  })

  it('renders the about image', () => {
    render(<About />)
    expect(screen.getByAltText('Skateboarding video')).toBeInTheDocument()
  })

  it('renders descriptive text', () => {
    render(<About />)
    expect(screen.getByText(/Founded by passionate skaters/)).toBeInTheDocument()
  })
})

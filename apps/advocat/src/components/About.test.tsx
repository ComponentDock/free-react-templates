import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { About } from './About'

describe('About', () => {
  it('renders heading and description', () => {
    render(<About />)
    expect(screen.getByRole('heading', { name: /80 years of experience/i })).toBeInTheDocument()
    expect(screen.getByText(/far far away, behind the word mountains/i)).toBeInTheDocument()
  })

  it('renders the about image with alt text', () => {
    render(<About />)
    expect(screen.getByRole('img', { name: /advocat team/i })).toBeInTheDocument()
  })

  it('renders play button', () => {
    render(<About />)
    expect(screen.getByRole('link', { name: /play introduction video/i })).toBeInTheDocument()
  })

  it('renders About Us subheading', () => {
    render(<About />)
    expect(screen.getByText('About Us')).toBeInTheDocument()
  })
})

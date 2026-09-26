import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import About from './About'

describe('About', () => {
  it('renders heading and personal info', () => {
    render(<About />)
    expect(screen.getByText('My Intro')).toBeInTheDocument()
    expect(screen.getByText('About Me')).toBeInTheDocument()
    expect(screen.getByText('Clydson Nowitzki')).toBeInTheDocument()
    expect(screen.getByText('clydson@gmail.com')).toBeInTheDocument()
  })

  it('renders interest icons', () => {
    render(<About />)
    expect(screen.getByText('Music')).toBeInTheDocument()
    expect(screen.getByText('Travel')).toBeInTheDocument()
    expect(screen.getByText('Movie')).toBeInTheDocument()
    expect(screen.getByText('Sports')).toBeInTheDocument()
  })
})

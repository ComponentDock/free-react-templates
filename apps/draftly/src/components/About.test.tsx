import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders About Me heading', () => {
    render(<About />)
    expect(screen.getByText('About Me')).toBeInTheDocument()
  })

  it('renders personal info', () => {
    render(<About />)
    expect(screen.getByText('Name:')).toBeInTheDocument()
    expect(screen.getByText('Draftly Nowitzki')).toBeInTheDocument()
    expect(screen.getByText('Email:')).toBeInTheDocument()
    expect(screen.getByText('hello@draftly.dev')).toBeInTheDocument()
  })

  it('renders interest tags', () => {
    render(<About />)
    expect(screen.getByText('Music')).toBeInTheDocument()
    expect(screen.getByText('Travel')).toBeInTheDocument()
    expect(screen.getByText('Movie')).toBeInTheDocument()
    expect(screen.getByText('Sports')).toBeInTheDocument()
  })

  it('renders My Intro subheading', () => {
    render(<About />)
    expect(screen.getByText('My Intro')).toBeInTheDocument()
  })
})

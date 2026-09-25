import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { AboutMe } from './AboutMe'

describe('AboutMe', () => {
  it('renders the section title', () => {
    render(<AboutMe />)
    expect(screen.getByText('About Me')).toBeInTheDocument()
  })

  it('renders the skills title', () => {
    render(<AboutMe />)
    expect(screen.getByText('My Skills')).toBeInTheDocument()
  })

  it('renders all three skill bars', () => {
    render(<AboutMe />)
    expect(screen.getByText('UI Design')).toBeInTheDocument()
    expect(screen.getByText('UX')).toBeInTheDocument()
    expect(screen.getByText('Illustration')).toBeInTheDocument()
  })

  it('renders skill percentages', () => {
    render(<AboutMe />)
    expect(screen.getByText('60%')).toBeInTheDocument()
    expect(screen.getByText('89%')).toBeInTheDocument()
    expect(screen.getByText('95%')).toBeInTheDocument()
  })

  it('renders the pull quote', () => {
    render(<AboutMe />)
    expect(screen.getByText(/Design is not just what it looks like/)).toBeInTheDocument()
  })
})

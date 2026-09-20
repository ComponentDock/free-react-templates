import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders heading and description', () => {
    render(<About />)

    expect(screen.getByRole('heading', { name: 'About LearnPath' })).toBeInTheDocument()
    expect(screen.getByText(/far far away, behind the word mountains/i)).toBeInTheDocument()
  })

  it('renders all four stat counters', () => {
    render(<About />)

    expect(screen.getByText('50M+')).toBeInTheDocument()
    expect(screen.getByText('Students Learning')).toBeInTheDocument()
    expect(screen.getByText('30K+')).toBeInTheDocument()
    expect(screen.getByText('Active Courses')).toBeInTheDocument()
    expect(screen.getByText('340M+')).toBeInTheDocument()
    expect(screen.getByText('Instructors Online')).toBeInTheDocument()
    expect(screen.getByText('20+')).toBeInTheDocument()
    expect(screen.getByText('Countries Reached')).toBeInTheDocument()
  })

  it('renders video placeholder image', () => {
    render(<About />)

    expect(screen.getByAltText('About LearnPath video')).toBeInTheDocument()
  })

  it('renders play button', () => {
    render(<About />)

    expect(screen.getByLabelText('Play video')).toBeInTheDocument()
  })
})

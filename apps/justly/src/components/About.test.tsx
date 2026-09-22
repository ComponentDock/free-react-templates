import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders About Me heading', () => {
    render(<About />)
    expect(screen.getByText('About Me')).toBeInTheDocument()
  })

  it('renders description text', () => {
    render(<About />)
    expect(screen.getByText(/decade of experience/)).toBeInTheDocument()
    expect(screen.getByText(/science-backed training/)).toBeInTheDocument()
  })

  it('renders My Courses button', () => {
    render(<About />)
    expect(screen.getByRole('link', { name: /my courses/i })).toHaveAttribute('href', '#courses')
  })

  it('renders about image', () => {
    render(<About />)
    expect(screen.getByAltText('About Justly')).toBeInTheDocument()
  })
})

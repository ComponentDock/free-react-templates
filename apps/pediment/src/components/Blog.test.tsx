import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the section heading', () => {
    render(<Blog />)
    expect(screen.getByText('From our blog')).toBeInTheDocument()
  })

  it('renders the section label', () => {
    render(<Blog />)
    expect(screen.getByText('Latest News')).toBeInTheDocument()
  })

  it('renders all 3 blog posts', () => {
    render(<Blog />)
    expect(screen.getByText('Target and Amazon Shopping List for Home Stagers')).toBeInTheDocument()
    expect(
      screen.getByText('6 Ideas for Team Building and Employee Appreciation for Home Stagers'),
    ).toBeInTheDocument()
    expect(
      screen.getByText('How to Find the Best Price Structure for Your Home Staging Services'),
    ).toBeInTheDocument()
  })

  it('renders post categories', () => {
    render(<Blog />)
    expect(screen.getByText('Architecture')).toBeInTheDocument()
    expect(screen.getByText('Interior')).toBeInTheDocument()
    expect(screen.getByText('Planning')).toBeInTheDocument()
  })

  it('renders Read more links', () => {
    render(<Blog />)
    const readMoreLinks = screen.getAllByText('Read more')
    expect(readMoreLinks.length).toBe(3)
  })

  it('renders the View All button', () => {
    render(<Blog />)
    expect(screen.getByRole('link', { name: 'View All' })).toBeInTheDocument()
  })
})

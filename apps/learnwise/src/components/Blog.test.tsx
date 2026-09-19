import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the section heading', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { name: 'From Our Blog' })).toBeInTheDocument()
  })

  it('renders two blog posts', () => {
    render(<Blog />)
    expect(screen.getByText('Effective Study Habits')).toBeInTheDocument()
    expect(screen.getByText('Online Learning Tips')).toBeInTheDocument()
  })

  it('renders blog post excerpts', () => {
    render(<Blog />)
    expect(screen.getByText(/Discover proven study techniques/)).toBeInTheDocument()
    expect(screen.getByText(/Maximize your online learning/)).toBeInTheDocument()
  })
})

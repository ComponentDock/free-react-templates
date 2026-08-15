import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the heading, subtitle and three blog entries', () => {
    render(<Blog />)

    expect(screen.getByRole('heading', { level: 2, name: 'Blog' })).toBeInTheDocument()
    expect(screen.getByText('Recent Blog')).toBeInTheDocument()

    const titles = [
      'Why great design is invisible to everyone but the user',
      'The craft behind a frictionless mobile experience',
      'How we turn research into interfaces people love',
    ]
    for (const title of titles) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }
    expect(screen.getAllByText(/July 12, 2018 · Admin · 3 comments/)).toHaveLength(3)
  })

  it('renders an image and an excerpt per entry', () => {
    render(<Blog />)
    const section = screen.getByRole('region', { name: 'Blog' })
    expect(section.querySelectorAll('img')).toHaveLength(3)
    expect(section.querySelectorAll('article p')).toHaveLength(6)
  })
})

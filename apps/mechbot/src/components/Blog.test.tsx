import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the section heading', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { name: 'Latest from Mechbot' })).toBeInTheDocument()
  })

  it('renders all three blog post cards', () => {
    render(<Blog />)
    expect(
      screen.getByRole('heading', { name: 'Getting Started with Mechbot Alpha' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'Building an Autonomous Rover' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'Top 10 STEM Projects with Mechbot' }),
    ).toBeInTheDocument()
  })

  it('renders Read More links for each post', () => {
    render(<Blog />)
    const readMoreLinks = screen.getAllByRole('link', { name: /Read More/i })
    expect(readMoreLinks).toHaveLength(3)
  })
})

import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the section heading', () => {
    render(<Blog />)

    expect(screen.getByRole('heading', { level: 2, name: /Tips & tricks/ })).toBeInTheDocument()
    expect(screen.getByText('Latest posts')).toBeInTheDocument()
  })

  it('renders all 4 blog posts', () => {
    render(<Blog />)

    const titles = [
      'How To Choose The Right Lock For Your Home',
      'Top 5 Security Tips For Small Businesses',
      'Smart Locks vs Traditional Locks: A Comparison',
      'Emergency Locksmith: What To Do When Locked Out',
    ]

    for (const title of titles) {
      expect(screen.getByText(title)).toBeInTheDocument()
    }
  })

  it('renders the View all link', () => {
    render(<Blog />)

    expect(screen.getByRole('link', { name: 'View all' })).toBeInTheDocument()
  })

  it('renders date and comments count for each post', () => {
    render(<Blog />)

    expect(screen.getByText('December 15, 2025')).toBeInTheDocument()
    expect(screen.getByText('5')).toBeInTheDocument()
  })
})

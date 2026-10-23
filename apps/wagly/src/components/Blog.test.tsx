import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the heading and the three post cards with read-more links', () => {
    render(<Blog />)

    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading.textContent).toBe('Recent Blog Post')

    expect(screen.getByText('How to Train Your Dog')).toBeInTheDocument()
    expect(screen.getByText('Find The Right Food For Your Dogs')).toBeInTheDocument()
    expect(screen.getByText("Dog's Affections To Owner")).toBeInTheDocument()

    expect(screen.getAllByRole('link', { name: 'Read more' })).toHaveLength(3)
    expect(screen.getAllByText('Feb 26th, 2018')).toHaveLength(3)
  })
})

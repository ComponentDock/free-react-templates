import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the section heading', () => {
    render(<Blog />)
    expect(screen.getByText('Read the latest post')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Blog Posts' })).toBeInTheDocument()
  })

  it('renders all four blog cards', () => {
    render(<Blog />)
    const titles = [
      'Undefined: The Third Boolean Value',
      'Where Do You Learn Modern CSS in 2025?',
      'Building Accessible React Components',
      'The Future of Web Development Tools',
    ]
    for (const title of titles) {
      expect(screen.getByRole('heading', { name: title })).toBeInTheDocument()
    }
  })

  it('renders author and date info', () => {
    render(<Blog />)
    const authors = screen.getAllByText('Jacob Smith')
    expect(authors.length).toBe(4)
    const dates = screen.getAllByText('7 Apr 2024')
    expect(dates.length).toBe(4)
  })
})

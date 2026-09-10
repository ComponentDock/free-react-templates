import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Blog } from '../components/Blog'

describe('Blog', () => {
  it('renders the Recent Blog heading', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { name: /recent blog/i })).toBeInTheDocument()
  })

  it('renders 4 blog post titles', () => {
    render(<Blog />)
    const titles = [
      'Amplify Your Blockchain Team',
      'Digital Marketing Trends',
      'UI Design Best Practices',
      'Building Scalable Products',
    ]
    titles.forEach((title) => {
      expect(screen.getByText(title)).toBeInTheDocument()
    })
  })

  it('renders blog post images', () => {
    render(<Blog />)
    const images = screen.getAllByRole('img')
    const blogImages = images.filter((img) => {
      const alt = img.getAttribute('alt')
      return alt && alt !== '' && !alt.includes('avatar')
    })
    expect(blogImages.length).toBeGreaterThanOrEqual(4)
  })

  it('renders dates', () => {
    render(<Blog />)
    const dates = screen.getAllByText('June 01, 2020')
    expect(dates.length).toBe(4)
  })

  it('renders author names', () => {
    render(<Blog />)
    const authors = screen.getAllByText('Admin')
    expect(authors.length).toBe(4)
  })

  it('renders comment counts', () => {
    render(<Blog />)
    const comments = screen.getAllByText('3')
    expect(comments.length).toBe(4)
  })
})

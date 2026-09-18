import { render, screen } from '@testing-library/react'
import { BlogPosts } from './BlogPosts'

describe('BlogPosts', () => {
  it('renders all 3 blog posts', () => {
    render(<BlogPosts />)
    expect(screen.getByText('Our Blog Posts')).toBeInTheDocument()
    expect(screen.getByText('Finding Your Purpose')).toBeInTheDocument()
    expect(screen.getByText('The Power of Habits')).toBeInTheDocument()
    expect(screen.getByText('Work-Life Balance')).toBeInTheDocument()
  })
})

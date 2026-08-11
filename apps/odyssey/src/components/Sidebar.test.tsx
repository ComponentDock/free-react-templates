import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Sidebar } from './Sidebar'
import { categories, popularPosts } from '../data'

describe('Sidebar', () => {
  it('renders the search widget with a search input and a search button', async () => {
    const user = userEvent.setup()
    render(<Sidebar />)
    expect(screen.getByRole('textbox', { name: 'Search Posts' })).toBeInTheDocument()
    const searchButton = screen.getByRole('button', { name: 'Search' })
    expect(searchButton).toBeInTheDocument()
    await user.click(searchButton)
    expect(searchButton).toBeInTheDocument()
  })

  it('renders the author widget with avatar, name, role, bio, and social icons', () => {
    render(<Sidebar />)
    expect(screen.getByRole('heading', { name: 'Charlie ALison Barber' })).toBeInTheDocument()
    expect(screen.getByText('Senior blog writer')).toBeInTheDocument()
    expect(screen.getByLabelText('About the author')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Visit Facebook profile' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Visit Behance profile' })).toBeInTheDocument()
  })

  it('renders the popular posts list with thumbnails and relative timestamps', () => {
    render(<Sidebar />)
    expect(screen.getByRole('heading', { name: 'Popular Posts' })).toBeInTheDocument()
    for (const post of popularPosts) {
      expect(screen.getByRole('heading', { name: post.title })).toBeInTheDocument()
    }
    expect(screen.getAllByText('02 hours ago')).toHaveLength(popularPosts.length)
  })

  it('renders the post categories list with names and counts', () => {
    render(<Sidebar />)
    expect(screen.getByRole('heading', { name: 'Post Categories' })).toBeInTheDocument()
    for (const row of categories) {
      expect(screen.getByText(row.name)).toBeInTheDocument()
      expect(screen.getByText(row.count)).toBeInTheDocument()
    }
  })

  it('shows an error when an invalid email is submitted to the newsletter', async () => {
    const user = userEvent.setup()
    render(<Sidebar />)
    const input = screen.getByRole('textbox', { name: 'Email Address' })
    await user.type(input, 'not-an-email')
    await user.click(screen.getByRole('button', { name: /Subscribe Now/ }))
    expect(screen.getByRole('alert')).toHaveTextContent('Please enter a valid email address.')
  })

  it('shows a confirmation when a valid email is submitted to the newsletter', async () => {
    const user = userEvent.setup()
    render(<Sidebar />)
    const input = screen.getByRole('textbox', { name: 'Email Address' })
    await user.type(input, 'reader@example.com')
    await user.click(screen.getByRole('button', { name: /Subscribe Now/ }))
    expect(screen.getByRole('status')).toHaveTextContent('Thanks for subscribing!')
  })
})

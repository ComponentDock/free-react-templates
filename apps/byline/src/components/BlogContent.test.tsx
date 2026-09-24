import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BlogContent } from './BlogContent'

describe('BlogContent', () => {
  it('renders the featured post title', () => {
    render(<BlogContent />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(/front porch collection/i)
  })

  it('renders blog post cards', () => {
    render(<BlogContent />)
    expect(screen.getAllByText(/travel tuesday/i).length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText(/wedding guest style/i).length).toBeGreaterThanOrEqual(1)
  })

  it('renders sidebar sections', () => {
    render(<BlogContent />)
    expect(screen.getByText('About Byline')).toBeInTheDocument()
    expect(screen.getByText('Categories')).toBeInTheDocument()
    expect(screen.getByText('Latest Posts')).toBeInTheDocument()
    expect(screen.getByText('Newsletter')).toBeInTheDocument()
    expect(screen.getByText('Tags')).toBeInTheDocument()
  })

  it('renders newsletter form', () => {
    render(<BlogContent />)
    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /subscribe/i })).toBeInTheDocument()
  })

  it('renders category links', () => {
    render(<BlogContent />)
    expect(screen.getByText('Features')).toBeInTheDocument()
    expect(screen.getAllByText('Travel').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Food').length).toBeGreaterThanOrEqual(1)
  })

  it('renders share icons on featured post', () => {
    render(<BlogContent />)
    const shareButtons = screen.getAllByLabelText('Share')
    expect(shareButtons.length).toBe(4)
  })

  it('allows subscribing to newsletter', async () => {
    const user = userEvent.setup()
    render(<BlogContent />)
    const input = screen.getByLabelText(/email address/i)
    const button = screen.getByRole('button', { name: /subscribe/i })

    await user.type(input, 'test@example.com')
    await user.click(button)

    // Form submits without error (onSubmit prevents default)
    expect(input).toHaveValue('test@example.com')
  })
})

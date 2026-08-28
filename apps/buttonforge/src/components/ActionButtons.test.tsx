import { render, screen } from '@testing-library/react'
import { ActionButtons } from './ActionButtons'

describe('ActionButtons', () => {
  it('renders action buttons with correct labels', () => {
    render(<ActionButtons />)
    expect(screen.getByRole('button', { name: /watch photos/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /download/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /add comment/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /like/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /create account/i })).toBeInTheDocument()
  })

  it('renders 5 action buttons total', () => {
    render(<ActionButtons />)
    const buttons = screen.getAllByRole('button')
    expect(buttons.length).toBe(5)
  })

  it('shows a badge count on the Like button', () => {
    render(<ActionButtons />)
    const likeBtn = screen.getByRole('button', { name: /like/i })
    expect(likeBtn.textContent).toMatch(/\d/)
  })
})

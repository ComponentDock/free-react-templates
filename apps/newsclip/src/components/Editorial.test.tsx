import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { act, fireEvent, render, screen } from '@testing-library/react'
import { Editorial } from './Editorial'
import { editorialPosts } from '../data'

describe('Editorial', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it("renders the Editor's Pick heading", () => {
    render(<Editorial />)
    expect(screen.getByText(/Editor's Pick/)).toBeInTheDocument()
  })

  it('renders the first editorial post visible', () => {
    render(<Editorial />)
    const first = editorialPosts[0]!
    expect(screen.getByText(first.title)).toBeInTheDocument()
    expect(screen.getByText(first.excerpt)).toBeInTheDocument()
    expect(screen.getAllByText(first.category).length).toBeGreaterThan(0)
  })

  it('auto-advances to the next editorial post', () => {
    render(<Editorial />)
    const second = editorialPosts[1]!
    expect(screen.queryByText(second.title)).not.toBeInTheDocument()
    act(() => {
      vi.advanceTimersByTime(6000)
    })
    expect(screen.getByText(second.title)).toBeInTheDocument()
    expect(screen.queryByText(editorialPosts[0]!.title)).not.toBeInTheDocument()
  })

  it('navigates to previous editorial post', () => {
    render(<Editorial />)
    fireEvent.click(screen.getByRole('button', { name: 'Previous editorial' }))
    expect(screen.getByText(editorialPosts[2]!.title)).toBeInTheDocument()
    expect(screen.queryByText(editorialPosts[0]!.title)).not.toBeInTheDocument()
  })

  it('navigates to next editorial post', () => {
    render(<Editorial />)
    fireEvent.click(screen.getByRole('button', { name: 'Next editorial' }))
    expect(screen.getByText(editorialPosts[1]!.title)).toBeInTheDocument()
    expect(screen.queryByText(editorialPosts[0]!.title)).not.toBeInTheDocument()
  })

  it('navigates to a specific editorial post via dot', () => {
    render(<Editorial />)
    fireEvent.click(screen.getByRole('button', { name: 'Go to editorial 3' }))
    expect(screen.getByText(editorialPosts[2]!.title)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Go to editorial 3' })).toHaveAttribute(
      'aria-current',
      'true',
    )
  })

  it('wraps around when advancing past the last editorial', () => {
    render(<Editorial />)
    fireEvent.click(screen.getByRole('button', { name: 'Go to editorial 3' }))
    expect(screen.getByText(editorialPosts[2]!.title)).toBeInTheDocument()
    fireEvent.click(screen.getByRole('button', { name: 'Next editorial' }))
    expect(screen.getByText(editorialPosts[0]!.title)).toBeInTheDocument()
    expect(screen.queryByText(editorialPosts[2]!.title)).not.toBeInTheDocument()
  })

  it('renders Continue Reading links', () => {
    render(<Editorial />)
    expect(screen.getAllByText('Continue Reading').length).toBeGreaterThanOrEqual(1)
  })
})

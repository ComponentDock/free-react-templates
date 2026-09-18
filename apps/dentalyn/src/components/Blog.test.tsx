import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('shows heading and three blog post titles', () => {
    render(<Blog />)

    expect(screen.getByRole('heading', { name: 'The Latest News' })).toBeInTheDocument()
    expect(screen.getByText('How your mouth bacteria can harm your lungs')).toBeInTheDocument()
    expect(screen.getByText('What is the best kind of toothpaste to use?')).toBeInTheDocument()
    expect(screen.getByText('Why you should avoid sipping your drinks')).toBeInTheDocument()
  })

  it('shows date and comment count for each post', () => {
    render(<Blog />)

    const dates = screen.getAllByText('28 Sep')
    expect(dates.length).toBe(3)

    const comments = screen.getAllByText('3 Comments')
    expect(comments.length).toBe(3)
  })
})

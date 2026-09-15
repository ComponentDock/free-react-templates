import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders heading and three blog cards', () => {
    render(<Blog />)
    expect(screen.getByText('Recent Blog')).toBeInTheDocument()
    expect(screen.getByText('Top 10 Tasks to Delegate to a Virtual Assistant')).toBeInTheDocument()
    expect(
      screen.getByText('How Virtual Assistants Are Transforming Small Businesses'),
    ).toBeInTheDocument()
    expect(screen.getByText('The Future of Remote Work and Virtual Assistance')).toBeInTheDocument()
  })

  it('renders blog dates and images', () => {
    render(<Blog />)
    expect(screen.getByText('Sep 10, 2026')).toBeInTheDocument()
    expect(screen.getByText('Sep 5, 2026')).toBeInTheDocument()
    expect(screen.getByText('Sep 1, 2026')).toBeInTheDocument()
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(3)
  })
})

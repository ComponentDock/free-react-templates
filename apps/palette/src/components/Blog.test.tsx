import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the blog heading', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { name: 'Latest Blog' })).toBeInTheDocument()
  })

  it('renders all three blog posts with titles', () => {
    render(<Blog />)

    expect(
      screen.getByRole('heading', { name: 'The Future of UI Design in 2024' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'Mastering Tailwind CSS for Modern Projects' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'Why UX Research Matters More Than Ever' }),
    ).toBeInTheDocument()
  })

  it('renders post metadata', () => {
    render(<Blog />)
    expect(screen.getByText('Sep 15, 2024')).toBeInTheDocument()
    expect(screen.getAllByText(/John Doe/).length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('12 Comments')).toBeInTheDocument()
  })
})

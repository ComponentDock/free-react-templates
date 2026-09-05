import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the heading and all blog post cards', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { name: /Latest From Blog/i })).toBeInTheDocument()
    expect(
      screen.getByText('Understanding Your Legal Rights as a Business Owner'),
    ).toBeInTheDocument()
    expect(screen.getByText('Navigating Divorce: What You Need to Know')).toBeInTheDocument()
    expect(screen.getByText('Essential Steps for Effective Estate Planning')).toBeInTheDocument()
  })
})

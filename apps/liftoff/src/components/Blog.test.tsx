import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the title and three blog cards', () => {
    render(<Blog />)

    expect(screen.getByRole('heading', { name: 'Blog Posts' })).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: 'Planning Your Growth Roadmap for the Next Quarter' }),
    ).toBeInTheDocument()
    expect(screen.getByText('Ham Brook • Jan 18, 2019 • News')).toBeInTheDocument()
    expect(screen.getByText('Five Signals That Your Startup Is Ready to Scale')).toBeInTheDocument()
    expect(screen.getByText('How Customer Feedback Shapes Product Design')).toBeInTheDocument()

    expect(screen.getAllByRole('link', { name: 'Continue Reading...' })).toHaveLength(3)
  })
})

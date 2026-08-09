import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('shows the section heading and a Learn more button', () => {
    render(<About />)
    expect(screen.getByRole('heading', { name: /Looking for lessons/i })).toBeInTheDocument()
    expect(screen.getByText(/Welcome to/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Learn more' })).toHaveAttribute('href', '#courses')
  })
})

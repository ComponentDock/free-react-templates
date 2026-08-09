import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the kicker, heading, and three post cards', () => {
    render(<Blog />)
    expect(screen.getByText(/^Blog$/i)).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Recent Blog/i })).toBeInTheDocument()
    expect(
      screen.getAllByRole('heading', { name: /Why Lead Generation is Key for Business Growth/i }),
    ).toHaveLength(3)
    expect(screen.getAllByText(/July\. 24, 2019/i)).toHaveLength(3)
  })
})

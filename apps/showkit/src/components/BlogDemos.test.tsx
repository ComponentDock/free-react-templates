import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BlogDemos } from './BlogDemos'

describe('BlogDemos', () => {
  it('renders the heading and the four blog demo cards', () => {
    render(<BlogDemos />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Showkit Blog Page Demos' }),
    ).toBeInTheDocument()

    expect(screen.getByRole('link', { name: /Blog List - 01/ })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Blog List - 02/ })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Blog Details - 01/ })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Blog Details - 02/ })).toBeInTheDocument()
  })
})

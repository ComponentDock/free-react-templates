import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { LoadMore } from './LoadMore'

describe('LoadMore', () => {
  it('renders the Load More link button', () => {
    render(<LoadMore />)

    const button = screen.getByRole('link', { name: 'Load More' })
    expect(button).toHaveAttribute('href', '#top')
  })
})

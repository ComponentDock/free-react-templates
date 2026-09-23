import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { LoadMore } from './LoadMore'

describe('LoadMore', () => {
  it('renders a load more button', () => {
    render(<LoadMore />)
    expect(screen.getByRole('link', { name: /load more/i })).toBeInTheDocument()
  })

  it('has a circular background', () => {
    const { container } = render(<LoadMore />)
    const link = container.querySelector('a')
    expect(link).toHaveClass('rounded-full')
  })
})

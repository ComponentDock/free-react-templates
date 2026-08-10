import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { LoadMore } from './LoadMore'
import { loadMoreLabel } from '../data'

describe('LoadMore', () => {
  it('renders the block button on the dark overlay background', () => {
    render(<LoadMore />)
    const button = screen.getByRole('link', { name: loadMoreLabel })
    expect(button).toHaveAttribute('href', '#top')
    expect(button).toHaveClass('bg-overlay')
    expect(button).toHaveClass('text-cream')
  })
})

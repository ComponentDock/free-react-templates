import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { NewsTicker } from './NewsTicker'
import { breakingNewsHeadline, breakingNewsLabel } from '../data'

describe('NewsTicker', () => {
  it('shows the breaking-news label in the accent color followed by a headline link', () => {
    render(<NewsTicker />)

    const label = screen.getByText(breakingNewsLabel)
    expect(label).toBeInTheDocument()
    expect(screen.getByRole('link', { name: breakingNewsHeadline })).toBeInTheDocument()
  })
})

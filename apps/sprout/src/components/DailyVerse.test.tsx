import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { DailyVerse } from './DailyVerse'

describe('DailyVerse', () => {
  it('renders the scripture text and attribution', () => {
    render(<DailyVerse />)
    expect(screen.getByText(/for god so loved the world/i)).toBeInTheDocument()
    expect(screen.getByText(/john 3:16 kjv/i)).toBeInTheDocument()
  })
})

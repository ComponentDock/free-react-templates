import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { VideoBand } from './VideoBand'
import { successQuotes } from '../data'

describe('VideoBand', () => {
  it('renders a pulsing play button, heading and video thumbnail', () => {
    render(<VideoBand />)
    expect(screen.getByRole('button', { name: 'Play video' })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: /Members Success Stories/ }),
    ).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Play member video' })).toBeInTheDocument()
  })

  it('shows the two member success quotes', () => {
    render(<VideoBand />)
    for (const quote of successQuotes) {
      expect(screen.getByText(new RegExp(quote.slice(0, 24)))).toBeInTheDocument()
    }
  })
})

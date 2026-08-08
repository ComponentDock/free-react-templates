import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { WatchListen } from './WatchListen'

describe('WatchListen', () => {
  it('shows the section heading and View All Messages link', () => {
    render(<WatchListen />)

    expect(screen.getByRole('heading', { level: 2, name: /Recent Messages/ })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /View All Messages/ })).toBeInTheDocument()
  })

  it('shows the four message cards with titles, badges and meta', () => {
    render(<WatchListen />)

    const cards: Array<[string, string, RegExp]> = [
      ['Unshakeable Peace in the Storm', '38:24', /Pastor David Chen · January 19, 2025/],
      ['Unshakeable Faith Over Fear', '35:52', /Pastor David Chen · January 12, 2025/],
      ['Unshakeable Built to Last', '32:10', /Pastor David Chen · January 5, 2025/],
      ['The Gift of Hope', 'Christmas', /Pastor Sarah Mitchell · December 24, 2024/],
    ]

    for (const [title, badge, meta] of cards) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
      expect(screen.getByText(badge)).toBeInTheDocument()
      expect(screen.getByText(meta)).toBeInTheDocument()
    }

    expect(screen.getByAltText('Unshakeable Peace in the Storm')).toBeInTheDocument()
    expect(screen.getByAltText('The Gift of Hope')).toBeInTheDocument()
  })

  it('shows the Watch Live Every Sunday CTA', () => {
    render(<WatchListen />)

    const cta = screen.getByRole('link', { name: /Watch Live Every Sunday/ })
    expect(cta).toHaveAttribute('href', '#watch')
  })
})

import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Sermons } from './Sermons'

describe('Sermons', () => {
  it('shows the Recent Sermons heading and intro', () => {
    render(<Sermons />)

    expect(screen.getByRole('heading', { level: 2, name: /Recent Sermons/ })).toBeInTheDocument()
    expect(
      screen.getByText(/Missed a Sunday\? Catch up on our latest messages/),
    ).toBeInTheDocument()
  })

  it('shows four sermon cards with series, title, speaker and date', () => {
    render(<Sermons />)

    const sermons = [
      [
        'Faith Over Fear',
        'Finding Peace in Uncertain Times',
        'Pastor James Thompson',
        'March 3, 2025',
      ],
      ['Better Together', 'The Power of Community', 'Pastor Rachel Kim', 'February 24, 2025'],
      ['Created for More', 'Living with Purpose', 'Pastor James Thompson', 'February 17, 2025'],
      [
        'Grace That Changes Everything',
        'Grace That Changes Everything',
        'Pastor James Thompson',
        'February 10, 2025',
      ],
    ] as const

    for (const [series, title, speaker, date] of sermons) {
      // Series badges can repeat a sermon title; speakers repeat across cards
      expect(screen.getAllByText(series).length).toBeGreaterThanOrEqual(1)
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
      expect(screen.getAllByText(speaker).length).toBeGreaterThanOrEqual(1)
      expect(screen.getByText(date)).toBeInTheDocument()
    }
  })

  it('shows sermon card images and a View All Sermons link', () => {
    render(<Sermons />)

    const images = screen.getAllByRole('img')
    expect(images.length).toBe(4)
    for (const image of images) {
      expect(image).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
    }

    expect(screen.getByRole('link', { name: /View All Sermons/ })).toBeInTheDocument()
  })
})

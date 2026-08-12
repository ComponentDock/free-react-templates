import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Youtube } from './Youtube'
import { videos } from '../data'

describe('Youtube', () => {
  it('shows the title pair and three video cards with play links and titles', () => {
    render(<Youtube />)

    expect(screen.getByRole('heading', { level: 2 }).textContent).toMatch(/Youtube feed/)

    for (const video of videos) {
      const link = screen.getByRole('link', { name: `Watch ${video.title}` })
      expect(link).toHaveAttribute('href', video.url)
      expect(link).toHaveAttribute('target', '_blank')
      expect(screen.getByRole('heading', { name: video.title })).toBeInTheDocument()
    }
  })
})

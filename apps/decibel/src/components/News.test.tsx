import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { News } from './News'

describe('News', () => {
  it('shows the heading and three distinct news posts', () => {
    render(<News />)
    expect(screen.getByRole('heading', { name: 'News & Events' })).toBeInTheDocument()

    for (const title of [
      'This Is The Day, Party, Party!',
      'New Studio Sessions Every Friday Night',
      'Decibel Wins Community Radio Award',
    ]) {
      expect(screen.getByRole('heading', { name: title })).toBeInTheDocument()
    }
    for (const date of ['Jan 20th, 2019', 'Feb 2nd, 2019', 'Mar 8th, 2019']) {
      expect(screen.getByText(date)).toBeInTheDocument()
    }
  })
})

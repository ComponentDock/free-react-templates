import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { WeeklyTopNews } from './WeeklyTopNews'

describe('WeeklyTopNews', () => {
  it('renders the Weekly Top News heading', () => {
    render(<WeeklyTopNews />)
    expect(screen.getByRole('heading', { name: /Weekly Top News/i })).toBeInTheDocument()
  })

  it('renders four news cards with images and titles', () => {
    render(<WeeklyTopNews />)
    const headings = screen.getAllByRole('heading', { level: 3 })
    expect(headings).toHaveLength(4)
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(4)
    for (const img of images) {
      expect(img).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
    }
  })
})

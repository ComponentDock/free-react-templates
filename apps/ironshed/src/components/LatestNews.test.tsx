import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { LatestNews } from './LatestNews'

describe('LatestNews', () => {
  it('renders the section title', () => {
    render(<LatestNews />)
    expect(screen.getByRole('heading', { name: 'Latest News' })).toBeInTheDocument()
  })

  it('displays 3 blog cards with titles, dates, and comment counts', () => {
    render(<LatestNews />)

    expect(screen.getByRole('link', { name: /How to Build Lean Muscle/ })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Top 5 Cardio Exercises/ })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Benefits of Yoga/ })).toBeInTheDocument()

    expect(screen.getByText('May 4, 2026')).toBeInTheDocument()
    expect(screen.getByText('12 Comments')).toBeInTheDocument()
  })

  it('renders news images with picsum URLs', () => {
    render(<LatestNews />)
    const images = screen.getAllByRole('img')
    const newsImages = images.filter((img) => img.getAttribute('src')?.includes('ironshed-news'))
    expect(newsImages).toHaveLength(3)
  })
})

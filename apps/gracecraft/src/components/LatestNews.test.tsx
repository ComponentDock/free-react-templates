import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { LatestNews } from './LatestNews'

describe('LatestNews', () => {
  it('shows section title and 3 news posts', () => {
    render(<LatestNews />)
    expect(screen.getByRole('heading', { name: /latest news/i })).toBeInTheDocument()
    const articles = screen.getAllByRole('article')
    expect(articles).toHaveLength(3)
  })

  it('shows author, date, and comment count for each post', () => {
    render(<LatestNews />)
    expect(screen.getAllByText(/Josh Brighton/).length).toBe(2)
    expect(screen.getByText(/Ashley Young/)).toBeInTheDocument()
    expect(screen.getAllByText(/08 MAR, 2018/).length).toBe(2)
    expect(screen.getByText('15')).toBeInTheDocument()
    expect(screen.getByText('12')).toBeInTheDocument()
    expect(screen.getByText('10')).toBeInTheDocument()
  })

  it('displays post excerpts', () => {
    render(<LatestNews />)
    expect(screen.getByText(/heartwarming story/)).toBeInTheDocument()
    expect(screen.getByText(/historic moment/)).toBeInTheDocument()
  })
})

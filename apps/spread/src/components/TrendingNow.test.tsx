import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TrendingNow } from './TrendingNow'

describe('TrendingNow', () => {
  it('renders the section heading', () => {
    render(<TrendingNow />)
    expect(screen.getByText('Trending Now')).toBeInTheDocument()
  })

  it('renders 3 trending posts', () => {
    render(<TrendingNow />)
    expect(screen.getByText('Big Savings On Gas While You Travel')).toBeInTheDocument()
    expect(screen.getByText('The Health Benefits Of Sunglasses')).toBeInTheDocument()
    expect(screen.getByText('American Standards And European Culture')).toBeInTheDocument()
  })

  it('renders category labels', () => {
    render(<TrendingNow />)
    expect(screen.getByText('Travel')).toBeInTheDocument()
    expect(screen.getByText('Health')).toBeInTheDocument()
    expect(screen.getByText('Lifestyle')).toBeInTheDocument()
  })

  it('renders post stats', () => {
    render(<TrendingNow />)
    expect(screen.getByText('3.8k')).toBeInTheDocument()
    expect(screen.getByText('256')).toBeInTheDocument()
    expect(screen.getByText('34')).toBeInTheDocument()
  })
})

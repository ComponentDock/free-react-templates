import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { LatestNews } from './LatestNews'

describe('LatestNews', () => {
  it('renders the section heading', () => {
    render(<LatestNews />)
    expect(screen.getByText('Latest News')).toBeInTheDocument()
  })

  it('renders 4 news items', () => {
    render(<LatestNews />)
    const items = screen.getAllByText(/DFacts|How To Choose|Smart Living|Digital Marketing/)
    expect(items).toHaveLength(4)
  })

  it('renders category badges', () => {
    render(<LatestNews />)
    const badges = screen.getAllByText('Gadgets')
    expect(badges.length).toBeGreaterThanOrEqual(4)
  })
})

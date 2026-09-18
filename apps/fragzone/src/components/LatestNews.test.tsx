import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { LatestNews } from './LatestNews'

describe('LatestNews', () => {
  it('renders Latest News label', () => {
    render(<LatestNews />)
    expect(screen.getByText('Latest News')).toBeInTheDocument()
  })

  it('renders news items with badges', () => {
    render(<LatestNews />)
    expect(screen.getByText('New')).toBeInTheDocument()
    expect(screen.getByText('Hot')).toBeInTheDocument()
    expect(screen.getByText('Patch')).toBeInTheDocument()
  })

  it('renders news text', () => {
    render(<LatestNews />)
    expect(screen.getByText(/Major update drops/)).toBeInTheDocument()
    expect(screen.getByText(/Community tournament/)).toBeInTheDocument()
    expect(screen.getByText(/Season 4 balance/)).toBeInTheDocument()
  })
})

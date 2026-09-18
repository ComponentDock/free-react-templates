import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { LatestNews } from './LatestNews'

describe('LatestNews', () => {
  it('renders heading', () => {
    render(<LatestNews />)
    expect(screen.getByText('Latest News')).toBeInTheDocument()
  })

  it('renders blog posts', () => {
    render(<LatestNews />)
    expect(screen.getByText('Building the Future')).toBeInTheDocument()
    expect(screen.getByText('Modern Architecture Trends')).toBeInTheDocument()
    expect(screen.getByText('Sustainable Construction')).toBeInTheDocument()
  })

  it('renders post dates', () => {
    render(<LatestNews />)
    expect(screen.getByText('Sep 10, 2025')).toBeInTheDocument()
    expect(screen.getByText('Sep 08, 2025')).toBeInTheDocument()
    expect(screen.getByText('Sep 05, 2025')).toBeInTheDocument()
  })
})

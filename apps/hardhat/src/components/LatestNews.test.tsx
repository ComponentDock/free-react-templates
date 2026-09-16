import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { LatestNews } from './LatestNews'

describe('LatestNews', () => {
  it('renders the section heading and two blog posts', () => {
    render(<LatestNews />)

    expect(screen.getByRole('heading', { name: 'Latest News' })).toBeInTheDocument()
    expect(
      screen.getByText('Why Construction Quality Matters in Modern Building'),
    ).toBeInTheDocument()
    expect(
      screen.getByText('Latest Trends in Sustainable Construction Materials'),
    ).toBeInTheDocument()
  })

  it('shows date badges and category labels', () => {
    render(<LatestNews />)

    expect(screen.getAllByText('Properties')).toHaveLength(2)
    expect(screen.getAllByText('24')).toHaveLength(2)
  })

  it('renders Read more links', () => {
    render(<LatestNews />)

    const links = screen.getAllByText('Read more')
    expect(links).toHaveLength(2)
  })
})

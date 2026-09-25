import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { LatestNews } from './LatestNews'

describe('LatestNews', () => {
  it('renders the Latest News heading', () => {
    render(<LatestNews />)
    expect(screen.getByRole('heading', { level: 2, name: /Latest News/ })).toBeInTheDocument()
  })

  it('renders news post titles', () => {
    render(<LatestNews />)
    expect(screen.getByText(/Radio stations across the country/)).toBeInTheDocument()
    expect(screen.getByText(/Annual music festival/)).toBeInTheDocument()
    expect(screen.getByText(/New streaming platform launches/)).toBeInTheDocument()
  })
})

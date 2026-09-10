import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { LatestNews } from './LatestNews'

describe('LatestNews', () => {
  it('renders the section heading', () => {
    render(<LatestNews />)

    expect(screen.getByRole('heading', { level: 2, name: 'Latest News' })).toBeInTheDocument()
  })

  it('renders all three news cards', () => {
    render(<LatestNews />)

    expect(
      screen.getByRole('heading', { level: 3, name: 'Essential Engine Maintenance Tips' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 3, name: 'Choosing the Right Oil for Your Car' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 3, name: 'Signs Your Brakes Need Attention' }),
    ).toBeInTheDocument()
  })

  it('renders Continue Reading links for each article', () => {
    render(<LatestNews />)

    const links = screen.getAllByRole('link', { name: 'Continue Reading' })
    expect(links).toHaveLength(3)
  })

  it('renders author and date info', () => {
    render(<LatestNews />)

    expect(screen.getByText(/By Alex Rivera/)).toBeInTheDocument()
    expect(screen.getByText(/By Maria Chen/)).toBeInTheDocument()
    expect(screen.getByText(/By James Park/)).toBeInTheDocument()
  })
})

import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { RecentSermons } from './RecentSermons'

describe('RecentSermons', () => {
  it('renders the heading and sermon cards with buttons', () => {
    render(<RecentSermons />)
    expect(screen.getByRole('heading', { name: /recent sermons/i })).toBeInTheDocument()
    expect(screen.getByText(/walking in faith through trials/i)).toBeInTheDocument()
    expect(screen.getByText(/the power of forgiveness/i)).toBeInTheDocument()
    expect(screen.getByText(/building a legacy of grace/i)).toBeInTheDocument()
    const watchLinks = screen.getAllByRole('link', { name: /watch sermons/i })
    expect(watchLinks.length).toBeGreaterThanOrEqual(3)
    const downloadLinks = screen.getAllByRole('link', { name: /download sermons/i })
    expect(downloadLinks.length).toBeGreaterThanOrEqual(3)
  })
})

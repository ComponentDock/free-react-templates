import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { HeaderTopBar } from './HeaderTopBar'

describe('HeaderTopBar', () => {
  it('renders the date', () => {
    render(<HeaderTopBar />)
    expect(screen.getByText(/September 24, 2026/i)).toBeInTheDocument()
  })

  it('renders social icon links with target="_blank"', () => {
    render(<HeaderTopBar />)
    for (const label of ['Twitter', 'Instagram', 'Pinterest']) {
      const link = screen.getByRole('link', { name: label })
      expect(link).toHaveAttribute('target', '_blank')
      expect(link).toHaveAttribute('rel', 'noopener noreferrer')
    }
  })

  it('renders the weather/location info', () => {
    render(<HeaderTopBar />)
    expect(screen.getByText(/San Francisco, CA/i)).toBeInTheDocument()
  })
})

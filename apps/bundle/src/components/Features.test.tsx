import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('renders the section heading and four maintenance tiles with blurbs', () => {
    render(<Features />)

    expect(screen.getByRole('heading', { level: 2, name: 'Unique Features' })).toBeInTheDocument()

    expect(screen.getAllByRole('heading', { level: 3, name: 'Maintenance' })).toHaveLength(4)

    expect(screen.getByText(/proactive upkeep, updates, and care/)).toBeInTheDocument()
    expect(screen.getByText(/encrypted storage, and dependable backups/)).toBeInTheDocument()
    expect(screen.getByText(/Lightning-fast loading and instant responses/)).toBeInTheDocument()
    expect(screen.getByText(/Friendly human support whenever you need it/)).toBeInTheDocument()
  })
})

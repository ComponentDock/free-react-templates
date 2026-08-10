import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the Recent Blog heading', () => {
    render(<Blog />)

    expect(screen.getByRole('heading', { level: 2, name: 'Recent Blog' })).toBeInTheDocument()
  })

  it('renders three post cards including the featured post', () => {
    render(<Blog />)

    expect(
      screen.getByRole('heading', { level: 3, name: "Asia's Next Top Model" }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Backstage Moments' })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 3, name: 'Runway Trends 2019' }),
    ).toBeInTheDocument()
  })

  it('shows post metadata (date, author, comments)', () => {
    render(<Blog />)

    expect(screen.getByText('May 17, 2019')).toBeInTheDocument()
    expect(screen.getAllByText('Admin').length).toBeGreaterThanOrEqual(1)
  })
})

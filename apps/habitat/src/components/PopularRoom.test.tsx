import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { PopularRoom } from './PopularRoom'

describe('PopularRoom', () => {
  it('renders a slide with title, description, stats, price and Best Deal badge', () => {
    render(<PopularRoom />)
    expect(
      screen.getByRole('heading', { level: 3, name: 'Spacious Modern Smart House' }),
    ).toBeInTheDocument()
    expect(screen.getByText('Best Deal')).toBeInTheDocument()
    expect(screen.getByText('For Sale')).toBeInTheDocument()
    expect(screen.getByText('$345,000')).toBeInTheDocument()
    expect(screen.getAllByText('Lot Size')).toHaveLength(1)
    expect(screen.getByRole('link', { name: 'View Property' })).toBeInTheDocument()
  })

  it('advances and wraps through the slides with prev/next and dots', async () => {
    const user = userEvent.setup()
    render(<PopularRoom />)
    expect(screen.getByText('Spacious Modern Smart House')).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Next property' }))
    expect(screen.getByText('Classic Estate with private garden')).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Next property' }))
    expect(screen.getByText('Penthouse Residence above the skyline')).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Next property' }))
    expect(screen.getByText('Spacious Modern Smart House')).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Previous property' }))
    expect(screen.getByText('Penthouse Residence above the skyline')).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Show property 1' }))
    expect(screen.getByText('Spacious Modern Smart House')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Show property 1' })).toHaveAttribute(
      'aria-current',
      'true',
    )
  })
})

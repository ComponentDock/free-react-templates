import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { trending } from '../data'
import { TrendingStrip } from './TrendingStrip'

describe('TrendingStrip', () => {
  it('renders the red title block and the first headline', () => {
    render(<TrendingStrip />)
    expect(screen.getByRole('heading', { level: 2, name: 'Trending News' })).toBeInTheDocument()
    expect(screen.getByText(trending[0])).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Previous headline' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Next headline' })).toBeInTheDocument()
  })

  it('advances and rewinds the headline slider', async () => {
    const user = userEvent.setup()
    render(<TrendingStrip />)

    await user.click(screen.getByRole('button', { name: 'Next headline' }))
    expect(screen.queryByText(trending[0])).not.toBeInTheDocument()
    expect(screen.getByText(trending[1])).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Previous headline' }))
    expect(screen.getByText(trending[0])).toBeInTheDocument()
  })

  it('wraps around when going back from the first headline', async () => {
    const user = userEvent.setup()
    render(<TrendingStrip />)

    await user.click(screen.getByRole('button', { name: 'Previous headline' }))
    expect(screen.getByText(trending[trending.length - 1]!)).toBeInTheDocument()
  })
})

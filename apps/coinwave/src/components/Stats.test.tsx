import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Stats } from './Stats'
import { describe, expect, it } from 'vitest'

describe('Stats', () => {
  it('displays the section heading', () => {
    render(<Stats />)
    expect(screen.getByText('Ups and Downs of Bitcoin (Realtime)')).toBeInTheDocument()
  })

  it('displays the description text', () => {
    render(<Stats />)
    expect(screen.getByText(/Track real-time Bitcoin/)).toBeInTheDocument()
  })

  it('renders the chart image', () => {
    render(<Stats />)
    expect(screen.getByAltText('Bitcoin price chart')).toBeInTheDocument()
  })

  it('renders the View Details button', async () => {
    const user = userEvent.setup()
    render(<Stats />)
    const btn = screen.getByRole('link', { name: 'View Details' })
    expect(btn).toBeInTheDocument()
    await user.click(btn)
  })
})

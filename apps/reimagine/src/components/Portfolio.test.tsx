import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Portfolio } from './Portfolio'

describe('Portfolio', () => {
  it('renders section title', () => {
    render(<Portfolio />)
    expect(screen.getByRole('heading', { name: 'Our Amazing Works' })).toBeInTheDocument()
  })

  it('renders 3 work items initially', () => {
    render(<Portfolio />)
    const items = screen.getAllByRole('img')
    expect(items).toHaveLength(3)
  })

  it('navigates to next items on button click', async () => {
    const user = userEvent.setup()
    render(<Portfolio />)
    const firstImg = (screen.getAllByRole('img')[0] as HTMLImageElement).alt

    await user.click(screen.getByRole('button', { name: /next works/i }))

    const imgs = screen.getAllByRole('img')
    expect(imgs).toHaveLength(3)
    expect((imgs[0] as HTMLImageElement).alt).not.toBe(firstImg)
  })

  it('navigates to previous items on button click', async () => {
    const user = userEvent.setup()
    render(<Portfolio />)
    const firstImg = (screen.getAllByRole('img')[0] as HTMLImageElement).alt

    await user.click(screen.getByRole('button', { name: /previous works/i }))

    const imgs = screen.getAllByRole('img')
    expect(imgs).toHaveLength(3)
    expect((imgs[0] as HTMLImageElement).alt).not.toBe(firstImg)
  })

  it('wraps next when at the end of the list', async () => {
    const user = userEvent.setup()
    render(<Portfolio />)
    // Click next twice to reach the end, then once more to wrap
    for (let i = 0; i < 4; i++) {
      await user.click(screen.getByRole('button', { name: /next works/i }))
    }
    // Should have wrapped back — still 3 items
    expect(screen.getAllByRole('img')).toHaveLength(3)
  })

  it('wraps prev when at the start of the list', async () => {
    const user = userEvent.setup()
    render(<Portfolio />)
    // Click prev once (at start) to wrap to end
    await user.click(screen.getByRole('button', { name: /previous works/i }))
    // Then click prev again to go backwards
    await user.click(screen.getByRole('button', { name: /previous works/i }))
    expect(screen.getAllByRole('img')).toHaveLength(3)
  })
})

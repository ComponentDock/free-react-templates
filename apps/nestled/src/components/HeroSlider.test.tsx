import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { HeroSlider } from './HeroSlider'
import { describe, expect, it } from 'vitest'

describe('HeroSlider', () => {
  it('renders the first property address', () => {
    render(<HeroSlider />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      '62/1 Braybrooke Street, Bruce',
    )
  })

  it('renders the price', () => {
    render(<HeroSlider />)
    expect(screen.getByText('$999,000')).toBeInTheDocument()
  })

  it('navigates to the next slide', async () => {
    const user = userEvent.setup()
    render(<HeroSlider />)
    await user.click(screen.getByRole('button', { name: 'Next property' }))
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      '15 Kangaroo Street, Canberra',
    )
  })

  it('navigates to the previous slide', async () => {
    const user = userEvent.setup()
    render(<HeroSlider />)
    await user.click(screen.getByRole('button', { name: 'Previous property' }))
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      '78 Northbourne Avenue, Canberra',
    )
  })

  it('wraps from last to first on next', async () => {
    const user = userEvent.setup()
    render(<HeroSlider />)
    // Navigate to last slide (3 clicks forward from 0 → 1 → 2 → 3)
    for (let i = 0; i < 3; i++) {
      await user.click(screen.getByRole('button', { name: 'Next property' }))
    }
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      '78 Northbourne Avenue, Canberra',
    )
    // Click next again — should wrap to first
    await user.click(screen.getByRole('button', { name: 'Next property' }))
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      '62/1 Braybrooke Street, Bruce',
    )
  })

  it('wraps from first to last on previous', async () => {
    const user = userEvent.setup()
    render(<HeroSlider />)
    // Already on first slide — click prev should wrap to last
    await user.click(screen.getByRole('button', { name: 'Previous property' }))
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      '78 Northbourne Avenue, Canberra',
    )
  })

  it('goes back to previous non-wrapping slide', async () => {
    const user = userEvent.setup()
    render(<HeroSlider />)
    // Move forward to slide 1, then back to slide 0
    await user.click(screen.getByRole('button', { name: 'Next property' }))
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      '15 Kangaroo Street, Canberra',
    )
    await user.click(screen.getByRole('button', { name: 'Previous property' }))
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      '62/1 Braybrooke Street, Bruce',
    )
  })

  it('renders spec icons', () => {
    render(<HeroSlider />)
    expect(screen.getByText('2')).toBeInTheDocument()
    expect(screen.getByText('4')).toBeInTheDocument()
    expect(screen.getByText('120 m²')).toBeInTheDocument()
  })
})

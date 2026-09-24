import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { HeroCarousel } from './HeroCarousel'

describe('HeroCarousel', () => {
  it('renders the first featured article by default', () => {
    render(<HeroCarousel />)

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Breaking: Global Summit')
    expect(screen.getByText('News')).toBeInTheDocument()
    expect(screen.getByText('January 31, 2025')).toBeInTheDocument()
    expect(screen.getByText('33')).toBeInTheDocument()
  })

  it('navigates to the next and previous slides', async () => {
    const user = userEvent.setup()
    render(<HeroCarousel />)

    await user.click(screen.getByRole('button', { name: 'Next slide' }))
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Tech Giants Announce')

    await user.click(screen.getByRole('button', { name: 'Previous slide' }))
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Breaking: Global Summit')
  })

  it('navigates via dot indicators', async () => {
    const user = userEvent.setup()
    render(<HeroCarousel />)

    await user.click(screen.getByRole('button', { name: 'Go to slide 3' }))
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Championship Finals')
  })

  it('wraps from last to first slide on next', async () => {
    const user = userEvent.setup()
    render(<HeroCarousel />)

    await user.click(screen.getByRole('button', { name: 'Go to slide 3' }))
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Championship Finals')

    await user.click(screen.getByRole('button', { name: 'Next slide' }))
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Breaking: Global Summit')
  })

  it('wraps from first to last slide on previous', async () => {
    const user = userEvent.setup()
    render(<HeroCarousel />)

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Breaking: Global Summit')

    await user.click(screen.getByRole('button', { name: 'Previous slide' }))
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Championship Finals')
  })
})

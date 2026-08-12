import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Banner } from './Banner'

describe('Banner', () => {
  it('shows the first slide with a level-1 headline, EXPLORE CTA and dots', () => {
    render(<Banner />)

    expect(
      screen.getByRole('heading', { level: 1, name: 'The Project Jacket' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Explore' })).toBeInTheDocument()
    expect(screen.getAllByRole('button', { name: /Go to slide/ })).toHaveLength(3)
  })

  it('navigates slides with next/prev controls and wraps around', async () => {
    const user = userEvent.setup()
    render(<Banner />)

    await user.click(screen.getByRole('button', { name: 'Next slide' }))
    expect(
      screen.getByRole('heading', { level: 1, name: 'Linen Breeze Dress' }),
    ).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Next slide' }))
    expect(
      screen.getByRole('heading', { level: 1, name: 'Urban Street Style' }),
    ).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Next slide' }))
    expect(
      screen.getByRole('heading', { level: 1, name: 'The Project Jacket' }),
    ).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Previous slide' }))
    expect(
      screen.getByRole('heading', { level: 1, name: 'Urban Street Style' }),
    ).toBeInTheDocument()
  })

  it('jumps to a slide via its dot', async () => {
    const user = userEvent.setup()
    render(<Banner />)

    await user.click(screen.getByRole('button', { name: 'Go to slide 3' }))
    expect(
      screen.getByRole('heading', { level: 1, name: 'Urban Street Style' }),
    ).toBeInTheDocument()
  })
})

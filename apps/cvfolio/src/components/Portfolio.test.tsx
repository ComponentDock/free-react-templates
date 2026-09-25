import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { Portfolio } from './Portfolio'

describe('Portfolio', () => {
  it('renders the section heading', () => {
    render(<Portfolio />)

    expect(screen.getByRole('heading', { name: 'Portfolio' })).toBeInTheDocument()
    expect(screen.getByText('MY WORK')).toBeInTheDocument()
  })

  it('renders all filter tabs', () => {
    render(<Portfolio />)

    expect(screen.getByRole('button', { name: 'ALL' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'WEB DESIGN' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'BRANDING' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'GRAPHIC DESIGN' })).toBeInTheDocument()
  })

  it('renders portfolio images', () => {
    render(<Portfolio />)

    const images = screen.getAllByRole('img', { name: /portfolio item/i })
    expect(images.length).toBe(10)
  })

  it('filters items when a tab is clicked', async () => {
    const user = userEvent.setup()
    render(<Portfolio />)

    await user.click(screen.getByRole('button', { name: 'WEB DESIGN' }))

    const images = screen.getAllByRole('img', { name: /portfolio item/i })
    expect(images.length).toBe(4)
  })

  it('shows all items when ALL is clicked', async () => {
    const user = userEvent.setup()
    render(<Portfolio />)

    await user.click(screen.getByRole('button', { name: 'WEB DESIGN' }))
    await user.click(screen.getByRole('button', { name: 'ALL' }))

    const images = screen.getAllByRole('img', { name: /portfolio item/i })
    expect(images.length).toBe(10)
  })
})

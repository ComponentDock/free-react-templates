import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline, subtext and CTA', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1, name: /Exquisite Food/i })).toBeInTheDocument()
    expect(screen.getByText(/Explore our handcrafted seasonal menu/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Explore Menu/i })).toBeInTheDocument()
  })

  it('renders the hero image with an accessible name', () => {
    render(<Hero />)
    expect(screen.getByRole('img', { name: 'Gourmet dish presentation' })).toHaveAttribute(
      'src',
      expect.stringContaining('picsum.photos'),
    )
  })

  it('scrolls to the menu section when CTA is clicked', async () => {
    const scrollIntoView = vi.fn()
    const mockEl = { scrollIntoView }
    vi.spyOn(document, 'getElementById').mockReturnValue(mockEl as unknown as HTMLElement)

    const user = userEvent.setup()
    render(<Hero />)
    await user.click(screen.getByRole('button', { name: /Explore Menu/i }))
    expect(scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' })

    vi.restoreAllMocks()
  })
})

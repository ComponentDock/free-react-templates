import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline, question sub-line, and portrait', () => {
    render(<Hero menuOpen={false} onMenuToggle={() => {}} />)
    expect(
      screen.getByRole('heading', { level: 1, name: 'Business Websites, Simplified' }),
    ).toBeInTheDocument()
    expect(screen.getByText('Tired of puzzling frameworks?')).toBeInTheDocument()
    const portrait = screen.getByRole('img', { name: 'Professional business portrait' })
    expect(portrait).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
    expect(portrait).toHaveClass('object-cover')
  })

  it('renders the bottom-corner wordmark and hamburger with no top navbar or CTA', () => {
    render(<Hero menuOpen={false} onMenuToggle={() => {}} />)
    expect(screen.getByText('Slate')).toBeInTheDocument()
    const trigger = screen.getByRole('button', { name: 'Open menu' })
    expect(trigger).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('navigation')).not.toBeInTheDocument()
    expect(
      screen.queryByRole('button', { name: /get started|contact us/i }),
    ).not.toBeInTheDocument()
  })

  it('reports the expanded state and calls the toggle handler', async () => {
    const user = userEvent.setup()
    const onMenuToggle = vi.fn()
    const { rerender } = render(<Hero menuOpen={false} onMenuToggle={onMenuToggle} />)
    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    expect(onMenuToggle).toHaveBeenCalledTimes(1)
    rerender(<Hero menuOpen onMenuToggle={onMenuToggle} />)
    expect(screen.getByRole('button', { name: 'Open menu' })).toHaveAttribute(
      'aria-expanded',
      'true',
    )
  })
})

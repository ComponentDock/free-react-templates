import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SubscribeBadge } from './SubscribeBadge'
import { subscribe } from '../data'

describe('SubscribeBadge', () => {
  it('renders a circular subscribe badge linking to the channel', () => {
    render(<SubscribeBadge />)
    const badge = screen.getByRole('link', { name: 'Subscribe to my YouTube channel' })
    expect(badge).toBeInTheDocument()
    expect(badge).toHaveAttribute('href', '#subscribe')
  })

  it('shows the script title, caption and avatar', () => {
    render(<SubscribeBadge />)
    expect(screen.getByText(subscribe.title)).toBeInTheDocument()
    expect(screen.getByText(subscribe.caption)).toBeInTheDocument()
    expect(screen.getByAltText('')).toBeInTheDocument()
  })
})

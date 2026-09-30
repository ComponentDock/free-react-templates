import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the first slide with countdown and VS chips', () => {
    const { container } = render(<Hero />)
    expect(screen.getByTestId('countdown-days')).toHaveTextContent('2')
    expect(screen.getByText('days until the next match')).toBeInTheDocument()
    expect(screen.getByText('The Ravens')).toBeInTheDocument()
    expect(screen.getByText('The Hawks')).toBeInTheDocument()
    expect(screen.getByText('VS')).toBeInTheDocument()
    const bg = container.querySelector('img')
    expect(bg).toHaveAttribute('src', expect.stringContaining('matchday-hero-1'))
  })

  it('advances slides on Next and wraps around', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    await user.click(screen.getByRole('button', { name: 'Next slide' }))
    expect(screen.getByTestId('countdown-days')).toHaveTextContent('9')
    expect(screen.getByText('The Wolves')).toBeInTheDocument()
    expect(screen.getByText('The Lions')).toBeInTheDocument()
    expect(screen.queryByText('The Ravens')).not.toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Next slide' }))
    expect(screen.getByTestId('countdown-days')).toHaveTextContent('2')
    expect(screen.getByText('The Ravens')).toBeInTheDocument()
  })

  it('Next is keyboard-focusable', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    await user.tab()
    expect(screen.getByRole('button', { name: 'Next slide' })).toHaveFocus()
  })
})

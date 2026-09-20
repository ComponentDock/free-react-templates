import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { NextEvents } from './NextEvents'

describe('NextEvents', () => {
  it('renders section heading', () => {
    render(<NextEvents />)
    expect(screen.getByText('Our Next Events')).toBeInTheDocument()
  })

  it('renders all event cards', () => {
    render(<NextEvents />)
    expect(screen.getByText('Summer Soundwave Festival')).toBeInTheDocument()
    expect(screen.getByText('Neon Nights Open Air')).toBeInTheDocument()
    expect(screen.getByText('Underground Sessions Vol. 3')).toBeInTheDocument()
    expect(screen.getByText('Sunset Boulevard Live')).toBeInTheDocument()
  })

  it('renders venue information', () => {
    render(<NextEvents />)
    expect(screen.getByText(/Bayfront Park/)).toBeInTheDocument()
    expect(screen.getByText(/Red Rocks/)).toBeInTheDocument()
  })

  it('renders navigation arrows', () => {
    render(<NextEvents />)
    expect(screen.getByRole('button', { name: /previous event/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /next event/i })).toBeInTheDocument()
  })

  it('handles right scroll navigation click', async () => {
    const user = userEvent.setup()
    render(<NextEvents />)
    // jsdom elements don't have scrollBy; the fallback uses scrollLeft
    const nextBtn = screen.getByRole('button', { name: /next event/i })
    await user.click(nextBtn)
    // No error thrown means the scroll path executed
  })

  it('handles left scroll navigation click', async () => {
    const user = userEvent.setup()
    render(<NextEvents />)
    const prevBtn = screen.getByRole('button', { name: /previous event/i })
    await user.click(prevBtn)
    // No error thrown means the scroll path executed
  })
})

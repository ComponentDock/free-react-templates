import { act } from 'react'
import { describe, expect, it, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { Slider } from './Slider'

describe('Slider', () => {
  it('renders the heading, six slides, arrows and dot indicators', () => {
    render(<Slider />)
    expect(
      screen.getByRole('heading', { level: 2, name: 'International Tour Management.' }),
    ).toBeInTheDocument()
    expect(screen.getAllByRole('listitem')).toHaveLength(6)
    expect(screen.getAllByRole('img')).toHaveLength(6)
    const prev = screen.getByRole('button', { name: 'Previous slide' })
    const next = screen.getByRole('button', { name: 'Next slide' })
    expect(prev).toHaveClass('opacity-0', 'group-hover:opacity-100')
    expect(next).toHaveClass('opacity-0', 'group-hover:opacity-100')
    expect(screen.getAllByRole('button', { name: /Go to slide/ })).toHaveLength(6)
  })

  it('dims every slide except the active one', () => {
    render(<Slider />)
    const first = screen
      .getByAltText('Tropical beach resort at sunset')
      .closest('[role="listitem"]')!
    const second = screen
      .getByAltText('Mountain lake surrounded by peaks')
      .closest('[role="listitem"]')!
    expect(first).not.toHaveClass('opacity-40')
    expect(second).toHaveClass('opacity-40')
  })

  it('advances and wraps via the arrow buttons', () => {
    render(<Slider />)
    const track = screen.getByRole('list')
    fireEvent.click(screen.getByRole('button', { name: 'Next slide' }))
    expect(track).toHaveStyle('transform: translateX(-100%)')
    fireEvent.click(screen.getByRole('button', { name: 'Previous slide' }))
    expect(track).toHaveStyle('transform: translateX(-0%)')
    fireEvent.click(screen.getByRole('button', { name: 'Previous slide' }))
    expect(track).toHaveStyle('transform: translateX(-500%)')
  })

  it('jumps to a slide via the dot indicators', () => {
    render(<Slider />)
    fireEvent.click(screen.getByRole('button', { name: 'Go to slide 3' }))
    expect(screen.getByRole('list')).toHaveStyle('transform: translateX(-200%)')
    expect(screen.getByRole('button', { name: 'Go to slide 3' })).toHaveAttribute(
      'aria-current',
      'true',
    )
  })

  it('auto-advances every four seconds', () => {
    vi.useFakeTimers()
    render(<Slider />)
    const track = screen.getByRole('list')
    act(() => {
      vi.advanceTimersByTime(4000)
    })
    expect(track).toHaveStyle('transform: translateX(-100%)')
    vi.useRealTimers()
  })
})

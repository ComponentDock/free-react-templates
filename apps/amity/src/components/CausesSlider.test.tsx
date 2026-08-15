import { fireEvent, render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { CausesSlider } from './CausesSlider'

describe('CausesSlider', () => {
  it('renders the heading and all six cause cards', () => {
    render(<CausesSlider />)
    expect(screen.getByRole('heading', { name: 'Our Causes' })).toBeInTheDocument()
    const cards = screen.getAllByLabelText(/Cause: /)
    expect(cards).toHaveLength(6)
    expect(within(cards[0]!).getByText('Bring water to the childrens')).toBeInTheDocument()
    expect(within(cards[1]!).getByText('Education for all')).toBeInTheDocument()
  })

  it('shows the progress bar, amounts, and Donate Now link on each card', () => {
    render(<CausesSlider />)
    const first = within(screen.getAllByLabelText(/Cause: /)[0]!)
    expect(first.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '83')
    expect(first.getByText('Raised: $56 880')).toBeInTheDocument()
    expect(first.getByText('Goal: $70 000')).toBeInTheDocument()
    expect(first.getByRole('link', { name: 'Donate Now' })).toHaveAttribute('href', '#donate')
  })

  it('advances three cards with the next arrow and wraps around', () => {
    render(<CausesSlider />)
    const track = () =>
      (document.querySelector('[data-cause-track]') as HTMLElement).style.transform

    fireEvent.click(screen.getByRole('button', { name: 'Next causes' }))
    expect(track()).toBe('translateX(-50%)')

    fireEvent.click(screen.getByRole('button', { name: 'Next causes' }))
    expect(track()).toBe('translateX(0%)')
  })

  it('moves back with the previous arrow and wraps around', () => {
    render(<CausesSlider />)
    const track = () =>
      (document.querySelector('[data-cause-track]') as HTMLElement).style.transform

    fireEvent.click(screen.getByRole('button', { name: 'Previous causes' }))
    expect(track()).toBe('translateX(-50%)')

    fireEvent.click(screen.getByRole('button', { name: 'Previous causes' }))
    expect(track()).toBe('translateX(0%)')
  })

  it('reveals a hover overlay icon on each card', () => {
    const { container } = render(<CausesSlider />)
    const overlay = container.querySelector('[data-cause-overlay]')
    expect(overlay).toBeInTheDocument()
    expect(overlay?.className).toContain('opacity-0')
    expect(overlay?.className).toContain('group-hover:opacity-100')
  })
})

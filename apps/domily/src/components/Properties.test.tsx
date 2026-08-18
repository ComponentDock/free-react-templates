import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Properties } from './Properties'
import { PROPERTIES } from '../data'

describe('Properties', () => {
  it('renders the section header and four property cards with specs', () => {
    render(<Properties />)

    expect(screen.getByText(PROPERTIES.label)).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: PROPERTIES.heading })).toBeInTheDocument()

    const section = document.querySelector('#properties')
    expect(section).not.toBeNull()

    for (const item of PROPERTIES.items) {
      const card = screen.getByRole('heading', { level: 3, name: item.title }).closest('article')
      expect(card).toBeInTheDocument()
      expect(within(card as HTMLElement).getByText(new RegExp(item.price))).toBeInTheDocument()
      for (const spec of item.specs) {
        expect(within(card as HTMLElement).getByText(spec.label)).toBeInTheDocument()
      }
    }
  })

  it('advances, goes back and wraps the carousel via arrows', async () => {
    const user = userEvent.setup()
    render(<Properties />)

    const track = screen.getByTestId('properties-track')
    expect(track.style.transform).toBe('translateX(-0%)')

    await user.click(screen.getByRole('button', { name: 'Next properties' }))
    expect(track.style.transform).toBe('translateX(-33.333333333333336%)')

    await user.click(screen.getByRole('button', { name: 'Previous properties' }))
    expect(track.style.transform).toBe('translateX(-0%)')

    await user.click(screen.getByRole('button', { name: 'Previous properties' }))
    // wraps from first to last page
    expect(track.style.transform).toBe('translateX(-33.333333333333336%)')
  })

  it('jumps to a slide via the dots', async () => {
    const user = userEvent.setup()
    render(<Properties />)

    const track = screen.getByTestId('properties-track')
    await user.click(screen.getByRole('button', { name: 'Go to property slide 2' }))
    expect(track.style.transform).toBe('translateX(-33.333333333333336%)')
    expect(screen.getByRole('button', { name: 'Go to property slide 2' })).toHaveAttribute(
      'aria-current',
      'true',
    )
  })
})

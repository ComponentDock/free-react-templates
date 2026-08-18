import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline, overlay, and See video CTA', () => {
    render(<Hero />)
    expect(
      screen.getByRole('heading', {
        level: 1,
        name: "Once a year go someplace you've never been before.",
      }),
    ).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'See video' })).toBeInTheDocument()

    const section = screen.getByRole('region', { name: 'Welcome' })
    expect(section.className).toContain('h-screen')
    expect(section.className).toContain('min-h-[780px]')
    expect(section.style.backgroundImage).toContain('concierge-hero')
    expect(
      section.querySelector('.bg-black\\/40') ?? section.querySelector('[aria-hidden="true"]'),
    ).toBeTruthy()
  })

  it('opens the video modal from the See video button and closes via the close button', () => {
    render(<Hero />)
    expect(screen.queryByRole('dialog', { name: 'Intro video' })).toBeNull()

    fireEvent.click(screen.getByRole('button', { name: 'See video' }))
    const dialog = screen.getByRole('dialog', { name: 'Intro video' })
    expect(dialog).toHaveAttribute('aria-modal', 'true')
    expect(
      screen.getByRole('img', { name: 'Tropical resort pier over turquoise water' }),
    ).toHaveAttribute('src', expect.stringContaining('concierge-video'))

    fireEvent.click(screen.getByRole('button', { name: 'Close video' }))
    expect(screen.queryByRole('dialog', { name: 'Intro video' })).toBeNull()
  })

  it('closes the video modal on backdrop click and on Escape', () => {
    render(<Hero />)
    fireEvent.click(screen.getByRole('button', { name: 'See video' }))

    const overlay = screen.getByRole('presentation')
    fireEvent.click(overlay)
    expect(screen.queryByRole('dialog', { name: 'Intro video' })).toBeNull()

    fireEvent.click(screen.getByRole('button', { name: 'See video' }))
    fireEvent.keyDown(window, { key: 'Escape' })
    expect(screen.queryByRole('dialog', { name: 'Intro video' })).toBeNull()
  })

  it('does not close when clicking inside the modal panel', () => {
    render(<Hero />)
    fireEvent.click(screen.getByRole('button', { name: 'See video' }))
    const dialog = screen.getByRole('dialog', { name: 'Intro video' })
    fireEvent.click(dialog)
    expect(screen.getByRole('dialog', { name: 'Intro video' })).toBeInTheDocument()
  })

  it('stays open when a non-Escape key is pressed', () => {
    render(<Hero />)
    fireEvent.click(screen.getByRole('button', { name: 'See video' }))
    fireEvent.keyDown(window, { key: 'a' })
    expect(screen.getByRole('dialog', { name: 'Intro video' })).toBeInTheDocument()
  })

  it('removes the keydown listener when the modal closes', () => {
    const removeSpy = vi.spyOn(window, 'removeEventListener')
    const { rerender } = render(<Hero />)
    fireEvent.click(screen.getByRole('button', { name: 'See video' }))
    fireEvent.click(screen.getByRole('button', { name: 'Close video' }))
    expect(removeSpy).toHaveBeenCalledWith('keydown', expect.any(Function))
    removeSpy.mockRestore()
    rerender(<Hero />)
  })
})

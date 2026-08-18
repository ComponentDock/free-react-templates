import { fireEvent, render, screen } from '@testing-library/react'
import { Hero } from './Hero'
import { HERO } from '../data'
import { describe, expect, it } from 'vitest'

describe('Hero', () => {
  it('renders the headline, overlay, and video CTA over a photo', () => {
    render(<Hero />)
    expect(
      screen.getByRole('heading', { level: 1, name: /someplace you've never been/ }),
    ).toBeInTheDocument()
    expect(screen.getByRole('button', { name: HERO.videoLabel })).toBeInTheDocument()
    const section = document.querySelector('section#home')
    expect(section).not.toBeNull()
    expect(section).toHaveStyle({ backgroundImage: expect.stringContaining('picsum') })
    // flat overlay at 40% black
    expect(section!.children[0]).toHaveClass('bg-black/40')
  })

  it('opens the video dialog and closes it via the close button', () => {
    render(<Hero />)
    fireEvent.click(screen.getByRole('button', { name: HERO.videoLabel }))
    const dialog = screen.getByRole('dialog', { name: 'Video player' })
    expect(dialog).toBeInTheDocument()
    const frame = dialog.querySelector('iframe')
    expect(frame).toHaveAttribute('src', HERO.videoUrl)
    fireEvent.click(screen.getByRole('button', { name: 'Close video' }))
    expect(screen.queryByRole('dialog', { name: 'Video player' })).not.toBeInTheDocument()
  })

  it('closes the video dialog when the backdrop is clicked', () => {
    render(<Hero />)
    fireEvent.click(screen.getByRole('button', { name: HERO.videoLabel }))
    const dialog = screen.getByRole('dialog', { name: 'Video player' })
    fireEvent.click(dialog)
    expect(screen.queryByRole('dialog', { name: 'Video player' })).not.toBeInTheDocument()
  })

  it('does not close the dialog when clicking inside its content', () => {
    render(<Hero />)
    fireEvent.click(screen.getByRole('button', { name: HERO.videoLabel }))
    const dialog = screen.getByRole('dialog', { name: 'Video player' })
    const frame = dialog.querySelector('iframe')!
    fireEvent.click(frame)
    expect(screen.getByRole('dialog', { name: 'Video player' })).toBeInTheDocument()
  })
})

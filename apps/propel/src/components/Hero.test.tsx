import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Hero } from './Hero'
import { HERO } from '../data'

describe('Hero', () => {
  it('renders the headline, lead, CTA and photo background', () => {
    render(<Hero />)
    expect(
      screen.getByRole('heading', { level: 1, name: /We are here to grow your business/ }),
    ).toBeInTheDocument()
    expect(screen.getByText(HERO.lead)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: HERO.ctaLabel })).toHaveAttribute('href', '#services')
    expect(screen.getByRole('img', { name: HERO.imageAlt })).toHaveAttribute('src', HERO.image)
  })

  it('opens the video modal from the watch link and closes it with the button', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: HERO.videoLabel }))
    const dialog = screen.getByRole('dialog')
    expect(dialog).toBeInTheDocument()
    expect(screen.getByTitle(HERO.videoTitle)).toHaveAttribute('src', HERO.videoEmbedUrl)

    await user.click(screen.getByRole('button', { name: 'Close video' }))
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('closes the video modal on backdrop click and Escape', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    await user.click(screen.getByRole('button', { name: HERO.videoLabel }))

    const dialog = screen.getByRole('dialog')
    const panel = dialog.querySelector('div.relative') as HTMLElement
    await user.click(panel)
    expect(screen.getByRole('dialog')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Close video' }))
    await user.click(screen.getByRole('button', { name: HERO.videoLabel }))
    fireEvent.keyDown(window, { key: 'Enter' })
    expect(screen.getByRole('dialog')).toBeInTheDocument()
    fireEvent.keyDown(window, { key: 'Escape' })
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })
})

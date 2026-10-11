import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { VideoCover } from './VideoCover'

describe('VideoCover', () => {
  it('renders the photographic cover with heading and a labeled play button', () => {
    const { container } = render(<VideoCover />)
    const section = container.querySelector('section')!
    expect(section.getAttribute('style')).toContain('picsum.photos/seed/cargolane-video-')
    expect(section.className).toContain('bg-fixed')
    expect(screen.getByRole('heading', { level: 2, name: 'Watch The Video' })).toBeInTheDocument()
    expect(container.querySelector('.bg-black\\/40')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Play video' })).toBeInTheDocument()
  })

  it('opens and closes the video placeholder dialog', () => {
    render(<VideoCover />)
    fireEvent.click(screen.getByRole('button', { name: 'Play video' }))
    const dialog = screen.getByRole('dialog', { name: 'Video preview' })
    expect(dialog).toBeInTheDocument()
    fireEvent.click(screen.getByRole('button', { name: 'Close video' }))
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })
})

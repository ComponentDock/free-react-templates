import { render, screen, fireEvent } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { About } from './About'
import { about } from '../data'

describe('About', () => {
  it('renders the eyebrow, heading and paragraph', () => {
    render(<About />)
    expect(screen.getByText(about.eyebrow)).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: about.heading })).toBeInTheDocument()
    expect(screen.getByText(about.paragraph)).toBeInTheDocument()
  })

  it('renders both counters with values and labels', () => {
    render(<About />)
    for (const counter of about.counters) {
      expect(screen.getByText(`${counter.value}${counter.suffix}`)).toHaveClass('text-brand')
      expect(screen.getByText(counter.label)).toBeInTheDocument()
    }
  })

  it('renders the Learn More button anchored to the services section', () => {
    render(<About />)
    const link = screen.getByRole('link', { name: about.cta })
    expect(link).toHaveAttribute('href', '#services')
    expect(link).toHaveClass('bg-brand')
  })

  it('renders the video panel with a play button', () => {
    render(<About />)
    expect(screen.getByRole('button', { name: about.video.label })).toBeInTheDocument()
  })

  it('opens the video modal on play and closes it via the close button', () => {
    render(<About />)
    fireEvent.click(screen.getByRole('button', { name: about.video.label }))
    expect(screen.getByTitle('Company video')).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: 'Close video' }))
    expect(screen.queryByTitle('Company video')).not.toBeInTheDocument()
  })

  it('closes the video modal when the backdrop is clicked', () => {
    render(<About />)
    fireEvent.click(screen.getByRole('button', { name: about.video.label }))
    const backdrop = document.querySelector('.bg-black\\/70') as HTMLElement
    fireEvent.click(backdrop)
    expect(screen.queryByTitle('Company video')).not.toBeInTheDocument()
  })

  it('closes the video modal on Escape but ignores other keys', () => {
    render(<About />)
    fireEvent.click(screen.getByRole('button', { name: about.video.label }))
    fireEvent.keyDown(window, { key: 'Enter' })
    expect(screen.getByTitle('Company video')).toBeInTheDocument()
    fireEvent.keyDown(window, { key: 'Escape' })
    expect(screen.queryByTitle('Company video')).not.toBeInTheDocument()
  })

  it('removes the keydown listener after the modal is closed', () => {
    const { unmount } = render(<About />)
    fireEvent.click(screen.getByRole('button', { name: about.video.label }))
    const spy = vi.spyOn(window, 'removeEventListener')
    fireEvent.click(screen.getByRole('button', { name: 'Close video' }))
    expect(spy).toHaveBeenCalledWith('keydown', expect.any(Function))
    spy.mockRestore()
    unmount()
  })

  it('does not attach a keydown listener when the modal is closed', () => {
    const spy = vi.spyOn(window, 'addEventListener')
    render(<About />)
    expect(spy).not.toHaveBeenCalledWith('keydown', expect.any(Function))
    spy.mockRestore()
  })
})

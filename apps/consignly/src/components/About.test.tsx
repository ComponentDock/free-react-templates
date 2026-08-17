import { fireEvent, render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { About } from './About'

describe('About', () => {
  it('renders the Mission subheading, About Us heading, and feature rows', () => {
    render(<About />)
    expect(screen.getByText('Mission')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'About Us' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Air Freight' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Sea Freight' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Play video' })).toBeInTheDocument()
  })

  it('opens the video dialog from the play control', () => {
    render(<About />)
    fireEvent.click(screen.getByRole('button', { name: 'Play video' }))
    const dialog = screen.getByRole('dialog', { name: 'About video' })
    expect(within(dialog).getByRole('button', { name: 'Close video' })).toBeInTheDocument()
    expect(dialog.querySelector('video')).toBeInTheDocument()
  })

  it('closes the video dialog with the close button', () => {
    render(<About />)
    fireEvent.click(screen.getByRole('button', { name: 'Play video' }))
    const dialog = screen.getByRole('dialog', { name: 'About video' })
    fireEvent.click(within(dialog).getByRole('button', { name: 'Close video' }))
    expect(screen.queryByRole('dialog', { name: 'About video' })).not.toBeInTheDocument()
  })

  it('closes the video dialog on Escape', () => {
    render(<About />)
    fireEvent.click(screen.getByRole('button', { name: 'Play video' }))
    expect(screen.getByRole('dialog', { name: 'About video' })).toBeInTheDocument()
    fireEvent.keyDown(window, { key: 'Escape' })
    expect(screen.queryByRole('dialog', { name: 'About video' })).not.toBeInTheDocument()
  })

  it('keeps the video dialog open on a non-Escape key', () => {
    render(<About />)
    fireEvent.click(screen.getByRole('button', { name: 'Play video' }))
    fireEvent.keyDown(window, { key: 'a' })
    expect(screen.getByRole('dialog', { name: 'About video' })).toBeInTheDocument()
  })

  it('closes the video dialog when the backdrop is clicked', () => {
    render(<About />)
    fireEvent.click(screen.getByRole('button', { name: 'Play video' }))
    const dialog = screen.getByRole('dialog', { name: 'About video' })
    fireEvent.click(dialog)
    expect(screen.queryByRole('dialog', { name: 'About video' })).not.toBeInTheDocument()
  })

  it('keeps the video dialog open when clicking inside it', () => {
    render(<About />)
    fireEvent.click(screen.getByRole('button', { name: 'Play video' }))
    const dialog = screen.getByRole('dialog', { name: 'About video' })
    fireEvent.click(dialog.firstElementChild!)
    expect(screen.getByRole('dialog', { name: 'About video' })).toBeInTheDocument()
  })
})

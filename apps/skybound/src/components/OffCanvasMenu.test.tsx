import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { OffCanvasMenu } from './OffCanvasMenu'

describe('OffCanvasMenu', () => {
  it('renders a collapsed hamburger and the off-canvas panel with brand and links', () => {
    render(<OffCanvasMenu />)
    const toggle = screen.getByRole('button', { name: 'Open navigation' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(toggle).toHaveAttribute('aria-controls', 'skybound-menu')
    const menu = screen.getByRole('navigation', { name: 'Main' })
    expect(menu).toHaveAttribute('data-open', 'false')
    expect(screen.getByRole('link', { name: /Skybound/ })).toBeInTheDocument()
    for (const label of ['Home', 'Packages', 'Pages', 'Blog', 'Contact']) {
      expect(screen.getByText(label)).toBeInTheDocument()
    }
  })

  it('opens and closes the panel from the hamburger toggle', () => {
    render(<OffCanvasMenu />)
    fireEvent.click(screen.getByRole('button', { name: 'Open navigation' }))
    const closeToggle = screen.getByRole('button', { name: 'Close navigation' })
    expect(closeToggle).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByRole('navigation', { name: 'Main' })).toHaveAttribute('data-open', 'true')

    fireEvent.click(closeToggle)
    expect(screen.getByRole('button', { name: 'Open navigation' })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
    expect(screen.getByRole('navigation', { name: 'Main' })).toHaveAttribute('data-open', 'false')
  })

  it('expands the Pages group, switches to Blog, and collapses it again', () => {
    render(<OffCanvasMenu />)
    const pages = screen.getByRole('button', { name: 'Pages' })
    const blog = screen.getByRole('button', { name: 'Blog' })
    expect(screen.queryByText('Amenities')).not.toBeInTheDocument()

    fireEvent.click(pages)
    expect(pages).toHaveAttribute('aria-expanded', 'true')
    for (const label of ['About-us', 'Amenities', 'Elements']) {
      expect(screen.getByText(label)).toBeInTheDocument()
    }

    fireEvent.click(blog)
    expect(blog).toHaveAttribute('aria-expanded', 'true')
    expect(pages).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByText('About-us')).not.toBeInTheDocument()
    expect(screen.getByText('Blog Details')).toBeInTheDocument()

    fireEvent.click(blog)
    expect(blog).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByText('Blog Details')).not.toBeInTheDocument()
  })

  it('closes the panel when a navigation link is used', () => {
    render(<OffCanvasMenu />)
    fireEvent.click(screen.getByRole('button', { name: 'Open navigation' }))
    fireEvent.click(screen.getByRole('button', { name: 'Pages' }))
    fireEvent.click(screen.getByText('Elements'))
    const menu = screen.getByRole('navigation', { name: 'Main' })
    expect(menu).toHaveAttribute('data-open', 'false')
    expect(screen.queryByText('Elements')).not.toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: 'Open navigation' }))
    fireEvent.click(screen.getByRole('link', { name: /Skybound/ }))
    expect(menu).toHaveAttribute('data-open', 'false')

    fireEvent.click(screen.getByRole('button', { name: 'Open navigation' }))
    fireEvent.click(screen.getByText('Home'))
    expect(menu).toHaveAttribute('data-open', 'false')

    fireEvent.click(screen.getByRole('button', { name: 'Open navigation' }))
    fireEvent.click(screen.getByText('Contact'))
    expect(menu).toHaveAttribute('data-open', 'false')
  })
})

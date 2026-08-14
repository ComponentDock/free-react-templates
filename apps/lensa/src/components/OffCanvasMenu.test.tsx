import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { OffCanvasMenu } from './OffCanvasMenu'

describe('OffCanvasMenu', () => {
  it('is hidden from the accessibility tree when closed', () => {
    const { container } = render(<OffCanvasMenu open={false} onClose={vi.fn()} />)

    const panel = container.querySelector('div[aria-hidden="true"]')
    expect(panel).not.toBeNull()
    expect(panel!.className).toContain('-translate-x-full')
    expect(screen.queryByRole('link', { name: 'Home' })).not.toBeInTheDocument()
    expect(screen.queryByRole('button', { name: 'Close menu' })).not.toBeInTheDocument()
  })

  it('slides in with the six nav links in order, Home active, plus socials', () => {
    render(<OffCanvasMenu open={true} onClose={vi.fn()} />)

    const panel = screen.getByLabelText('Main menu').closest('div')
    expect(panel).toHaveAttribute('aria-hidden', 'false')
    expect(panel!.className).toContain('translate-x-0')

    const links = screen.getAllByRole('link')
    expect(links).toHaveLength(11) // 6 nav + 5 socials
    expect(
      links
        .map((link) => link.textContent)
        .filter(Boolean)
        .slice(0, 6),
    ).toEqual(['Home', 'About Me', 'Blog', 'Portfolio', 'Contact', 'Elements'])
    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('aria-current', 'true')
    expect(screen.getByRole('link', { name: 'Portfolio' })).not.toHaveAttribute('aria-current')
  })

  it('closes when the close control is clicked', async () => {
    const user = userEvent.setup()
    const onClose = vi.fn()
    render(<OffCanvasMenu open={true} onClose={onClose} />)

    await user.click(screen.getByRole('button', { name: 'Close menu' }))
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('closes when a nav link is clicked', async () => {
    const user = userEvent.setup()
    const onClose = vi.fn()
    render(<OffCanvasMenu open={true} onClose={onClose} />)

    const about = screen.getByRole('link', { name: 'About Me' })
    // Neutralize jsdom hash-navigation so the React onClick still fires.
    about.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await user.click(about)
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('renders the five social brand links inside the menu', () => {
    render(<OffCanvasMenu open={true} onClose={vi.fn()} />)

    for (const name of ['Pinterest', 'Facebook', 'Twitter', 'Dribbble', 'Behance']) {
      expect(screen.getByRole('link', { name })).toBeInTheDocument()
    }
  })
})

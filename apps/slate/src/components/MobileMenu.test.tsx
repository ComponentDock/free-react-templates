import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { MobileMenu } from './MobileMenu'

describe('MobileMenu', () => {
  it('renders all navigation links and a close control', () => {
    render(<MobileMenu onClose={() => {}} />)
    const nav = screen.getByRole('navigation', { name: 'Mobile navigation' })
    for (const label of ['Home', 'Features', 'About', 'Testimonials', 'Contact']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
    expect(within(nav).getAllByRole('link')).toHaveLength(5)
    expect(screen.getByRole('button', { name: 'Close menu' })).toBeInTheDocument()
  })

  it('closes when the close control is clicked', async () => {
    const user = userEvent.setup()
    const onClose = vi.fn()
    render(<MobileMenu onClose={onClose} />)
    await user.click(screen.getByRole('button', { name: 'Close menu' }))
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('closes when a menu link is clicked', async () => {
    const user = userEvent.setup()
    const onClose = vi.fn()
    render(<MobileMenu onClose={onClose} />)
    const link = screen.getByRole('link', { name: 'Contact' })
    link.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await user.click(link)
    expect(onClose).toHaveBeenCalledTimes(1)
  })
})

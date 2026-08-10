import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SlideOutNav } from './SlideOutNav'
import { copyrightBrand, copyrightLine, menuCloseLabel, navLinks } from '../data'

describe('SlideOutNav', () => {
  it('renders nothing while closed', () => {
    render(<SlideOutNav open={false} onClose={vi.fn()} />)

    expect(screen.queryByRole('navigation', { name: 'Main menu' })).not.toBeInTheDocument()
  })

  it('renders the link list and the copyright line while open', () => {
    render(<SlideOutNav open={true} onClose={vi.fn()} />)

    for (const link of navLinks) {
      expect(screen.getByRole('link', { name: link })).toBeInTheDocument()
    }
    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('aria-current', 'page')
    expect(screen.getByText(new RegExp(`${copyrightLine}.*${copyrightBrand}`))).toBeInTheDocument()
  })

  it('closes via the close control', async () => {
    const user = userEvent.setup()
    const onClose = vi.fn()
    render(<SlideOutNav open={true} onClose={onClose} />)

    await user.click(screen.getByRole('button', { name: menuCloseLabel }))
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('closes when the Escape key is pressed', async () => {
    const user = userEvent.setup()
    const onClose = vi.fn()
    render(<SlideOutNav open={true} onClose={onClose} />)

    await user.keyboard('{Escape}')
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('ignores other keys while open', async () => {
    const user = userEvent.setup()
    const onClose = vi.fn()
    render(<SlideOutNav open={true} onClose={onClose} />)

    await user.keyboard('a')
    expect(onClose).not.toHaveBeenCalled()
  })
})

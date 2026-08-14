import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Header } from './Header'

describe('Header', () => {
  it('renders the hamburger toggle that opens the menu', async () => {
    const user = userEvent.setup()
    const onMenuToggle = vi.fn()
    render(<Header onMenuToggle={onMenuToggle} />)

    const toggle = screen.getByRole('button', { name: 'Open menu' })
    await user.click(toggle)
    expect(onMenuToggle).toHaveBeenCalledTimes(1)
  })

  it('renders the five social brand links', () => {
    render(<Header onMenuToggle={vi.fn()} />)

    for (const name of ['Pinterest', 'Facebook', 'Twitter', 'Dribbble', 'Behance']) {
      expect(screen.getByRole('link', { name })).toBeInTheDocument()
    }
  })

  it('hides the social icons on very small screens', () => {
    const { container } = render(<Header onMenuToggle={vi.fn()} />)
    const socials = container.querySelector('.max-\\[479px\\]\\:hidden')
    expect(socials).not.toBeNull()
    expect(socials!.className).toContain('max-[479px]:hidden')
  })
})

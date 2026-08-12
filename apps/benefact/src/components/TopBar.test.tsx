import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TopBar } from './TopBar'

describe('TopBar', () => {
  it('shows the three top bar links and two social links', () => {
    const { container } = render(<TopBar />)
    const links = screen.getAllByRole('link', { hidden: true })
    expect(links.map((l) => l.textContent).filter(Boolean)).toEqual([
      'Home',
      'Events',
      'Become A Volunteer',
    ])
    const socials = container.querySelectorAll('a[aria-label="Twitter"], a[aria-label="Facebook"]')
    expect(socials).toHaveLength(2)
  })

  it('is hidden on narrow viewports', () => {
    const { container } = render(<TopBar />)
    expect(container.querySelector('.top-bar')?.firstElementChild).toHaveClass('hidden')
    expect(container.querySelector('.top-bar')?.firstElementChild).toHaveClass('md:flex')
  })
})

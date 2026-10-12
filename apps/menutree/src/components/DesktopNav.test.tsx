import { render, screen } from '@testing-library/react'
import { DesktopNav } from './DesktopNav'
import { NAV } from '../lib/site'

describe('DesktopNav', () => {
  it('puts the four primary rows and the three social marks in one labelled nav', () => {
    render(<DesktopNav stuck={false} />)

    const nav = screen.getByRole('navigation', { name: 'Main' })
    const row = nav.querySelector('ul') as HTMLElement

    expect(row.querySelectorAll(':scope > li')).toHaveLength(NAV.length + 3)

    for (const label of ['Home', 'About', 'Blog', 'Contact']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }

    const home = screen.getByRole('link', { name: 'Home' })
    expect(home).toHaveAttribute('href', '#home')
    expect(home).toHaveClass('text-[13px]', 'uppercase', 'px-5', 'py-5', 'text-white/70')
    expect(screen.getAllByRole('link', { name: /opens in a new tab/ })).toHaveLength(3)
  })

  it('flips the whole row to ink with the accent hover once the bar is pinned', () => {
    render(<DesktopNav stuck />)

    const home = screen.getByRole('link', { name: 'Home' })
    expect(home).toHaveClass('text-ink', 'hover:text-brand')
    expect(home).not.toHaveClass('text-white/70')
  })
})

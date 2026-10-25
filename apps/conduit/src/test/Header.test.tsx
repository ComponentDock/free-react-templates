import { act, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Header, Wordmark } from '../components/Header'
import { NAV, site } from '../content'
import { setScroll } from './helpers'

describe('Header', () => {
  it('renders every nav label, the phone pill and the survey CTA', () => {
    render(<Header />)

    NAV.forEach((item) => {
      expect(screen.getByRole('link', { name: item.label })).toHaveAttribute('href', item.href)
    })
    expect(screen.getAllByRole('link', { name: site.phone })[0]).toHaveAttribute(
      'href',
      site.phoneHref,
    )
    expect(screen.getAllByRole('link', { name: 'Book a camera survey' })).toHaveLength(1)
    expect(screen.getByRole('navigation', { name: 'Primary' })).toHaveClass('hidden', 'xl:block')
  })

  it('takes the shadow only past 50 px of scroll', () => {
    const { container } = render(<Header />)
    const header = container.querySelector('header') as HTMLElement

    expect(header).not.toHaveClass('shadow-lg')

    act(() => setScroll(60, 3000, 1000))
    expect(header).toHaveClass('shadow-lg')
  })

  it('opens the mobile panel with an expanded state and closes it again', async () => {
    const user = userEvent.setup()
    render(<Header />)

    const toggle = screen.getByRole('button', { name: 'Open the menu' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByTestId('mobile-menu')).toBeNull()

    await user.click(toggle)

    expect(screen.getByTestId('mobile-menu')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Close the menu' })).toHaveAttribute(
      'aria-expanded',
      'true',
    )
    expect(screen.getAllByRole('link', { name: 'Book a camera survey' })).toHaveLength(2)

    const panel = screen.getByTestId('mobile-menu')
    await user.click(panel.querySelector('a[href="#areas"]') as HTMLElement)
    expect(screen.queryByTestId('mobile-menu')).toBeNull()
  })

  it('closes the mobile panel from its own call to action too', async () => {
    const user = userEvent.setup()
    render(<Header />)

    await user.click(screen.getByRole('button', { name: 'Open the menu' }))
    const panel = screen.getByTestId('mobile-menu')
    await user.click(panel.querySelector('a[href="#quote"]') as HTMLElement)

    expect(screen.queryByTestId('mobile-menu')).toBeNull()
  })

  it('switches the theme from the header toggle', async () => {
    const user = userEvent.setup()
    render(<Header />)

    await user.click(screen.getByRole('button', { name: 'Switch to dark theme' }))

    expect(document.documentElement).toHaveClass('dark')
    expect(screen.getByRole('button', { name: 'Switch to light theme' })).toBeInTheDocument()
  })
})

describe('Wordmark', () => {
  it('renders the dark and light variants at both sizes', () => {
    const { unmount } = render(<Wordmark />)
    expect(screen.getByRole('link', { name: `${site.name} home` })).toHaveAttribute('href', '#top')
    expect(screen.getByText(site.descriptor)).toHaveClass('text-ink-400')
    unmount()

    render(<Wordmark light large />)
    expect(screen.getByText(site.descriptor)).toHaveClass('text-gray-400')
  })
})

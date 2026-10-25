import { act, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, describe, expect, it } from 'vitest'
import { Header } from '../components/Header'
import { NAV } from '../content'
import {
  installMedia,
  installMockIntersectionObserver,
  removeMockIntersectionObserver,
  setScroll,
} from './helpers'

afterEach(() => {
  removeMockIntersectionObserver()
  localStorage.clear()
  document.documentElement.classList.remove('dark')
})

describe('Header', () => {
  it('lists the six bands and the one CTA, and is not yet shadowed', () => {
    render(<Header />)

    const header = document.querySelector('[data-header]')
    expect(header).not.toHaveClass('shadow-lg')
    expect(header).toHaveClass('sticky', 'bg-white/80', 'backdrop-blur-lg')

    for (const item of NAV) {
      expect(screen.getAllByRole('link', { name: item.label }).length).toBeGreaterThan(0)
    }
    expect(screen.getByRole('link', { name: 'Start a project' })).toHaveAttribute(
      'href',
      '#contact',
    )
    expect(screen.getByRole('link', { name: 'Start a project' })).toHaveClass('px-5', 'py-2.5')
  })

  it('takes its shadow past 50 px and marks the band it is over', () => {
    const io = installMockIntersectionObserver()
    render(
      <>
        <Header />
        <section id="work" />
      </>,
    )

    act(() =>
      io.observers[0]?.trigger([{ isIntersecting: true, target: { id: 'work' } as Element }]),
    )
    expect(screen.getByRole('link', { name: 'Work' })).toHaveAttribute('aria-current', 'true')
    expect(screen.getByRole('link', { name: 'Questions' })).not.toHaveAttribute('aria-current')

    act(() => setScroll(120, 4000, 1000))
    expect(document.querySelector('[data-header]')).toHaveClass('shadow-lg')

    act(() => setScroll(0, 4000, 1000))
    expect(document.querySelector('[data-header]')).not.toHaveClass('shadow-lg')
  })

  it('opens and closes the mobile panel', async () => {
    const user = userEvent.setup()
    render(<Header />)

    const toggle = screen.getByRole('button', { name: 'Open the menu' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByTestId('mobile-menu')).toBeNull()

    await user.click(toggle)
    expect(screen.getByRole('button', { name: 'Close the menu' })).toHaveAttribute(
      'aria-expanded',
      'true',
    )
    const panel = screen.getByTestId('mobile-menu')
    expect(panel).toHaveClass('lg:hidden')
    expect(screen.getAllByRole('link', { name: 'Deliverables' })).toHaveLength(2)

    await user.click(screen.getAllByRole('link', { name: 'Deliverables' })[1]!)
    expect(screen.queryByTestId('mobile-menu')).toBeNull()

    await user.click(screen.getByRole('button', { name: 'Open the menu' }))
    await user.click(screen.getAllByRole('link', { name: 'Start a project' })[1]!)
    expect(screen.queryByTestId('mobile-menu')).toBeNull()
  })

  it('toggles the theme and remembers it', async () => {
    installMedia({ dark: false })
    const user = userEvent.setup()
    render(<Header />)

    expect(screen.getByRole('button', { name: 'Switch to the dark theme' })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Switch to the dark theme' }))

    expect(document.documentElement).toHaveClass('dark')
    expect(localStorage.getItem('theme')).toBe('dark')
    expect(screen.getByRole('button', { name: 'Switch to the light theme' })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Switch to the light theme' }))
    expect(document.documentElement).not.toHaveClass('dark')
    expect(localStorage.getItem('theme')).toBe('light')
  })
})

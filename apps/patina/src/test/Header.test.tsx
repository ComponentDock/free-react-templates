import { act, render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Header, NAV, Wordmark } from '../components/Header'
import { site } from '../content'
import { setScroll } from './helpers'

describe('Wordmark', () => {
  it('is live type over a brass rule, not a raster logo', () => {
    const { container } = render(<Wordmark />)

    const link = screen.getByRole('link', { name: `${site.name} home` })
    expect(link).toHaveAttribute('href', '#top')
    expect(screen.getByText('PATINA')).toHaveClass('font-serif')
    expect(screen.getByText(site.descriptor)).toHaveClass('text-ink-300')
    expect(container.querySelector('[aria-hidden="true"].bg-primary-500')).not.toBeNull()
  })
})

describe('Header', () => {
  it('starts absolute and transparent over the hero, with both nav groups', () => {
    const { container } = render(<Header />)
    const header = container.querySelector('header') as HTMLElement

    expect(header).toHaveClass('absolute', 'bg-transparent', 'border-white/10')
    expect(header).not.toHaveAttribute('data-stuck')

    const left = screen.getByRole('navigation', { name: 'Bathrooms and renovations' })
    expect(left).toHaveClass('hidden', 'xl:flex')
    expect(left.querySelectorAll('a')).toHaveLength(3)

    const right = screen.getByRole('navigation', { name: 'Main navigation' })
    expect(right.querySelectorAll('a')).toHaveLength(3)
    expect(screen.getAllByRole('link', { name: 'Book a consultation' })[0]).toHaveClass(
      'rounded-none',
      'border-primary-500',
    )
  })

  it('takes the shadow past 50 px and pins itself past 80 px', () => {
    const { container } = render(<Header />)
    const header = container.querySelector('header') as HTMLElement

    act(() => setScroll(60, 3000, 1000))
    expect(header).toHaveClass('shadow-lg', 'absolute')
    expect(header).not.toHaveAttribute('data-stuck')

    act(() => setScroll(400, 3000, 1000))
    expect(header).toHaveClass('fixed', 'shadow-lg', 'bg-ink-900/95', 'backdrop-blur-md')
    expect(header).toHaveAttribute('data-stuck', 'true')
  })

  it('opens and closes the disclosure with aria-expanded and a swapped glyph', async () => {
    const user = userEvent.setup()
    render(<Header />)

    const toggle = screen.getByRole('button', { name: 'Open the menu' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(toggle).toHaveAttribute('aria-controls', 'mobile-menu')

    await user.click(toggle)

    expect(screen.getByRole('button', { name: 'Close the menu' })).toHaveAttribute(
      'aria-expanded',
      'true',
    )
    const panel = screen.getByTestId('mobile-menu')
    expect(panel.querySelectorAll('a')).toHaveLength(NAV.length + 1)

    await user.click(within(panel).getByRole('link', { name: 'Book a consultation' }))
    expect(screen.queryByTestId('mobile-menu')).toBeNull()

    await user.click(screen.getByRole('button', { name: 'Open the menu' }))
    await user.click(within(screen.getByTestId('mobile-menu')).getByRole('link', { name: 'Contact' }))
    expect(screen.queryByTestId('mobile-menu')).toBeNull()

    await user.click(screen.getByRole('button', { name: 'Open the menu' }))
    await user.click(screen.getByRole('button', { name: 'Close the menu' }))
    expect(screen.queryByTestId('mobile-menu')).toBeNull()
  })
})

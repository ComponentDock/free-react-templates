import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Navbar } from './Navbar'
import { leftLinks, rightLinks, siteName } from '../data'

describe('Navbar', () => {
  it('shows the centered wordmark', () => {
    render(<Navbar />)
    const wordmark = screen.getByRole('link', { name: siteName })
    expect(wordmark).toHaveClass('justify-self-center', 'font-serif', 'text-ink')
  })

  it('shows the left and right link groups styled in italic Playfair', () => {
    render(<Navbar />)
    for (const link of [...leftLinks, ...rightLinks]) {
      const element = screen.getByRole('link', { name: link })
      expect(element).toHaveClass('font-serif', 'italic', 'hover:text-ink')
      if (link === 'Home') {
        expect(element).toHaveClass('text-ink')
      } else {
        expect(element).toHaveClass('text-black')
      }
    }
  })

  it('marks the Home link as the active page', () => {
    render(<Navbar />)
    const home = screen.getAllByRole('link', { name: 'Home' })[0]!
    expect(home).toHaveAttribute('aria-current', 'page')
  })

  it('opens the mobile menu on toggle and reflects the state accessibly', () => {
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: 'Open menu' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(screen.getAllByRole('link', { name: 'Home' })).toHaveLength(1)

    fireEvent.click(toggle)
    expect(screen.getByRole('button', { name: 'Close menu' })).toHaveAttribute(
      'aria-expanded',
      'true',
    )
    expect(screen.getAllByRole('link', { name: 'Home' })).toHaveLength(2)
    expect(screen.getAllByRole('link', { name: 'Elements' })).toHaveLength(2)
  })

  it('closes the mobile menu when a link is chosen', () => {
    render(<Navbar />)
    fireEvent.click(screen.getByRole('button', { name: 'Open menu' }))
    const mobileHome = screen.getAllByRole('link', { name: 'Home' })[1]!
    mobileHome.addEventListener('click', (event) => event.preventDefault(), { once: true })
    fireEvent.click(mobileHome)
    expect(screen.getByRole('button', { name: 'Open menu' })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
  })
})

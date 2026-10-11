import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen, within } from '@testing-library/react'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the brand, nav links, and the closed search block', () => {
    render(<Navbar />)
    expect(screen.getByRole('banner')).toHaveAttribute('data-scrolled', 'false')
    expect(screen.getByText('trailmark')).toBeInTheDocument()
    expect(screen.getByText('travel agency')).toBeInTheDocument()
    const nav = screen.getByRole('navigation', { name: 'Primary' })
    for (const label of ['Home', 'About us', 'Offers', 'News', 'Contact']) {
      expect(within(nav).getByText(label)).toBeInTheDocument()
    }
    expect(within(nav).getByText('Home')).toHaveAttribute('aria-current', 'page')
    expect(within(nav).getByText('Offers')).not.toHaveAttribute('aria-current')
    expect(screen.getByRole('button', { name: 'Open search' })).toBeInTheDocument()
  })

  it('moves the active state to the clicked nav item', () => {
    render(<Navbar />)
    const nav = screen.getByRole('navigation', { name: 'Primary' })
    fireEvent.click(within(nav).getByText('Offers'))
    expect(within(nav).getByText('Offers')).toHaveAttribute('aria-current', 'page')
    expect(within(nav).getByText('Home')).not.toHaveAttribute('aria-current')
  })

  it('shrinks the bar once the page is scrolled', () => {
    render(<Navbar />)
    window.scrollY = 220
    fireEvent.scroll(window)
    expect(screen.getByRole('banner')).toHaveAttribute('data-scrolled', 'true')
    window.scrollY = 0
    fireEvent.scroll(window)
    expect(screen.getByRole('banner')).toHaveAttribute('data-scrolled', 'false')
  })

  it('expands the search block and reports submitted keywords', () => {
    render(<Navbar />)
    fireEvent.click(screen.getByRole('button', { name: 'Open search' }))
    const input = screen.getByLabelText('Search destinations')
    fireEvent.change(input, { target: { value: 'bali' } })
    fireEvent.click(screen.getByRole('button', { name: 'Submit search' }))
    expect(screen.getByRole('status')).toHaveTextContent('Showing results for bali')

    fireEvent.change(input, { target: { value: '   ' } })
    fireEvent.click(screen.getByRole('button', { name: 'Submit search' }))
    expect(screen.queryByRole('status')).not.toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: 'Close search' }))
    expect(screen.queryByLabelText('Search destinations')).not.toBeInTheDocument()
    fireEvent.click(screen.getByRole('button', { name: 'Open search' }))
    expect(screen.getByLabelText('Search destinations')).toBeInTheDocument()
  })

  it('collapses the nav behind a hamburger and closes it from a link', () => {
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: 'Toggle navigation' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('region', { name: 'Mobile navigation' })).not.toBeInTheDocument()

    fireEvent.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    const panel = screen.getByRole('region', { name: 'Mobile navigation' })
    expect(within(panel).getByText('Home')).toHaveAttribute('aria-current', 'page')

    fireEvent.click(within(panel).getByText('News'))
    expect(screen.queryByRole('region', { name: 'Mobile navigation' })).not.toBeInTheDocument()
    const nav = screen.getByRole('navigation', { name: 'Primary' })
    expect(within(nav).getByText('News')).toHaveAttribute('aria-current', 'page')

    fireEvent.click(toggle)
    fireEvent.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })
})

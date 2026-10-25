import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('splits the navy bar around the wordmark', () => {
    const { container } = render(<Navbar />)

    expect(screen.getAllByRole('link').map((link) => link.textContent)).toEqual([
      'Home',
      'About the Brand',
      'Portfolio',
      'Shop',
      'News',
      'Contact',
    ])
    expect(screen.getAllByText('Modeline')).toHaveLength(2)
    expect(container.querySelector('header')).toHaveClass('bg-ink')
    expect(container.querySelector('header > div')).toHaveClass('h-[93px]', 'md:px-[90px]')
    expect(screen.getByRole('button', { name: 'Open search' })).toHaveClass(
      'w-[92px]',
      'bg-white',
    )
  })

  it('opens the search overlay from the white square', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    await user.click(screen.getByRole('button', { name: 'Open search' }))

    expect(screen.getByRole('dialog', { name: 'Search Modeline' })).toBeInTheDocument()
    expect(screen.getByRole('searchbox')).toHaveFocus()

    await user.click(screen.getByRole('button', { name: 'Close search' }))

    expect(screen.queryByRole('dialog', { name: 'Search Modeline' })).not.toBeInTheDocument()
  })

  it('opens the mobile drawer and closes it on a chosen item', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: 'Open menu' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')

    await user.click(toggle)

    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    const drawer = screen.getByTestId('mobile-drawer')
    expect(drawer).toHaveClass('bg-white', 'md:hidden')
    expect(within(drawer).getAllByRole('link')).toHaveLength(6)

    await user.click(within(drawer).getByRole('link', { name: 'Portfolio' }))

    expect(screen.queryByTestId('mobile-drawer')).not.toBeInTheDocument()
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('keeps the drawer open on any other key', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    await user.keyboard('a')

    expect(screen.getByTestId('mobile-drawer')).toBeInTheDocument()
  })

  it('closes the drawer on Escape', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    await user.keyboard('{Escape}')

    expect(screen.queryByTestId('mobile-drawer')).not.toBeInTheDocument()
  })
})

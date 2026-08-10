import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Header } from './Header'

describe('Header', () => {
  it('shows the site name and all nav links', () => {
    render(<Header />)
    expect(screen.getByRole('link', { name: 'Trove' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Toggle search' })).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: 'Main' })).toBeInTheDocument()
    for (const link of ['Home', 'Category', 'Archive', 'Contact']) {
      expect(screen.getByRole('link', { name: link })).toBeInTheDocument()
    }
    for (const button of ['Pages', 'Blog']) {
      expect(screen.getByRole('button', { name: button })).toBeInTheDocument()
    }
  })

  it('opens and closes the search overlay', async () => {
    const user = userEvent.setup()
    render(<Header />)
    const trigger = screen.getByRole('button', { name: 'Toggle search' })
    await user.click(trigger)
    expect(screen.getByRole('searchbox', { name: 'Search' })).toHaveAttribute(
      'placeholder',
      'Search or enter website name.',
    )
    await user.click(screen.getByRole('button', { name: 'Close search' }))
    expect(screen.queryByRole('searchbox', { name: 'Search' })).not.toBeInTheDocument()
  })

  it('toggles the Pages and Blog dropdowns independently', async () => {
    const user = userEvent.setup()
    render(<Header />)
    const pagesButton = screen.getByRole('button', { name: /Pages/ })
    await user.click(pagesButton)
    expect(screen.getByRole('link', { name: 'Elements' })).toBeInTheDocument()
    await user.click(pagesButton)
    expect(screen.queryByRole('link', { name: 'Elements' })).not.toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: /Blog/ }))
    expect(screen.getByRole('link', { name: 'Blog Details' })).toBeInTheDocument()
    expect(screen.queryByRole('link', { name: 'Elements' })).not.toBeInTheDocument()
  })

  it('closes a dropdown when one of its links is chosen', async () => {
    const user = userEvent.setup()
    render(<Header />)
    await user.click(screen.getByRole('button', { name: /Pages/ }))
    await user.click(screen.getByRole('link', { name: 'Elements' }))
    expect(screen.queryByRole('link', { name: 'Elements' })).not.toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: /Blog/ }))
    await user.click(screen.getByRole('link', { name: 'Blog Details' }))
    expect(screen.queryByRole('link', { name: 'Blog Details' })).not.toBeInTheDocument()
  })
})

import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Queryvane — Search Form Bar Template')
  })

  it('renders the navbar with brand name', () => {
    render(<App />)
    expect(screen.getByText('Queryvane')).toBeInTheDocument()
  })

  it('renders the instructional text', () => {
    render(<App />)
    expect(screen.getByText(/Click the search icon/)).toBeInTheDocument()
  })

  it('renders the footer with Component Dock link', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: 'Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })

  it('toggles search overlay when search icon is clicked', async () => {
    const user = (await import('@testing-library/user-event')).default.setup()
    render(<App />)

    expect(screen.queryByPlaceholderText('Search...')).not.toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Toggle search' }))
    expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Close search' }))
    expect(screen.queryByPlaceholderText('Search...')).not.toBeInTheDocument()
  })
})

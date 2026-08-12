import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Layout } from './Layout'

describe('Layout', () => {
  it('renders the sidebar, hero, articles and footer landmarks', () => {
    render(<Layout />)

    expect(screen.getByRole('complementary', { name: 'Sidebar' })).toBeInTheDocument()
    const main = screen.getByRole('main')
    expect(within(main).getByRole('heading', { level: 1 }).textContent).toMatch(/Jude Marlowe/)
    expect(within(main).getByRole('heading', { level: 2, name: 'Articles' })).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('opens and closes the off-canvas sidebar with the hamburger toggle', async () => {
    const user = userEvent.setup()
    render(<Layout />)

    const toggle = screen.getByRole('button', { name: 'Toggle sidebar' })
    const sidebarPanel = screen.getByTestId('sidebar-panel')
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(toggle.querySelector('svg.lucide-menu')).toBeInTheDocument()
    expect(sidebarPanel).toHaveClass('-translate-x-full')

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    expect(toggle.querySelector('svg.lucide-x')).toBeInTheDocument()
    expect(sidebarPanel).not.toHaveClass('-translate-x-full')

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(toggle.querySelector('svg.lucide-menu')).toBeInTheDocument()
    expect(sidebarPanel).toHaveClass('-translate-x-full')
  })

  it('closes the sidebar when the Escape key is pressed', () => {
    render(<Layout />)

    const toggle = screen.getByRole('button', { name: 'Toggle sidebar' })
    fireEvent.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')

    fireEvent.keyDown(document, { key: 'Enter' })
    expect(toggle).toHaveAttribute('aria-expanded', 'true')

    fireEvent.keyDown(document, { key: 'Escape' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })
})

import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { CanvasMenu } from './CanvasMenu'

describe('CanvasMenu', () => {
  it('renders the Contact Us button', () => {
    render(<CanvasMenu />)
    expect(screen.getByText('Contact Us')).toBeInTheDocument()
  })

  it('toggles the side menu open and closed', async () => {
    const user = userEvent.setup()
    render(<CanvasMenu />)

    const toggleBtn = screen.getByRole('button', { name: /open menu/i })
    expect(toggleBtn).toBeInTheDocument()

    await user.click(toggleBtn)

    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()
    expect(screen.getByRole('complementary', { name: /side navigation/i })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: /close menu/i }))
    expect(
      screen.queryByRole('complementary', { name: /side navigation/i }),
    ).not.toBeInTheDocument()
  })

  it('closes the menu when the backdrop is clicked', async () => {
    const user = userEvent.setup()
    render(<CanvasMenu />)

    await user.click(screen.getByRole('button', { name: /open menu/i }))
    expect(screen.getByRole('complementary', { name: /side navigation/i })).toBeInTheDocument()

    const backdrop = document.querySelector('[aria-hidden="true"]') as HTMLElement
    expect(backdrop).not.toBeNull()
    await user.click(backdrop)
    expect(
      screen.queryByRole('complementary', { name: /side navigation/i }),
    ).not.toBeInTheDocument()
  })

  it('closes the menu when a sidebar link is clicked', async () => {
    const user = userEvent.setup()
    render(<CanvasMenu />)

    await user.click(screen.getByRole('button', { name: /open menu/i }))
    expect(screen.getByRole('complementary', { name: /side navigation/i })).toBeInTheDocument()

    // Click a link inside the sidebar to trigger handleClose
    await user.click(screen.getByRole('link', { name: 'Home' }))
    expect(
      screen.queryByRole('complementary', { name: /side navigation/i }),
    ).not.toBeInTheDocument()
  })
})

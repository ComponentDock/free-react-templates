import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Sidebar } from './Sidebar'

describe('Sidebar', () => {
  it('renders the site name and navigation links', () => {
    render(<Sidebar menuOpen={false} onClose={() => {}} />)

    expect(screen.getByText('Echo')).toBeInTheDocument()
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Resume')).toBeInTheDocument()
    expect(screen.getByText('Services')).toBeInTheDocument()
    expect(screen.getByText('Portfolio')).toBeInTheDocument()
    expect(screen.getByText('Blog')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('shows numbered navigation items', () => {
    render(<Sidebar menuOpen={false} onClose={() => {}} />)

    expect(screen.getByText('01')).toBeInTheDocument()
    expect(screen.getByText('02')).toBeInTheDocument()
    expect(screen.getByText('03')).toBeInTheDocument()
    expect(screen.getByText('04')).toBeInTheDocument()
    expect(screen.getByText('05')).toBeInTheDocument()
    expect(screen.getByText('06')).toBeInTheDocument()
  })

  it('calls onClose when close button is clicked', async () => {
    const onClose = vi.fn()
    const user = userEvent.setup()
    render(<Sidebar menuOpen={true} onClose={onClose} />)

    const closeButton = screen.getByRole('button', { name: /close menu/i })
    await user.click(closeButton)

    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('calls onClose when overlay is clicked', async () => {
    const onClose = vi.fn()
    const user = userEvent.setup()
    render(<Sidebar menuOpen={true} onClose={onClose} />)

    const overlay = document.querySelector('.fixed.inset-0.z-40')
    if (overlay) {
      await user.click(overlay)
    }

    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('calls onClose when a nav link is clicked', async () => {
    const onClose = vi.fn()
    const user = userEvent.setup()
    render(<Sidebar menuOpen={true} onClose={onClose} />)

    const homeLink = screen.getByText('Home')
    await user.click(homeLink)

    expect(onClose).toHaveBeenCalledTimes(1)
  })
})

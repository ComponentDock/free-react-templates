import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Sidebar } from './Sidebar'

describe('Sidebar', () => {
  it('renders navigation links when open', () => {
    render(<Sidebar open={true} onClose={() => {}} />)

    const nav = screen.getByRole('navigation', { name: /main navigation/i })
    expect(nav).toBeInTheDocument()

    expect(screen.getByRole('link', { name: /home/i })).toHaveAttribute('href', '#home')
    expect(screen.getByRole('link', { name: /about/i })).toHaveAttribute('href', '#about')
    expect(screen.getByRole('link', { name: /services/i })).toHaveAttribute('href', '#services')
    expect(screen.getByRole('link', { name: /portfolio/i })).toHaveAttribute('href', '#portfolio')
    expect(screen.getByRole('link', { name: /blog/i })).toHaveAttribute('href', '#blog')
    expect(screen.getByRole('link', { name: /testimonials/i })).toHaveAttribute(
      'href',
      '#testimonials',
    )
  })

  it('renders a search input', () => {
    render(<Sidebar open={true} onClose={() => {}} />)
    expect(screen.getByRole('searchbox', { name: /search/i })).toBeInTheDocument()
  })

  it('renders mini gallery thumbnails', () => {
    render(<Sidebar open={true} onClose={() => {}} />)
    const images = screen.getAllByAltText(/gallery thumbnail/i)
    expect(images).toHaveLength(6)
  })

  it('calls onClose when close button is clicked', async () => {
    const onClose = vi.fn()
    const user = userEvent.setup()
    render(<Sidebar open={true} onClose={onClose} />)

    await user.click(screen.getByRole('button', { name: /close menu/i }))
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('calls onClose when a nav link is clicked', async () => {
    const onClose = vi.fn()
    const user = userEvent.setup()
    render(<Sidebar open={true} onClose={onClose} />)

    await user.click(screen.getByRole('link', { name: /home/i }))
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('applies translate-x-full when closed', () => {
    render(<Sidebar open={false} onClose={() => {}} />)
    const nav = screen.getByRole('navigation', { name: /main navigation/i })
    expect(nav).toHaveClass('translate-x-full')
  })
})

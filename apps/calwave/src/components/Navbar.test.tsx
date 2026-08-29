import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the site name "Calwave"', () => {
    render(<Navbar />)
    expect(screen.getByText('Calwave')).toBeInTheDocument()
  })

  it('renders the site name as a link', () => {
    render(<Navbar />)
    const link = screen.getByRole('link', { name: 'Calwave' })
    expect(link).toHaveAttribute('href', '/')
  })

  it('renders navigation links', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: 'Calendar' })).toHaveAttribute('href', '#calendar')
    expect(screen.getByRole('link', { name: 'Features' })).toHaveAttribute('href', '#features')
  })

  it('renders a dark mode toggle button', () => {
    render(<Navbar />)
    expect(screen.getByRole('button', { name: /switch to dark mode/i })).toBeInTheDocument()
  })

  it('shows "Switch to light mode" label when isDark is true', () => {
    render(<Navbar isDark />)
    expect(screen.getByRole('button', { name: /switch to light mode/i })).toBeInTheDocument()
  })

  it('calls onToggleDark when the toggle button is clicked', async () => {
    const user = userEvent.setup()
    const onToggleDark = vi.fn()
    render(<Navbar onToggleDark={onToggleDark} />)
    await user.click(screen.getByRole('button', { name: /switch to dark mode/i }))
    expect(onToggleDark).toHaveBeenCalledTimes(1)
  })
})

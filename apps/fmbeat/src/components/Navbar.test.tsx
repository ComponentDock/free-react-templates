import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('has testid navbar', () => {
    render(<Navbar onToggleDark={vi.fn()} />)
    expect(screen.getByTestId('navbar')).toBeInTheDocument()
  })

  it('renders the brand logo text', () => {
    render(<Navbar onToggleDark={vi.fn()} />)
    expect(screen.getByText('Fmbeat')).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(<Navbar onToggleDark={vi.fn()} />)
    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /about/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /charts/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /djs/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /blog/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /contact/i })).toBeInTheDocument()
  })

  it('renders social media icon links', () => {
    render(<Navbar onToggleDark={vi.fn()} />)
    expect(screen.getByLabelText(/twitter/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/soundcloud/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/instagram/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/facebook/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/youtube/i)).toBeInTheDocument()
  })

  it('calls onToggleDark when dark mode button is clicked', async () => {
    const user = userEvent.setup()
    const onToggleDark = vi.fn()
    render(<Navbar onToggleDark={onToggleDark} />)
    const darkButtons = screen.getAllByRole('button', { name: /toggle dark mode/i })
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    await user.click(darkButtons[0]!)
    expect(onToggleDark).toHaveBeenCalledTimes(1)
  })

  it('toggles mobile menu when hamburger is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar onToggleDark={vi.fn()} />)
    const hamburger = screen.getByRole('button', { name: /open menu/i })
    await user.click(hamburger)
    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: /home/i })).toHaveLength(2)
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar onToggleDark={vi.fn()} />)
    const hamburger = screen.getByRole('button', { name: /open menu/i })
    await user.click(hamburger)
    const mobileLinks = screen.getAllByRole('link', { name: /about/i })
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    await user.click(mobileLinks[mobileLinks.length - 1]!)
    expect(screen.queryByRole('button', { name: /close menu/i })).not.toBeInTheDocument()
  })
})

import { describe, expect, it } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders navigation links and brand', () => {
    render(<Navbar />)
    expect(screen.getByText('Highland')).toBeInTheDocument()
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Rooms')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
    expect(screen.getByText('Book A Room')).toBeInTheDocument()
  })

  it('starts with transparent background', () => {
    render(<Navbar />)
    const header = screen.getByTestId('navbar')
    expect(header).toHaveClass('bg-transparent')
  })

  it('becomes sticky on scroll', () => {
    render(<Navbar />)
    const header = screen.getByTestId('navbar')
    expect(header).toHaveClass('bg-transparent')
    fireEvent.scroll(window, { target: { scrollY: 100 } })
    expect(header).toHaveClass('bg-black')
  })

  it('toggles mobile menu on button click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const menuBtn = screen.getByRole('button', { name: /open menu/i })
    await user.click(menuBtn)
    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()
  })

  it('closes mobile menu when nav link clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: /open menu/i }))
    const mobileLinks = screen.getAllByText('Rooms')
    await user.click(mobileLinks[mobileLinks.length - 1]!)
    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })

  it('closes mobile menu when Book A Room clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: /open menu/i }))
    const bookBtns = screen.getAllByText('Book A Room')
    await user.click(bookBtns[bookBtns.length - 1]!)
    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })
})

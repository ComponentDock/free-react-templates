import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the logo', () => {
    render(<Navbar />)
    expect(screen.getByText('Loanworks')).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(<Navbar />)
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Loan')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('FAQ')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('renders the phone number', () => {
    render(<Navbar />)
    expect(screen.getByText('+10 673 567 367')).toBeInTheDocument()
  })

  it('renders the Apply for a Loan button', () => {
    render(<Navbar />)
    expect(screen.getByText('Apply for a Loan')).toBeInTheDocument()
  })

  it('toggles mobile menu on button click', async () => {
    render(<Navbar />)
    const menuBtn = screen.getByRole('button', { name: /open menu/i })
    await userEvent.click(menuBtn)
    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()
    await userEvent.click(screen.getByRole('button', { name: /close menu/i }))
    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })

  it('closes mobile menu when a link is clicked', async () => {
    render(<Navbar />)
    const menuBtn = screen.getByRole('button', { name: /open menu/i })
    await userEvent.click(menuBtn)
    const mobileLinks = screen.getAllByText('Home')
    expect(mobileLinks.length).toBeGreaterThan(1)
    await userEvent.click(mobileLinks[1]!)
    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })
})

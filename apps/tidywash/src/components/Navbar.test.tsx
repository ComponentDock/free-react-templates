import { expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { act } from 'react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

it('renders logo and nav links', () => {
  render(<Navbar />)
  expect(screen.getByText('Tidy')).toBeInTheDocument()
  expect(screen.getByText('Wash')).toBeInTheDocument()
  expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument()
  expect(screen.getByRole('link', { name: 'About' })).toBeInTheDocument()
  expect(screen.getByRole('link', { name: 'Pricing' })).toBeInTheDocument()
  expect(screen.getByRole('link', { name: 'Services' })).toBeInTheDocument()
  expect(screen.getByRole('link', { name: 'Blog' })).toBeInTheDocument()
  expect(screen.getByRole('link', { name: 'Contact' })).toBeInTheDocument()
})

it('toggles mobile menu', async () => {
  const user = userEvent.setup()
  render(<Navbar />)
  const toggle = screen.getByRole('button', { name: /open menu/i })
  await user.click(toggle)
  expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()
  await user.click(screen.getByRole('button', { name: /close menu/i }))
  expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
})

it('closes mobile menu when nav link clicked', async () => {
  const user = userEvent.setup()
  render(<Navbar />)
  await user.click(screen.getByRole('button', { name: /open menu/i }))
  const aboutLinks = screen.getAllByRole('link', { name: 'About' })
  await user.click(aboutLinks[aboutLinks.length - 1]!)
  expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
})

it('closes mobile menu when ButtonLink clicked', async () => {
  const user = userEvent.setup()
  render(<Navbar />)
  await user.click(screen.getByRole('button', { name: /open menu/i }))
  const quoteButtons = screen.getAllByRole('link', { name: 'Request A Quote' })
  await user.click(quoteButtons[quoteButtons.length - 1]!)
  expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
})

it('applies scrolled styles when page is scrolled', async () => {
  render(<Navbar />)
  const nav = screen.getByLabelText('Main navigation')
  expect(nav.className).toContain('bg-transparent')
  await act(async () => {
    Object.defineProperty(window, 'scrollY', { value: 100, writable: true, configurable: true })
    window.dispatchEvent(new Event('scroll'))
  })
  expect(nav.className).toContain('bg-black')
})

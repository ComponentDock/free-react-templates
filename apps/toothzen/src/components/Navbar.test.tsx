import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

it('renders the logo with Toothzen text', () => {
  render(<Navbar />)
  const logos = screen.getAllByText(/Tooth/)
  expect(logos.length).toBeGreaterThanOrEqual(1)
})

it('renders all navigation links', () => {
  render(<Navbar />)
  for (const label of ['Home', 'About', 'Services', 'Team', 'Blog', 'Contact']) {
    const links = screen.getAllByRole('link', { name: label })
    expect(links.length).toBeGreaterThanOrEqual(1)
  }
})

it('renders the appointment button', () => {
  render(<Navbar />)
  const links = screen.getAllByRole('link', { name: /appointment/i })
  expect(links.length).toBeGreaterThanOrEqual(1)
})

it('toggles mobile menu via aria-expanded', async () => {
  const user = userEvent.setup()
  render(<Navbar />)

  const toggle = screen.getByRole('button', { name: /toggle navigation/i })
  expect(toggle).toHaveAttribute('aria-expanded', 'false')

  await user.click(toggle)
  expect(toggle).toHaveAttribute('aria-expanded', 'true')
  expect(screen.getByTestId('mobile-menu')).toBeInTheDocument()

  await user.click(toggle)
  expect(toggle).toHaveAttribute('aria-expanded', 'false')
  expect(screen.queryByTestId('mobile-menu')).not.toBeInTheDocument()
})

it('closes mobile menu when a mobile nav link is clicked', async () => {
  const user = userEvent.setup()
  render(<Navbar />)

  const toggle = screen.getByRole('button', { name: /toggle navigation/i })
  // Open mobile menu
  await user.click(toggle)
  const mobileMenu = screen.getByTestId('mobile-menu')

  // Click a Blog link inside the mobile menu using within()
  const blogLink = within(mobileMenu).getByRole('link', { name: 'Blog' })
  await user.click(blogLink)
  expect(screen.queryByTestId('mobile-menu')).not.toBeInTheDocument()
})

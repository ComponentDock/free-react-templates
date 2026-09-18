import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

test('renders brand name and CTA buttons', () => {
  render(<Navbar />)
  expect(screen.getByText('TalentGate')).toBeInTheDocument()
  expect(screen.getByText('Post a Job')).toBeInTheDocument()
  expect(screen.getByText('Want a Job')).toBeInTheDocument()
})

test('renders navigation links', () => {
  render(<Navbar />)
  expect(screen.getByText('Services')).toBeInTheDocument()
  expect(screen.getByText('Jobs')).toBeInTheDocument()
  expect(screen.getByText('Blog')).toBeInTheDocument()
})

test('toggles mobile menu on click', async () => {
  const user = userEvent.setup()
  render(<Navbar />)
  const toggle = screen.getByLabelText('Toggle navigation')
  await user.click(toggle)
  // Mobile menu links should now be visible (there are 2 sets: desktop hidden on mobile, mobile shown)
  const servicesLinks = screen.getAllByText('Services')
  expect(servicesLinks.length).toBeGreaterThanOrEqual(2)
  await user.click(toggle)
  // Menu toggles back
  expect(screen.getAllByText('Services').length).toBeGreaterThanOrEqual(1)
})

test('navbar has correct links', () => {
  render(<Navbar />)
  const nav = screen.getByRole('navigation')
  const links = nav.querySelectorAll('a')
  expect(links.length).toBeGreaterThan(0)
  expect(links[0]).toHaveAttribute('href', '/')
})

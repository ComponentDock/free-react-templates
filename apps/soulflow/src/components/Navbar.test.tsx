import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the logo', () => {
    render(<Navbar />)
    expect(screen.getByText('Soulflow')).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(<Navbar />)
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Yoga Classes')).toBeInTheDocument()
    expect(screen.getByText('Events')).toBeInTheDocument()
    expect(screen.getByText('About Studio')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('toggles mobile menu', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByLabelText('Toggle menu')
    await user.click(toggle)

    // Mobile menu should show links (duplicated for mobile)
    const mobileLinks = screen.getAllByText('Home')
    expect(mobileLinks.length).toBeGreaterThanOrEqual(2)
  })

  it('shows dropdown on hover', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const classesBtn = screen.getByText('Yoga Classes')
    await user.hover(classesBtn)

    expect(screen.getByText('Yoga Dance')).toBeInTheDocument()
    expect(screen.getByText('Bare Workout')).toBeInTheDocument()
    expect(screen.getByText('Peace of Mind')).toBeInTheDocument()
  })

  it('hides dropdown on mouse leave', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const classesBtn = screen.getByText('Yoga Classes')
    await user.hover(classesBtn)
    expect(screen.getByText('Yoga Dance')).toBeInTheDocument()

    await user.unhover(classesBtn)
    expect(screen.queryByText('Yoga Dance')).not.toBeInTheDocument()
  })

  it('clicking mobile link closes menu', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    // Open mobile menu
    const toggle = screen.getByLabelText('Toggle menu')
    await user.click(toggle)

    // Click a mobile nav link
    const mobileNavLinks = screen.getAllByText('Events')
    const lastEvent = mobileNavLinks[mobileNavLinks.length - 1]
    if (lastEvent) await user.click(lastEvent)

    // Menu should close (mobile links disappear)
    expect(screen.getAllByText('Home')).toHaveLength(1)
  })
})

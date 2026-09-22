import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Header } from './Header'
import { describe, expect, it } from 'vitest'

describe('Header', () => {
  it('renders the site name and logo', () => {
    render(<Header />)
    expect(screen.getByText('Kinectwell')).toBeInTheDocument()
    expect(screen.getByText('K')).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(<Header />)
    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /about/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /services/i })).toBeInTheDocument()
  })

  it('renders phone number', () => {
    render(<Header />)
    expect(screen.getByText('+1 (555) 123-4567')).toBeInTheDocument()
  })

  it('renders appointment CTA', () => {
    render(<Header />)
    expect(screen.getByRole('link', { name: /make an appointment/i })).toBeInTheDocument()
  })

  it('toggles mobile menu on button click', async () => {
    const user = userEvent.setup()
    render(<Header />)

    const menuBtn = screen.getByRole('button', { name: /open menu/i })
    await user.click(menuBtn)

    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: /mobile navigation/i })).toBeInTheDocument()

    const closeBtn = screen.getByRole('button', { name: /close menu/i })
    await user.click(closeBtn)

    expect(screen.queryByRole('button', { name: /close menu/i })).not.toBeInTheDocument()
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Header />)

    const menuBtn = screen.getByRole('button', { name: /open menu/i })
    await user.click(menuBtn)

    const aboutLinks = screen.getAllByRole('link', { name: /about/i })
    await user.click(aboutLinks[1]!)

    expect(screen.queryByRole('button', { name: /close menu/i })).not.toBeInTheDocument()
  })

  it('closes mobile menu when appointment button is clicked', async () => {
    const user = userEvent.setup()
    render(<Header />)

    const menuBtn = screen.getByRole('button', { name: /open menu/i })
    await user.click(menuBtn)

    const appointmentBtns = screen.getAllByRole('link', { name: /make an appointment/i })
    await user.click(appointmentBtns[1]!)

    expect(screen.queryByRole('button', { name: /close menu/i })).not.toBeInTheDocument()
  })
})

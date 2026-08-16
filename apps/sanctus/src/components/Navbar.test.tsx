import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Navbar } from './Navbar'
import { siteName } from '../data'

describe('Navbar', () => {
  it('shows the wordmark and all five links with Home active', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: siteName })).toBeInTheDocument()
    const links = ['Home', 'Sermons', 'Ministries', 'Events', 'Contact']
    for (const label of links) {
      expect(screen.getAllByRole('link', { name: label }).length).toBeGreaterThan(0)
    }
  })

  it('opens the Sermons dropdown on hover with sub-items', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const home = screen.getAllByRole('link', { name: 'Home' })[0]!
    await user.hover(home)
    expect(screen.queryByRole('link', { name: 'Sermons Single' })).not.toBeInTheDocument()
    const sermons = screen.getAllByRole('link', { name: 'Sermons' })[0]!
    expect(sermons).toBeInTheDocument()
    await user.hover(sermons)
    expect(await screen.findByRole('link', { name: 'Sermons Single' })).toBeInTheDocument()
    expect(screen.getByText('Dropdown')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Sub Menu One' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Sub Menu Two' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Sub Menu Three' })).toBeInTheDocument()
    await user.unhover(sermons)
    expect(screen.queryByRole('link', { name: 'Sermons Single' })).not.toBeInTheDocument()
  })

  it('toggles the mobile menu with the burger and closes on link click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const burger = screen.getByRole('button', { name: 'Open menu' })
    await user.click(burger)
    const close = screen.getByRole('button', { name: 'Close menu' })
    expect(close).toBeInTheDocument()
    const mobileContact = screen.getAllByRole('link', { name: 'Contact' })[1]
    expect(mobileContact).toBeInTheDocument()
    await user.click(mobileContact!)
    expect(screen.getByRole('button', { name: 'Open menu' })).toBeInTheDocument()
  })
})

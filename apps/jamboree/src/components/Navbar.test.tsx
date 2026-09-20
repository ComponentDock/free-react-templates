import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the Jamboree logo', () => {
    render(<Navbar />)
    expect(screen.getByText('Jamboree')).toBeDefined()
  })

  it('renders all navigation links', () => {
    render(<Navbar />)
    for (const link of ['Home', 'Functionalities', 'Speaker', 'Upcoming Event']) {
      expect(screen.getByText(link)).toBeDefined()
    }
  })

  it('opens mobile menu when hamburger is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const button = screen.getByRole('button', { name: /open menu/i })
    await user.click(button)
    expect(screen.getByRole('button', { name: /close menu/i })).toBeDefined()
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: /open menu/i }))
    const homeLinks = screen.getAllByText('Home')
    await user.click(homeLinks[1]!)
    expect(screen.getByRole('button', { name: /open menu/i })).toBeDefined()
  })

  it('has correct anchor hrefs', () => {
    render(<Navbar />)
    const home = screen.getByText('Home')
    expect(home.getAttribute('href')).toBe('#home')
    const func = screen.getByText('Functionalities')
    expect(func.getAttribute('href')).toBe('#functionalities')
  })
})

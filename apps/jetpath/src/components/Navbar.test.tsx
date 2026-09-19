import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders logo and nav links', () => {
    render(<Navbar />)
    expect(screen.getByText('jetpath')).toBeInTheDocument()
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Destinations')).toBeInTheDocument()
    expect(screen.getByText('Book Now')).toBeInTheDocument()
  })

  it('toggles mobile menu on button click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /open menu/i })
    await user.click(toggle)
    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: /close menu/i }))
    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: /open menu/i }))
    const mobileLinks = screen.getAllByText('Contact')
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    await user.click(mobileLinks[mobileLinks.length - 1]!)
    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })
})

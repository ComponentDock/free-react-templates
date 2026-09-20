import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders logo', () => {
    render(<Navbar />)
    expect(screen.getByText('Confetti')).toBeInTheDocument()
  })

  it('renders all nav links', () => {
    render(<Navbar />)
    const links = ['Home', 'About', 'Speakers', 'Schedule', 'Blog', 'Contact']
    links.forEach((l) => {
      expect(screen.getByText(l)).toBeInTheDocument()
    })
  })

  it('renders Get Your Ticket button', () => {
    render(<Navbar />)
    expect(screen.getAllByText('Get Your Ticket').length).toBeGreaterThan(0)
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
})

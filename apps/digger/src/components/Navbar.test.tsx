import userEvent from '@testing-library/user-event'
import { render, screen } from '@testing-library/react'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders logo and nav links', () => {
    render(<Navbar />)
    expect(screen.getByText('Digger')).toBeInTheDocument()
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Services')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('toggles mobile menu open and closed', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByLabelText('Toggle menu')
    await user.click(toggle)
    const pressLinks = screen.getAllByText('Press')
    expect(pressLinks.length).toBeGreaterThanOrEqual(2)
    const homeLinks = screen.getAllByText('Home')
    await user.click(homeLinks[homeLinks.length - 1]!)
    expect(screen.getAllByText('Press').length).toBe(1)
  })
})

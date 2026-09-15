import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the Wristly brand link', () => {
    render(<Navbar />)
    expect(screen.getByText('Wristly')).toHaveAttribute('href', '#home')
  })

  it('renders all navigation links', () => {
    render(<Navbar />)
    const links = ['Home', 'About', 'Features', 'Products', 'Reviews', 'FAQ']
    links.forEach((label) => {
      expect(screen.getByText(label)).toBeInTheDocument()
    })
  })

  it('toggles mobile menu on button click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /open menu/i })
    expect(screen.queryByLabelText('Mobile navigation')).not.toBeInTheDocument()

    await user.click(toggle)
    expect(screen.getByLabelText('Mobile navigation')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: /close menu/i }))
    expect(screen.queryByLabelText('Mobile navigation')).not.toBeInTheDocument()
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /open menu/i })
    await user.click(toggle)
    expect(screen.getByLabelText('Mobile navigation')).toBeInTheDocument()

    // Click a mobile nav link
    const mobileAbout = screen.getAllByText('About')
    // The second "About" is the mobile nav link (first is desktop)
    const mobileLink = mobileAbout[1]!
    await user.click(mobileLink)
    expect(screen.queryByLabelText('Mobile navigation')).not.toBeInTheDocument()
  })
})

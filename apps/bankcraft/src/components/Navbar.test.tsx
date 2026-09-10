import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the logo', () => {
    render(<Navbar />)
    expect(screen.getByText(/Bankcraft/)).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(<Navbar />)
    for (const link of ['Home', 'About', 'Services', 'Blog', 'Contact']) {
      expect(screen.getByText(link)).toBeInTheDocument()
    }
  })

  it('toggles mobile menu on click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /toggle menu/i })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /toggle menu/i })
    await user.click(toggle)

    const aboutLinks = screen.getAllByText('About')
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const mobileLink = aboutLinks[aboutLinks.length - 1]!
    await user.click(mobileLink)

    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })
})

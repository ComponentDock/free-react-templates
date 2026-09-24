import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the logo and brand name', () => {
    render(<Navbar />)
    expect(screen.getByText('SHATTER')).toBeInTheDocument()
    expect(screen.getByText('Magazine')).toBeInTheDocument()
  })

  it('renders all navigation links', () => {
    render(<Navbar />)
    expect(screen.getByRole('button', { name: 'Home' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Archive' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Category' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Pages' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Contact' })).toBeInTheDocument()
  })

  it('highlights active link in brand color', () => {
    render(<Navbar />)
    const homeBtn = screen.getByRole('button', { name: 'Home' })
    expect(homeBtn).toHaveClass('text-brand')
  })

  it('changes active link on click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: 'Archive' }))
    expect(screen.getByRole('button', { name: 'Archive' })).toHaveClass('text-brand')
    expect(screen.getByRole('button', { name: 'Home' })).toHaveClass('text-white')
  })

  it('toggles search bar visibility', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    expect(screen.queryByLabelText('Search articles')).not.toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Toggle search' }))
    expect(screen.getByLabelText('Search articles')).toBeInTheDocument()
  })

  it('closes search bar on second click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: 'Toggle search' }))
    expect(screen.getByLabelText('Search articles')).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Toggle search' }))
    expect(screen.queryByLabelText('Search articles')).not.toBeInTheDocument()
  })

  it('toggles mobile menu', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const menuBtn = screen.getByRole('button', { name: 'Toggle menu' })
    expect(menuBtn).toHaveAttribute('aria-expanded', 'false')
    await user.click(menuBtn)
    expect(menuBtn).toHaveAttribute('aria-expanded', 'true')
  })

  it('closes mobile menu on link click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: 'Toggle menu' }))
    // Mobile links have the same names — find the mobile one in the dropdown
    const archiveButtons = screen.getAllByRole('button', { name: 'Archive' })
    const mobileArchive = archiveButtons[1]!
    await user.click(mobileArchive)
    const menuBtn = screen.getByRole('button', { name: 'Toggle menu' })
    expect(menuBtn).toHaveAttribute('aria-expanded', 'false')
  })
})

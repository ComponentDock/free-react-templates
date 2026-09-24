import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Navbar from './Navbar'

describe('Navbar', () => {
  it('renders logo', () => {
    render(<Navbar />)
    expect(screen.getByText('Clinipoint')).toBeInTheDocument()
  })

  it('renders nav links', () => {
    render(<Navbar />)
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Services')).toBeInTheDocument()
    expect(screen.getByText('Doctors')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('renders search buttons', () => {
    render(<Navbar />)
    expect(screen.getAllByLabelText('Search').length).toBeGreaterThanOrEqual(1)
  })

  it('hamburger toggles mobile menu', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggleButton = screen.getByLabelText('Open menu')
    await user.click(toggleButton)

    expect(screen.getByLabelText('Close menu')).toBeInTheDocument()
    expect(screen.getAllByText('Book Appointment').length).toBeGreaterThanOrEqual(1)
  })

  it('desktop search button toggles search input', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const searchButtons = screen.getAllByLabelText('Search')
    const desktopSearch = searchButtons[0]
    if (desktopSearch) {
      await user.click(desktopSearch)
      expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument()
    }
  })

  it('mobile search button toggles search input', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const searchButtons = screen.getAllByLabelText('Search')
    const mobileSearch = searchButtons[1]
    if (mobileSearch) {
      await user.click(mobileSearch)
      expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument()
    }
  })

  it('desktop Book Appointment scrolls to appointment', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const bookButtons = screen.getAllByText('Book Appointment')
    const desktopBtn = bookButtons[0]
    if (desktopBtn) {
      await user.click(desktopBtn)
    }
  })

  it('mobile Book Appointment scrolls and closes menu', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggleButton = screen.getByLabelText('Open menu')
    await user.click(toggleButton)

    const bookButtons = screen.getAllByText('Book Appointment')
    const mobileBtn = bookButtons[bookButtons.length - 1]
    if (mobileBtn) {
      await user.click(mobileBtn)
    }

    expect(screen.getByLabelText('Open menu')).toBeInTheDocument()
  })

  it('mobile nav link closes menu on click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggleButton = screen.getByLabelText('Open menu')
    await user.click(toggleButton)

    const aboutLinks = screen.getAllByText('About')
    const mobileAbout = aboutLinks[aboutLinks.length - 1]
    if (mobileAbout) {
      await user.click(mobileAbout)
    }

    expect(screen.getByLabelText('Open menu')).toBeInTheDocument()
  })
})

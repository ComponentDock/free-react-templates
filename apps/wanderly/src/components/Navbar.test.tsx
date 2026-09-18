import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders logo text', () => {
    render(<Navbar />)
    expect(screen.getByText('Wanderly')).toBeInTheDocument()
  })

  it('renders main nav links', () => {
    render(<Navbar />)
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Packages')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('renders Book Now button', () => {
    render(<Navbar />)
    expect(screen.getByText('Book Now')).toBeInTheDocument()
  })

  it('toggles mobile menu on button click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByLabelText('Toggle navigation')
    await user.click(toggle)
    expect(
      screen.getByLabelText('Toggle navigation', { selector: 'button[aria-expanded="true"]' }),
    ).toBeInTheDocument()
  })

  it('opens Blog dropdown on click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const blogButtons = screen.getAllByText('Blog')
    const blogBtn = blogButtons[0]!
    await user.click(blogBtn)
    expect(screen.getByText('Single Post')).toBeInTheDocument()
  })

  it('opens Pages dropdown on click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const pagesBtn = screen.getByText('Pages')
    await user.click(pagesBtn)
    expect(screen.getByText('Elements')).toBeInTheDocument()
    expect(screen.getByText('Gallery')).toBeInTheDocument()
  })
})

import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the brand logo', () => {
    render(<Navbar />)
    expect(screen.getByText('Workfolio')).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(<Navbar />)
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getAllByText('Blog').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Pages').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('renders social media icons', () => {
    render(<Navbar />)
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument()
    expect(screen.getByLabelText('Behance')).toBeInTheDocument()
    expect(screen.getByLabelText('Website')).toBeInTheDocument()
  })

  it('toggles mobile menu on button click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggleBtn = screen.getByLabelText('Toggle navigation')
    expect(toggleBtn).toHaveAttribute('aria-expanded', 'false')

    await user.click(toggleBtn)
    expect(toggleBtn).toHaveAttribute('aria-expanded', 'true')

    await user.click(toggleBtn)
    expect(toggleBtn).toHaveAttribute('aria-expanded', 'false')
  })

  it('renders blog dropdown children when dropdown is hovered', () => {
    render(<Navbar />)
    expect(screen.getAllByText('Blog').length).toBeGreaterThanOrEqual(1)
  })

  it('renders pages dropdown children', () => {
    render(<Navbar />)
    expect(screen.getAllByText('Pages').length).toBeGreaterThanOrEqual(1)
  })

  it('closes mobile menu when a dropdown child link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggleBtn = screen.getByLabelText('Toggle navigation')
    await user.click(toggleBtn)
    expect(toggleBtn).toHaveAttribute('aria-expanded', 'true')

    // Click on a dropdown child link (Blog -> Blog in mobile menu)
    const blogLinks = screen.getAllByText('Blog')
    await user.click(blogLinks[blogLinks.length - 1]!)
    expect(toggleBtn).toHaveAttribute('aria-expanded', 'false')
  })

  it('closes mobile menu when a main nav link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggleBtn = screen.getByLabelText('Toggle navigation')
    await user.click(toggleBtn)
    expect(toggleBtn).toHaveAttribute('aria-expanded', 'true')

    // Click on the Home link in mobile menu (second one, first is desktop)
    const homeLinks = screen.getAllByText('Home')
    await user.click(homeLinks[1]!)
    expect(toggleBtn).toHaveAttribute('aria-expanded', 'false')
  })
})

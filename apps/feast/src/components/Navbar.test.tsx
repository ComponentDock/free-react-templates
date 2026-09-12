import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the Feast logo', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: /feast home/i })).toBeInTheDocument()
  })

  it('renders all navigation links', () => {
    render(<Navbar />)
    expect(screen.getByRole('navigation', { name: /main navigation/i })).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Services')).toBeInTheDocument()
    expect(screen.getByText('Menu')).toBeInTheDocument()
    expect(screen.getByText('Gallery')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('renders the Custom Order button on desktop', () => {
    render(<Navbar />)
    expect(screen.getByText('Custom Order')).toBeInTheDocument()
  })

  it('opens the Blog dropdown when clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const blogButton = screen.getByRole('button', { name: /blog/i })
    await user.click(blogButton)
    expect(screen.getByText('Single Post')).toBeInTheDocument()
  })

  it('closes Blog dropdown when a blog item is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const blogButton = screen.getByRole('button', { name: /blog/i })
    await user.click(blogButton)
    expect(screen.getByText('Single Post')).toBeInTheDocument()
    await user.click(screen.getByText('Blog', { selector: 'a' }))
    expect(screen.queryByText('Single Post')).not.toBeInTheDocument()
  })

  it('opens the Pages dropdown when clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const pagesButton = screen.getByRole('button', { name: /pages/i })
    await user.click(pagesButton)
    expect(screen.getByText('Elements')).toBeInTheDocument()
  })

  it('closes Pages dropdown when a pages item is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const pagesButton = screen.getByRole('button', { name: /pages/i })
    await user.click(pagesButton)
    expect(screen.getByText('Elements')).toBeInTheDocument()
    await user.click(screen.getByText('Elements'))
    expect(screen.queryByText('Elements')).not.toBeInTheDocument()
  })

  it('toggles mobile menu', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /open menu/i })
    await user.click(toggle)
    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()
  })

  it('closes mobile menu when a nav link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /open menu/i })
    await user.click(toggle)
    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()
    const aboutLink = screen.getAllByText('About').at(-1)!
    await user.click(aboutLink)
    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })

  it('closes mobile menu when Contact link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /open menu/i })
    await user.click(toggle)
    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()
    const mobileContactLinks = screen.getAllByText('Contact')
    const mobileContact = mobileContactLinks.at(-1)!
    await user.click(mobileContact)
    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })
})

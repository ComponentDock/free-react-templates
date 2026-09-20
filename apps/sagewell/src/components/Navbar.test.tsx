import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders logo and nav links', () => {
    render(<Navbar />)
    expect(screen.getByText('Sagewell')).toBeInTheDocument()
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Courses')).toBeInTheDocument()
    expect(screen.getByText('Blog')).toBeInTheDocument()
    expect(screen.getByText('Pages')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('renders Apply Now button', () => {
    render(<Navbar />)
    const applyButtons = screen.getAllByText('Apply Now')
    expect(applyButtons.length).toBeGreaterThanOrEqual(1)
  })

  it('renders top bar with phone and email', () => {
    render(<Navbar />)
    expect(screen.getByText(/\+880 166 253 232/)).toBeInTheDocument()
    expect(screen.getByText(/info@sagewell\.edu/)).toBeInTheDocument()
  })

  it('renders Login and Register links', () => {
    render(<Navbar />)
    expect(screen.getByText('Login')).toBeInTheDocument()
    expect(screen.getByText('Register')).toBeInTheDocument()
  })

  it('toggles mobile menu on button click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const menuBtn = screen.getByRole('button', { name: /open menu/i })
    await user.click(menuBtn)
    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: /close menu/i }))
    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })

  it('shows dropdown on hover for Blog link', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const blogLinks = screen.getAllByText('Blog')
    const blogLink = blogLinks[0]
    expect(blogLink).toBeDefined()
    await user.hover(blogLink!)
    expect(screen.getByText('Single Post')).toBeInTheDocument()
  })

  it('shows dropdown on hover for Pages link', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const pagesLink = screen.getByText('Pages')
    await user.hover(pagesLink)
    expect(screen.getByText('Events')).toBeInTheDocument()
    expect(screen.getByText('Admissions')).toBeInTheDocument()
  })

  it('clicking dropdown link navigates and closes dropdown', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const blogLinks = screen.getAllByText('Blog')
    await user.hover(blogLinks[0]!)
    const singlePost = screen.getByText('Single Post')
    await user.click(singlePost)
  })

  it('mobile nav shows all links and Apply Now', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: /open menu/i }))
    const homeLinks = screen.getAllByText('Home')
    expect(homeLinks.length).toBeGreaterThanOrEqual(2)
    const applyLinks = screen.getAllByText('Apply Now')
    expect(applyLinks.length).toBeGreaterThanOrEqual(2)
    await user.click(homeLinks[1]!)
  })

  it('clicking mobile Apply Now closes menu', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: /open menu/i }))
    const applyLinks = screen.getAllByText('Apply Now')
    await user.click(applyLinks[applyLinks.length - 1]!)
    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })
})

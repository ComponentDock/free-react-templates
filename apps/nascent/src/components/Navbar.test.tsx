import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders logo and nav links', () => {
    render(<Navbar />)
    expect(screen.getByText('Nascent')).toBeInTheDocument()
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Services')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('renders Join Us CTA button', () => {
    render(<Navbar />)
    const cta = screen.getByText('Join Us')
    expect(cta).toBeInTheDocument()
    expect(cta.tagName).toBe('A')
  })

  it('starts with transparent background', () => {
    render(<Navbar />)
    const header = screen.getByTestId('navbar')
    expect(header.className).toContain('bg-transparent')
  })

  it('becomes white background on scroll', async () => {
    render(<Navbar />)
    const header = screen.getByTestId('navbar')
    Object.defineProperty(window, 'scrollY', { value: 100, writable: true })
    window.dispatchEvent(new Event('scroll'))
    await new Promise((r) => setTimeout(r, 50))
    expect(header.className).toContain('bg-white')
  })

  it('toggles Blog dropdown', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const blogBtn = screen.getByText('Blog')
    expect(screen.queryByText('Latest Posts')).not.toBeInTheDocument()
    await user.click(blogBtn)
    expect(screen.getByText('Latest Posts')).toBeInTheDocument()
  })

  it('closes Blog dropdown when clicked again', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const blogBtn = screen.getByText('Blog')
    await user.click(blogBtn)
    expect(screen.getByText('Latest Posts')).toBeInTheDocument()
    await user.click(blogBtn)
    expect(screen.queryByText('Latest Posts')).not.toBeInTheDocument()
  })

  it('opens mobile menu', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const menuBtn = screen.getByLabelText('Open menu')
    await user.click(menuBtn)
    expect(screen.getByLabelText('Close menu')).toBeInTheDocument()
  })

  it('closes mobile menu', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByLabelText('Open menu'))
    await user.click(screen.getByLabelText('Close menu'))
    expect(screen.getByLabelText('Open menu')).toBeInTheDocument()
  })
})

import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders four columns', () => {
    render(<Footer />)
    expect(screen.getByText('About Us')).toBeInTheDocument()
    expect(screen.getByText('Newsletter')).toBeInTheDocument()
    expect(screen.getByText('Instagram Feed')).toBeInTheDocument()
    expect(screen.getByText('Follow Us')).toBeInTheDocument()
  })

  it('renders newsletter email input', () => {
    render(<Footer />)
    expect(screen.getByLabelText('Email Address')).toBeInTheDocument()
  })

  it('renders subscribe button', () => {
    render(<Footer />)
    expect(screen.getByLabelText('Subscribe')).toBeInTheDocument()
  })

  it('renders instagram thumbnails', () => {
    render(<Footer />)
    const images = screen.getAllByAltText(/Instagram photo/)
    expect(images.length).toBe(8)
  })

  it('renders social icons', () => {
    render(<Footer />)
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Dribbble')).toBeInTheDocument()
    expect(screen.getByLabelText('Behance')).toBeInTheDocument()
  })

  it('renders Component Dock link in footer', () => {
    render(<Footer />)
    const links = screen.getAllByText('Component Dock')
    expect(links.length).toBeGreaterThanOrEqual(1)
    expect(links[0]).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('renders copyright text', () => {
    render(<Footer />)
    expect(screen.getByText(/Copyright/)).toBeInTheDocument()
  })

  it('newsletter form does not navigate on submit', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    const input = screen.getByLabelText('Email Address')
    await user.type(input, 'test@example.com')
    const submitBtn = screen.getByLabelText('Subscribe')
    await user.click(submitBtn)
    expect(input).toHaveValue('test@example.com')
  })
})

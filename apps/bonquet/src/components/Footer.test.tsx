import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the brand name', () => {
    render(<Footer />)
    expect(screen.getByText('Bonquet')).toBeInTheDocument()
  })

  it('renders Quick Links section', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { level: 4, name: 'Quick Links' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'About' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Services' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Blog' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Contact' })).toBeInTheDocument()
  })

  it('renders Cakes section', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { level: 4, name: 'Cakes' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Blackforest' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Bodhubon' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Rongdhonu' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Meghrong' })).toBeInTheDocument()
  })

  it('renders Contact Us section', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { level: 4, name: 'Contact Us' })).toBeInTheDocument()
    expect(screen.getByText('76/A, Green Lane, Dhanmondi, NYC')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: '+10 (78) 738-9083' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'bonquet89@gmail.com' })).toBeInTheDocument()
  })

  it('renders the Component Dock link', () => {
    render(<Footer />)
    const cdLink = screen.getByRole('link', { name: 'Component Dock' })
    expect(cdLink).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(cdLink).toHaveAttribute('target', '_blank')
    expect(cdLink).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('renders the go to top button', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    const topButton = screen.getByRole('button', { name: 'Go to top' })
    expect(topButton).toBeInTheDocument()

    // Scroll to top should be called
    const scrollToSpy = vi.spyOn(window, 'scrollTo')
    await user.click(topButton)
    expect(scrollToSpy).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' })
    scrollToSpy.mockRestore()
  })

  it('renders the brand description', () => {
    render(<Footer />)
    expect(screen.getByText(/land behold it created good saw/i)).toBeInTheDocument()
  })
})

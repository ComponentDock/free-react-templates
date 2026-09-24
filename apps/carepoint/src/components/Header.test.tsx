import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Header } from './Header'

describe('Header', () => {
  it('renders logo text', () => {
    render(<Header />)
    expect(screen.getByText('Care')).toBeInTheDocument()
    expect(screen.getByText('Point')).toBeInTheDocument()
  })

  it('renders subtitle', () => {
    render(<Header />)
    expect(screen.getByText('Health Care Center')).toBeInTheDocument()
  })

  it('renders all navigation links', () => {
    render(<Header />)
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('About us')).toBeInTheDocument()
    expect(screen.getByText('Services')).toBeInTheDocument()
    expect(screen.getByText('News')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('toggles mobile menu on button click', async () => {
    const user = userEvent.setup()
    render(<Header />)
    const menuButton = screen.getByRole('button', { name: /open menu/i })
    await user.click(menuButton)
    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Header />)
    const menuButton = screen.getByRole('button', { name: /open menu/i })
    await user.click(menuButton)
    const homeLinks = screen.getAllByText('Home')
    const homeLink = homeLinks[1]
    expect(homeLink).toBeDefined()
    await user.click(homeLink!)
    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })
})

import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'

describe('App', () => {
  it('renders all major sections', () => {
    render(<App />)

    expect(screen.getByRole('navigation', { name: /main navigation/i })).toBeInTheDocument()
    expect(screen.getByText(/Achieve your financial goal/i)).toBeInTheDocument()
    expect(screen.getByText(/About Our Company/i)).toBeInTheDocument()
    expect(screen.getByText(/Services that we are providing/i)).toBeInTheDocument()
    expect(screen.getByText(/Why Choose Our Company/i)).toBeInTheDocument()
    expect(screen.getByText(/Apply in Three Easy Steps/i)).toBeInTheDocument()
    expect(screen.getByText(/Our Loan Section Team Members/i)).toBeInTheDocument()
    expect(screen.getByText(/Jessya Inn/i)).toBeInTheDocument()
    expect(screen.getByText(/News form our latest blog/i)).toBeInTheDocument()
    expect(screen.getByText(/Component Dock/i)).toBeInTheDocument()
  })

  it('navigates to sections via anchor links', async () => {
    const user = userEvent.setup()
    render(<App />)

    const navLinks = screen.getAllByRole('link', { name: /about/i })
    const aboutLink = navLinks[0]!
    aboutLink.addEventListener('click', (e) => e.preventDefault(), { once: true })
    await user.click(aboutLink)
  })
})

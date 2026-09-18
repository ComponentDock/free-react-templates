import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the brand name', () => {
    render(<Navbar />)
    expect(screen.getByText('Edifica')).toBeInTheDocument()
  })

  it('renders all navigation links', () => {
    render(<Navbar />)
    for (const link of ['Home', 'About', 'Services', 'Projects', 'Blog', 'Contact']) {
      expect(screen.getByRole('link', { name: link })).toBeInTheDocument()
    }
  })

  it('renders the search button', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const searchBtn = screen.getByRole('button', { name: /search/i })
    expect(searchBtn).toBeInTheDocument()
    await user.click(searchBtn)
  })
})

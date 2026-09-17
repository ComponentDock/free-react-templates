import { render, screen } from '@testing-library/react'
import { Sidebar } from './Sidebar'

describe('Sidebar', () => {
  it('renders the sidebar heading', () => {
    render(<Sidebar />)
    expect(
      screen.getByRole('heading', { name: /let's talk about everything/i }),
    ).toBeInTheDocument()
  })

  it('renders the descriptive paragraph', () => {
    render(<Sidebar />)
    expect(screen.getByText(/lorem ipsum dolor sit amet/i)).toBeInTheDocument()
  })

  it('renders the Read more link', () => {
    render(<Sidebar />)
    const link = screen.getByRole('link', { name: /read more/i })
    expect(link).toBeInTheDocument()
  })
})

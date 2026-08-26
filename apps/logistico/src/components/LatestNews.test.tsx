import { render, screen } from '@testing-library/react'
import { LatestNews } from './LatestNews'

describe('LatestNews', () => {
  it('renders the section heading', () => {
    render(<LatestNews />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(/Latest News/i)
  })

  it('renders three blog cards', () => {
    render(<LatestNews />)
    expect(screen.getByText(/Freight Transport in Alaska/i)).toBeInTheDocument()
    expect(screen.getByText(/Delivery Your Stuff Quickly/i)).toBeInTheDocument()
    expect(screen.getByText(/Perishable Logistics/i)).toBeInTheDocument()
  })

  it('renders Read More links', () => {
    render(<LatestNews />)
    const links = screen.getAllByText(/Read More/)
    expect(links).toHaveLength(3)
  })

  it('renders category badges', () => {
    render(<LatestNews />)
    expect(screen.getByText('Logistics')).toBeInTheDocument()
    expect(screen.getByText('Tips')).toBeInTheDocument()
    expect(screen.getByText('Industry')).toBeInTheDocument()
  })
})

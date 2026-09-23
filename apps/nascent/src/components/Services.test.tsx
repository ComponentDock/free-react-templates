import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders section heading and description', () => {
    render(<Services />)
    expect(screen.getByText('Services we provide')).toBeInTheDocument()
    expect(screen.getByText(/end-to-end solutions/)).toBeInTheDocument()
  })

  it('renders three service cards', () => {
    render(<Services />)
    expect(screen.getByText('Digital Strategy')).toBeInTheDocument()
    expect(screen.getByText('Innovation Lab')).toBeInTheDocument()
    expect(screen.getByText('Growth Analytics')).toBeInTheDocument()
  })

  it("each card has a Let's Talk link", () => {
    render(<Services />)
    const links = screen.getAllByText("Let's Talk")
    expect(links.length).toBe(3)
  })

  it('has service descriptions', () => {
    render(<Services />)
    expect(screen.getByText(/comprehensive digital roadmap/)).toBeInTheDocument()
    expect(screen.getByText(/Transform bold ideas/)).toBeInTheDocument()
    expect(screen.getByText(/Data-driven insights/)).toBeInTheDocument()
  })
})

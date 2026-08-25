import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { About } from './About'

describe('About', () => {
  it('renders the About Us label and heading', () => {
    render(<About />)
    expect(screen.getByText('About Us')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(/A professional/)
  })

  it('renders description paragraphs', () => {
    render(<About />)
    expect(screen.getByText(/Sometimes goods can arrive early/)).toBeInTheDocument()
    expect(screen.getAllByText(/With over 80 trucks in our fleet/).length).toBeGreaterThanOrEqual(1)
  })

  it('renders both accordion items', () => {
    render(<About />)
    expect(screen.getByText('Road Transport', { selector: 'button' })).toBeInTheDocument()
    expect(screen.getByText('Sea Cargo', { selector: 'button' })).toBeInTheDocument()
  })

  it('shows the first accordion item expanded by default', () => {
    render(<About />)
    expect(
      screen.getAllByText(/With over 80 trucks in our fleet, road transport/).length,
    ).toBeGreaterThanOrEqual(1)
  })

  it('toggles accordion items on click', async () => {
    const user = userEvent.setup()
    render(<About />)

    // Click Sea Cargo to open it
    await user.click(screen.getByText('Sea Cargo', { selector: 'button' }))
    expect(screen.getByText(/ocean freight services cover all major ports/)).toBeInTheDocument()

    // Click Road Transport to open it
    await user.click(screen.getByText('Road Transport', { selector: 'button' }))
    expect(
      screen.getAllByText(/With over 80 trucks in our fleet, road transport/).length,
    ).toBeGreaterThanOrEqual(1)
  })

  it('closes an accordion item when clicked again', async () => {
    const user = userEvent.setup()
    render(<About />)

    // First item is open, close it
    await user.click(screen.getByText('Road Transport', { selector: 'button' }))
    // Road transport accordion content should be hidden
    expect(screen.queryByText(/We handle full and partial loads/)).not.toBeInTheDocument()
  })

  it('has the about section id', () => {
    render(<About />)
    expect(document.getElementById('about')).toBeInTheDocument()
  })
})

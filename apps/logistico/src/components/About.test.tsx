import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { About } from './About'

describe('About', () => {
  it('renders the section heading', () => {
    render(<About />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(/A Professional/i)
  })

  it('renders accordion items', () => {
    render(<About />)
    expect(screen.getByRole('button', { name: /Road Transport/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Sea Cargo/i })).toBeInTheDocument()
  })

  it('shows first accordion item by default', () => {
    render(<About />)
    expect(screen.getByText(/Our road transport network/i)).toBeInTheDocument()
  })

  it('opens second accordion and shows its content', async () => {
    const user = userEvent.setup()
    render(<About />)
    await user.click(screen.getByRole('button', { name: /Sea Cargo/i }))
    expect(screen.getByText(/From container shipping/i)).toBeInTheDocument()
  })

  it('closes first accordion when second is opened', async () => {
    const user = userEvent.setup()
    render(<About />)
    expect(screen.getByText(/Our road transport network/i)).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: /Sea Cargo/i }))
    expect(screen.queryByText(/Our road transport network/i)).not.toBeInTheDocument()
  })

  it('toggles accordion closed when clicking same item', async () => {
    const user = userEvent.setup()
    render(<About />)
    await user.click(screen.getByRole('button', { name: /Road Transport/i }))
    expect(screen.queryByText(/Our road transport network/i)).not.toBeInTheDocument()
  })

  it('displays experience badge', () => {
    render(<About />)
    expect(screen.getByText('10+')).toBeInTheDocument()
    expect(screen.getByText('Years Experience')).toBeInTheDocument()
  })
})

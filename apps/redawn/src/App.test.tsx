import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'

describe('App', () => {
  it('renders the header with animated headline', () => {
    render(<App />)
    expect(screen.getByLabelText('Redawn home')).toBeInTheDocument()
    expect(screen.getByText(/pixel precise/i)).toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Redawn — Creative Portfolio Template')
  })

  it('renders the blog grid', () => {
    render(<App />)
    expect(screen.getByText('Photoshop PSD Notebook MockUp')).toBeInTheDocument()
  })

  it('renders the footer with Component Dock link', () => {
    render(<App />)
    expect(screen.getByText(/Component Dock/)).toBeInTheDocument()
  })

  it('opens the nav overlay when hamburger is clicked', async () => {
    const user = userEvent.setup()
    render(<App />)
    const toggle = screen.getByRole('button', { name: /toggle menu/i })
    await user.click(toggle)
    expect(screen.getByRole('dialog', { name: /navigation menu/i })).toBeInTheDocument()
    expect(screen.getByText('Home')).toBeInTheDocument()
  })

  it('closes the nav overlay when a nav link is clicked', async () => {
    const user = userEvent.setup()
    render(<App />)
    const toggle = screen.getByRole('button', { name: /toggle menu/i })
    await user.click(toggle)
    expect(screen.getByRole('dialog', { name: /navigation menu/i })).toBeInTheDocument()
    await user.click(screen.getByRole('dialog').querySelector('a[href="#about"]')!)
    expect(screen.queryByRole('dialog', { name: /navigation menu/i })).not.toBeInTheDocument()
  })

  it('closes the nav overlay when toggle is clicked again', async () => {
    const user = userEvent.setup()
    render(<App />)
    const toggle = screen.getByRole('button', { name: /toggle menu/i })
    await user.click(toggle)
    expect(screen.getByRole('dialog', { name: /navigation menu/i })).toBeInTheDocument()
    await user.click(toggle)
    expect(screen.queryByRole('dialog', { name: /navigation menu/i })).not.toBeInTheDocument()
  })
})

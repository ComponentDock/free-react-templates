import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import App from './App'

describe('App', () => {
  it('renders the sidebar and article grid', () => {
    render(<App />)
    expect(screen.getByText('Featured Users')).toBeInTheDocument()
    expect(screen.getAllByText(/How the gut microbes/i)).toHaveLength(8)
  })

  it('renders the Component Dock footer link', () => {
    render(<App />)
    const link = screen.getByRole('link', { name: /component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('toggles sidebar on mobile when toggle button is clicked', async () => {
    const user = userEvent.setup()
    render(<App />)
    const toggleBtn = screen.getByRole('button', { name: /open menu/i })
    await user.click(toggleBtn)
    expect(screen.getByTestId('sidebar-overlay')).toBeInTheDocument()
  })

  it('closes sidebar when overlay is clicked', async () => {
    const user = userEvent.setup()
    render(<App />)
    const toggleBtn = screen.getByRole('button', { name: /open menu/i })
    await user.click(toggleBtn)
    const overlay = screen.getByTestId('sidebar-overlay')
    await user.click(overlay)
    expect(screen.queryByTestId('sidebar-overlay')).not.toBeInTheDocument()
  })

  it('closes sidebar when close button is clicked', async () => {
    const user = userEvent.setup()
    render(<App />)
    const toggleBtn = screen.getByRole('button', { name: /open menu/i })
    await user.click(toggleBtn)
    const closeBtn = screen.getByRole('button', { name: /close menu/i })
    await user.click(closeBtn)
    expect(screen.queryByTestId('sidebar-overlay')).not.toBeInTheDocument()
  })
})

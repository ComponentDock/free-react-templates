import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'

describe('Expanda Template App', () => {
  it('renders the main headings and accordion sections', () => {
    render(<App />)
    expect(screen.getByText('Expanda')).toBeInTheDocument()
    expect(screen.getByText('Manage')).toBeInTheDocument()
    expect(screen.getByText('Location')).toBeInTheDocument()
    expect(screen.getByText('Hobbies')).toBeInTheDocument()
  })

  it('starts with Manage section open showing subitems', () => {
    render(<App />)
    expect(screen.getByText('01 Account')).toBeInTheDocument()
    expect(screen.getByText('02 Settings')).toBeInTheDocument()
    expect(screen.getByText('03 Profile')).toBeInTheDocument()
  })

  it('collapses Manage when clicked again', async () => {
    const user = userEvent.setup()
    render(<App />)

    // Manage starts open
    expect(screen.getByText('01 Account')).toBeInTheDocument()

    // Click Manage to close it
    const manageBtn = screen.getByRole('button', { name: /manage/i })
    await user.click(manageBtn)

    // Manage content should be gone
    expect(screen.queryByText('01 Account')).not.toBeInTheDocument()
  })

  it('expands Location section and shows its content', async () => {
    const user = userEvent.setup()
    render(<App />)

    const locationBtn = screen.getByRole('button', { name: /location/i })
    await user.click(locationBtn)

    expect(screen.getByText(/regional headquarters/i)).toBeInTheDocument()
    expect(screen.getByText(/global operations hub/i)).toBeInTheDocument()
  })

  it('expands Hobbies section and shows its content', async () => {
    const user = userEvent.setup()
    render(<App />)

    const hobbiesBtn = screen.getByRole('button', { name: /hobbies/i })
    await user.click(hobbiesBtn)

    expect(screen.getByText(/photography & hiking/i)).toBeInTheDocument()
    expect(screen.getByText(/exploring wilderness/i)).toBeInTheDocument()
  })

  it('collapses Location when clicked a second time', async () => {
    const user = userEvent.setup()
    render(<App />)

    // Open Location
    const locationBtn = screen.getByRole('button', { name: /location/i })
    await user.click(locationBtn)
    expect(screen.getByText(/regional headquarters/i)).toBeInTheDocument()

    // Click again to collapse
    await user.click(locationBtn)
    expect(screen.queryByText(/regional headquarters/i)).not.toBeInTheDocument()
  })

  it('collapses Hobbies when clicked a second time', async () => {
    const user = userEvent.setup()
    render(<App />)

    // Open Hobbies
    const hobbiesBtn = screen.getByRole('button', { name: /hobbies/i })
    await user.click(hobbiesBtn)
    expect(screen.getByText(/photography & hiking/i)).toBeInTheDocument()

    // Click again to collapse
    await user.click(hobbiesBtn)
    expect(screen.queryByText(/photography & hiking/i)).not.toBeInTheDocument()
  })

  it('sets aria-expanded correctly on accordion buttons', async () => {
    const user = userEvent.setup()
    render(<App />)

    // Manage starts open
    const manageBtn = screen.getByRole('button', { name: /manage/i })
    expect(manageBtn).toHaveAttribute('aria-expanded', 'true')

    // Location starts closed
    const locationBtn = screen.getByRole('button', { name: /location/i })
    expect(locationBtn).toHaveAttribute('aria-expanded', 'false')

    // Open Location — Manage should close
    await user.click(locationBtn)
    expect(locationBtn).toHaveAttribute('aria-expanded', 'true')
    expect(manageBtn).toHaveAttribute('aria-expanded', 'false')
  })

  it('renders the Component Dock footer link', () => {
    render(<App />)
    const footerLink = screen.getByRole('link', { name: /component dock/i })
    expect(footerLink).toBeInTheDocument()
    expect(footerLink).toHaveAttribute('href', 'https://www.componentdock.com')
  })

  it('renders the subtitle text', () => {
    render(<App />)
    expect(screen.getByText('Interactive Management & Settings Dashboard')).toBeInTheDocument()
  })
})

import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'

describe('App', () => {
  it('renders the post grid with 8 posts', () => {
    render(<App />)
    const posts = screen.getAllByRole('link')
    expect(posts.length).toBeGreaterThanOrEqual(8)
  })

  it('renders the footer with Component Dock link', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: /component dock/i })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })

  it('shows chat toggle button when sidebar is closed', () => {
    render(<App />)
    expect(screen.getByRole('button', { name: /open contact form/i })).toBeInTheDocument()
  })

  it('opens sidebar when chat toggle is clicked', async () => {
    render(<App />)
    await userEvent.click(screen.getByRole('button', { name: /open contact form/i }))
    expect(screen.getByRole('heading', { name: /get in touch/i })).toBeInTheDocument()
  })

  it('hides chat toggle when sidebar is open', async () => {
    render(<App />)
    await userEvent.click(screen.getByRole('button', { name: /open contact form/i }))
    expect(screen.queryByRole('button', { name: /open contact form/i })).not.toBeInTheDocument()
  })

  it('closes sidebar when close button is clicked', async () => {
    render(<App />)
    await userEvent.click(screen.getByRole('button', { name: /open contact form/i }))
    expect(screen.getByRole('heading', { name: /get in touch/i })).toBeInTheDocument()
    await userEvent.click(screen.getByRole('button', { name: /close contact sidebar/i }))
    expect(screen.queryByRole('heading', { name: /get in touch/i })).not.toBeInTheDocument()
  })

  it('shows chat toggle again after sidebar is closed', async () => {
    render(<App />)
    await userEvent.click(screen.getByRole('button', { name: /open contact form/i }))
    await userEvent.click(screen.getByRole('button', { name: /close contact sidebar/i }))
    expect(screen.getByRole('button', { name: /open contact form/i })).toBeInTheDocument()
  })
})

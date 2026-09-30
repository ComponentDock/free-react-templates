import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('renders the sidebar heading', () => {
    render(<App />)
    expect(
      screen.getByRole('heading', { name: /share your article to the world/i }),
    ).toBeInTheDocument()
  })

  it('renders 4 blog post cards', () => {
    render(<App />)
    const articles = screen.getAllByRole('article')
    expect(articles).toHaveLength(4)
  })

  it('renders the newsletter email input', () => {
    render(<App />)
    expect(screen.getByPlaceholderText('Enter your email')).toBeInTheDocument()
  })

  it('renders the Sign Up button', () => {
    render(<App />)
    expect(screen.getByRole('button', { name: /sign up/i })).toBeInTheDocument()
  })

  it('renders the Component Dock footer link', () => {
    render(<App />)
    const link = screen.getByRole('link', { name: /component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('sets the document title on mount', () => {
    render(<App />)
    expect(document.title).toContain('Sidenote')
  })

  it('closes the sidebar when close button is clicked on mobile', async () => {
    const user = userEvent.setup()
    render(<App />)
    const closeBtn = screen.getByRole('button', { name: /close sidebar/i })
    await user.click(closeBtn)
    expect(screen.queryByLabelText(/newsletter signup sidebar/i)).not.toBeInTheDocument()
  })

  it('re-opens the sidebar when menu button is clicked', async () => {
    const user = userEvent.setup()
    render(<App />)
    const closeBtn = screen.getByRole('button', { name: /close sidebar/i })
    await user.click(closeBtn)
    const menuBtn = screen.getByRole('button', { name: /open sidebar/i })
    await user.click(menuBtn)
    expect(screen.getByLabelText(/newsletter signup sidebar/i)).toBeInTheDocument()
  })

  it('handles newsletter form submission', async () => {
    const user = userEvent.setup()
    render(<App />)
    const input = screen.getByPlaceholderText('Enter your email')
    const button = screen.getByRole('button', { name: /sign up/i })
    await user.type(input, 'test@example.com')
    await user.click(button)
    expect(input).toHaveValue('test@example.com')
  })

  it('shows required validation when submitting empty email', async () => {
    const user = userEvent.setup()
    render(<App />)
    const button = screen.getByRole('button', { name: /sign up/i })
    await user.click(button)
    const input = screen.getByPlaceholderText('Enter your email')
    expect(input).toBeInvalid()
  })
})

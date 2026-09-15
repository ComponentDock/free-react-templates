import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { TopBar } from './TopBar'

describe('TopBar', () => {
  it('renders social icon links', () => {
    render(<TopBar />)
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument()
    expect(screen.getByLabelText('LinkedIn')).toBeInTheDocument()
  })

  it('renders Sponsor link', () => {
    render(<TopBar />)
    expect(screen.getByText('Sponsor')).toBeInTheDocument()
  })

  it('renders Login button', () => {
    render(<TopBar />)
    expect(screen.getByText('Login')).toBeInTheDocument()
  })

  it('Login button has correct styles', () => {
    render(<TopBar />)
    const login = screen.getByText('Login')
    expect(login.className).toContain('bg-cta-gold')
  })

  it('social links have correct href', async () => {
    const user = userEvent.setup()
    render(<TopBar />)
    const twitter = screen.getByLabelText('Twitter')
    await user.click(twitter)
    expect(twitter).toHaveAttribute('href', '#')
  })
})

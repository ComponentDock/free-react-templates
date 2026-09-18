import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { FooterBar } from './FooterBar'

describe('FooterBar', () => {
  it('renders copyright text with current year', () => {
    render(<FooterBar />)
    const year = new Date().getFullYear()
    expect(screen.getByText(/©.*Roofmark\. All rights reserved\./)).toBeInTheDocument()
    expect(screen.getByText(new RegExp(String(year)))).toBeInTheDocument()
  })

  it('renders all nav links', () => {
    render(<FooterBar />)
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('About us')).toBeInTheDocument()
    expect(screen.getByText('Listings')).toBeInTheDocument()
    expect(screen.getByText('News')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('handles link clicks', async () => {
    const user = userEvent.setup()
    render(<FooterBar />)
    const homeLink = screen.getByText('Home')
    homeLink.addEventListener('click', (e) => e.preventDefault(), { once: true })
    await user.click(homeLink)
  })
})

import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders all menu items', () => {
    render(<Navbar />)
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Politics')).toBeInTheDocument()
    expect(screen.getByText('Breaking News')).toBeInTheDocument()
    expect(screen.getByText('Business')).toBeInTheDocument()
    expect(screen.getByText('Technology')).toBeInTheDocument()
    expect(screen.getByText('Health')).toBeInTheDocument()
    expect(screen.getByText('Travel')).toBeInTheDocument()
    expect(screen.getByText('Sports')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('Home item is active', () => {
    render(<Navbar />)
    const homeLink = screen.getByText('Home')
    expect(homeLink).toHaveClass('border-b-2')
  })

  it('toggles mobile menu on button click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggleButton = screen.getByLabelText('Toggle menu')
    expect(screen.queryByText('Politics', { selector: 'ul ul a' })).not.toBeInTheDocument()
    await user.click(toggleButton)
    expect(screen.getByLabelText('Toggle menu')).toBeInTheDocument()
  })
})

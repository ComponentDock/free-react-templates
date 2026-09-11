import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { About } from './About'

describe('About', () => {
  it('renders section heading', () => {
    render(<About />)
    expect(screen.getByText('About Us')).toBeInTheDocument()
  })

  it('shows all three tabs', () => {
    render(<About />)
    expect(screen.getByRole('tab', { name: 'Our Mission' })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: 'Our Vision' })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: 'Our Support' })).toBeInTheDocument()
  })

  it('defaults to Our Mission tab', () => {
    render(<About />)
    expect(screen.getByRole('tab', { name: 'Our Mission' })).toHaveAttribute(
      'aria-selected',
      'true',
    )
    expect(screen.getByText(/We strive to deliver/)).toBeInTheDocument()
  })

  it('switches to Our Vision tab', async () => {
    const user = userEvent.setup()
    render(<About />)
    await user.click(screen.getByRole('tab', { name: 'Our Vision' }))
    expect(screen.getByRole('tab', { name: 'Our Vision' })).toHaveAttribute('aria-selected', 'true')
    expect(screen.getByText(/To be the leading creative partner/)).toBeInTheDocument()
  })

  it('switches to Our Support tab', async () => {
    const user = userEvent.setup()
    render(<About />)
    await user.click(screen.getByRole('tab', { name: 'Our Support' }))
    expect(screen.getByRole('tab', { name: 'Our Support' })).toHaveAttribute(
      'aria-selected',
      'true',
    )
    expect(screen.getByText(/round-the-clock support/)).toBeInTheDocument()
  })

  it('has View More button', () => {
    render(<About />)
    expect(screen.getByRole('link', { name: 'View More' })).toBeInTheDocument()
  })
})

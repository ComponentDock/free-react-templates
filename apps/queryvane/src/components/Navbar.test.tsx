import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the brand name', () => {
    render(<Navbar onSearchToggle={() => {}} />)
    expect(screen.getByText('Queryvane')).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(<Navbar onSearchToggle={() => {}} />)
    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('href', '#home')
    expect(screen.getByRole('link', { name: 'About' })).toHaveAttribute('href', '#about')
    expect(screen.getByRole('link', { name: 'Contact' })).toHaveAttribute('href', '#contact')
  })

  it('renders the search toggle button', () => {
    render(<Navbar onSearchToggle={() => {}} />)
    expect(screen.getByRole('button', { name: 'Toggle search' })).toBeInTheDocument()
  })

  it('calls onSearchToggle when the search button is clicked', async () => {
    const user = userEvent.setup()
    let toggled = false
    render(
      <Navbar
        onSearchToggle={() => {
          toggled = true
        }}
      />,
    )

    await user.click(screen.getByRole('button', { name: 'Toggle search' }))
    expect(toggled).toBe(true)
  })
})

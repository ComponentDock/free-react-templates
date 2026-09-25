import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the brand name and download link', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: /Swatchkit/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Download/i })).toBeInTheDocument()
  })

  it('toggles the components dropdown on click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const trigger = screen.getByRole('button', { name: /Components/i })
    expect(screen.queryByRole('link', { name: /^Buttons$/ })).not.toBeInTheDocument()

    await user.click(trigger)
    expect(screen.getByRole('link', { name: /^Buttons$/ })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /^Cards$/ })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /^Forms$/ })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /^Modals$/ })).toBeInTheDocument()

    await user.click(trigger)
    expect(screen.queryByRole('link', { name: /^Buttons$/ })).not.toBeInTheDocument()
  })

  it('has accessible navigation landmark', () => {
    render(<Navbar />)
    expect(screen.getByRole('navigation', { name: /Main navigation/i })).toBeInTheDocument()
  })
})

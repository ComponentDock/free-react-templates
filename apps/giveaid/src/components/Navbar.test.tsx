import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders brand name GiveAid', () => {
    render(<Navbar />)
    expect(screen.getByText('GiveAid')).toBeInTheDocument()
  })

  it('renders all nav links', () => {
    render(<Navbar />)
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Adoption')).toBeInTheDocument()
    expect(screen.getByText('Success Stories')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('Home link is active by default', () => {
    render(<Navbar />)
    const home = screen.getByText('Home')
    expect(home.className).toContain('text-brand')
  })

  it('toggles mobile menu on button click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByLabelText('Toggle navigation')
    await user.click(toggle)
    expect(screen.getAllByText('Adoption').length).toBeGreaterThanOrEqual(1)
  })

  it('shows dropdown items on hover', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const adoptionLink = screen.getByText('Adoption')
    await user.hover(adoptionLink)
    expect(screen.getByText('Waiting Children')).toBeInTheDocument()
    expect(screen.getByText('How to Adopt')).toBeInTheDocument()
  })

  it('hides dropdown on mouse leave', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const adoptionLink = screen.getByText('Adoption')
    await user.hover(adoptionLink)
    expect(screen.getByText('Waiting Children')).toBeInTheDocument()
    await user.unhover(adoptionLink)
    // After unhover, dropdown should close
    expect(screen.queryByText('How to Adopt')).not.toBeInTheDocument()
  })
})

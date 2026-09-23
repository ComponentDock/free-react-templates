import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the Jurist brand', () => {
    render(<Navbar />)
    expect(screen.getByText('Jurist')).toBeDefined()
  })

  it('renders all navigation links', () => {
    render(<Navbar />)
    expect(screen.getByText('Home')).toBeDefined()
    expect(screen.getByText('About')).toBeDefined()
    expect(screen.getByText('Practice Area')).toBeDefined()
    expect(screen.getByText('Case Studies')).toBeDefined()
    expect(screen.getByText('Contact')).toBeDefined()
  })

  it('toggles mobile menu on button click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /open menu/i })
    await user.click(toggle)
    expect(screen.getByRole('button', { name: /close menu/i })).toBeDefined()
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /open menu/i })
    await user.click(toggle)
    const aboutLinks = screen.getAllByText('About')
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    await user.click(aboutLinks[1]!)
    expect(screen.getByRole('button', { name: /open menu/i })).toBeDefined()
  })
})

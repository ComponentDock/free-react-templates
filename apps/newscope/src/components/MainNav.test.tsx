import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { MainNav } from './MainNav'

describe('MainNav', () => {
  it('renders all category links', () => {
    render(<MainNav />)
    const cats = ['Home', 'News', 'Entertainment', 'Fashion', 'Life Style', 'Technology', 'Travel']
    cats.forEach((cat) => {
      expect(screen.getByText(cat)).toBeInTheDocument()
    })
  })

  it('has Home highlighted by default', () => {
    render(<MainNav />)
    const home = screen.getByText('Home')
    expect(home.className).toContain('text-brand-pink')
  })

  it('toggles mobile menu on click', async () => {
    const user = userEvent.setup()
    render(<MainNav />)
    const menuBtn = screen.getByRole('button', { name: /open menu/i })
    await user.click(menuBtn)
    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()
    expect(screen.getByLabelText('Main navigation')).toBeInTheDocument()
  })

  it('has aria-expanded on the menu button', async () => {
    const user = userEvent.setup()
    render(<MainNav />)
    const btn = screen.getByRole('button', { name: /open menu/i })
    expect(btn).toHaveAttribute('aria-expanded', 'false')
    await user.click(btn)
    expect(btn).toHaveAttribute('aria-expanded', 'true')
  })
})

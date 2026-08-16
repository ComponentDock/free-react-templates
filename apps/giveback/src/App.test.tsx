import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'

describe('App', () => {
  it('sets the document title and composes all landmarks', () => {
    render(<App />)
    expect(document.title).toBe('Giveback — Charity Template')
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 1, name: 'Give a helping hand to those who need it!' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'How we help people' }),
    ).toBeInTheDocument()
  })

  it('renders all sections in the reference order', () => {
    const { container } = render(<App />)
    const main = container.querySelector('main')
    const headings = Array.from(main?.querySelectorAll('h1, h2') ?? []).map(
      (node) => node.textContent,
    )
    expect(headings).toEqual([
      'Give a helping hand to those who need it!',
      'Donate vitamin B12 supply program',
      'We are tender heart charity foundation.',
      'Fundraising Programs',
      'What we are doing',
      'How we help people',
      'Latest Blog',
    ])
  })

  it('toggles dark mode from the navbar', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('button', { name: 'Toggle dark mode' }))
    expect(document.documentElement).toHaveClass('dark')
  })
})

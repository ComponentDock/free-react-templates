import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { TeamSection } from './TeamSection'

describe('TeamSection', () => {
  it('renders the section title, lead and 8 member cards with name and role', () => {
    render(<TeamSection />)
    expect(screen.getByRole('heading', { name: 'Our Team' })).toBeInTheDocument()

    for (const member of [
      ['Kaiara Spencer', 'Product Manager'],
      ['Dave Simpson', 'Product Designer'],
      ['Ben Thompson', 'Marketing Manager'],
      ['Kyla Stewart', 'Web Designer'],
      ['Chris Stewart', 'Software Engineer'],
      ['Rachel Gomez', 'Sales Lead'],
      ['Marcus Reed', 'UX Researcher'],
      ['Olivia Chen', 'Content Strategist'],
    ]) {
      expect(screen.getByRole('heading', { name: member[0] })).toBeInTheDocument()
      expect(screen.getByText(member[1]!)).toBeInTheDocument()
    }
    expect(screen.getAllByRole('img')).toHaveLength(8)
  })

  it('reveals social links on focus within a card', async () => {
    const user = userEvent.setup()
    render(<TeamSection />)
    const firstCard = screen.getByRole('heading', { name: 'Kaiara Spencer' }).closest('figure')!

    expect(firstCard).toHaveClass('group')
    const overlay = firstCard.querySelector('ul')!
    expect(overlay).toHaveClass(
      'opacity-0',
      'group-hover:opacity-100',
      'group-focus-within:opacity-100',
    )

    await user.tab()
    expect(document.activeElement).toHaveAttribute('aria-label', 'Facebook')
  })

  it('renders social links that open in a new tab', () => {
    render(<TeamSection />)
    const links = screen.getAllByRole('link', { name: 'Linkedin' })
    expect(links.length).toBeGreaterThan(0)
    expect(links[0]).toHaveAttribute('target', '_blank')
  })
})

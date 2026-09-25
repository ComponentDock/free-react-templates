import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { Skills } from './Skills'

describe('Skills', () => {
  it('renders the skills heading', () => {
    render(<Skills />)
    expect(screen.getByRole('heading', { name: 'My Skills' })).toBeInTheDocument()
  })

  it('renders all six skill cards', () => {
    render(<Skills />)

    const cards = screen.getAllByRole('heading', { level: 3 })
    const skillNames = cards.map((c) => c.textContent)
    expect(skillNames).toEqual(['CSS', 'HTML', 'jQuery', 'Photoshop', 'WordPress', 'SEO'])
  })

  it('shows last week and last month sub-stats for the first skill', () => {
    render(<Skills />)
    const firstCard = screen.getAllByText('CSS')[0]
    const card = firstCard!.closest('div')!
    expect(within(card).getByText(/Last week:/)).toBeInTheDocument()
    expect(within(card).getByText(/Last month:/)).toBeInTheDocument()
  })
})

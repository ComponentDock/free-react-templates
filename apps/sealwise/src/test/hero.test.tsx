import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Hero } from '../components/Hero'
import { hero } from '../content'

describe('hero', () => {
  it('carries the two-tone h1, the rating and the four promises', () => {
    render(<Hero />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toHaveTextContent(hero.titleLead)
    expect(heading).toHaveTextContent(hero.titleTail)
    expect(screen.getByText(hero.kicker)).toBeInTheDocument()
    expect(screen.getByText(hero.rating)).toBeInTheDocument()
    for (const item of hero.checklist) {
      expect(screen.getByText(item)).toBeInTheDocument()
    }
    expect(screen.getByRole('heading', { level: 2, name: hero.card.title })).toBeInTheDocument()
  })

  it('shows one error per empty field and sends nothing', async () => {
    render(<Hero />)
    await userEvent.click(screen.getByRole('button', { name: hero.card.submit }))
    expect(screen.getByText(hero.card.nameError)).toBeInTheDocument()
    expect(screen.getByText(hero.card.phoneError)).toBeInTheDocument()
    expect(screen.getByText(hero.card.problemError)).toBeInTheDocument()
    expect(screen.getByLabelText(hero.card.nameLabel)).toHaveAttribute('aria-invalid', 'true')
    expect(screen.queryByRole('status')).toBeNull()
  })

  it('rejects a phone number without an area code', async () => {
    render(<Hero />)
    await userEvent.type(screen.getByLabelText(hero.card.nameLabel), 'Sam Reed')
    await userEvent.type(screen.getByLabelText(hero.card.phoneLabel), '0400')
    await userEvent.selectOptions(screen.getByLabelText(hero.card.problemLabel), 'Ants')
    await userEvent.click(screen.getByRole('button', { name: hero.card.submit }))
    expect(screen.getByText(hero.card.phoneInvalid)).toBeInTheDocument()
  })

  it('confirms a complete request, clears the fields and offers a reset', async () => {
    render(<Hero />)
    const name = screen.getByLabelText(hero.card.nameLabel) as HTMLInputElement
    await userEvent.type(name, 'Sam Reed')
    await userEvent.type(screen.getByLabelText(hero.card.phoneLabel), '(555) 040-0400')
    await userEvent.selectOptions(screen.getByLabelText(hero.card.problemLabel), 'Termites')
    await userEvent.click(screen.getByRole('button', { name: hero.card.submit }))

    expect(screen.getByRole('status')).toHaveTextContent(hero.card.success)
    expect(screen.queryByLabelText(hero.card.nameLabel)).toBeNull()

    await userEvent.click(screen.getByRole('button', { name: 'Ask about another pest' }))
    expect(screen.getByLabelText(hero.card.nameLabel)).toHaveValue('')
  })
})

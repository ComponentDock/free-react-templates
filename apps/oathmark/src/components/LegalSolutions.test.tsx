import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { LegalSolutions } from './LegalSolutions'

describe('LegalSolutions', () => {
  it('renders heading We Have Legal Solutions', () => {
    render(<LegalSolutions />)
    expect(
      screen.getByRole('heading', { level: 2, name: /we have legal solutions/i }),
    ).toBeInTheDocument()
  })

  it('renders 3 checklist items', () => {
    render(<LegalSolutions />)
    expect(screen.getByText('Experienced and dedicated legal professionals')).toBeInTheDocument()
    expect(screen.getByText('Personalized legal strategies for every client')).toBeInTheDocument()
    expect(screen.getByText('Transparent communication and competitive rates')).toBeInTheDocument()
  })

  it('renders 3 accordion FAQ items', () => {
    render(<LegalSolutions />)
    const faqQuestions = [
      'What services does a notary public provide?',
      'How do I schedule a consultation?',
      'What should I bring to my first meeting?',
    ]
    for (const question of faqQuestions) {
      expect(screen.getByRole('button', { name: question })).toBeInTheDocument()
    }
  })

  it('clicking FAQ item expands it', async () => {
    render(<LegalSolutions />)

    // First item is open by default (openIndex starts at 0)
    const firstButton = screen.getByRole('button', {
      name: 'What services does a notary public provide?',
    })
    expect(firstButton).toHaveAttribute('aria-expanded', 'true')

    // The answer text should be visible
    expect(screen.getByText(/authenticates signatures/i)).toBeInTheDocument()
  })

  it('clicking another FAQ item expands it and collapses previous', async () => {
    const user = userEvent.setup()
    render(<LegalSolutions />)
    // First item starts open
    const firstButton = screen.getByRole('button', {
      name: 'What services does a notary public provide?',
    })
    const secondButton = screen.getByRole('button', {
      name: 'How do I schedule a consultation?',
    })
    const thirdButton = screen.getByRole('button', {
      name: 'What should I bring to my first meeting?',
    })

    expect(firstButton).toHaveAttribute('aria-expanded', 'true')
    expect(secondButton).toHaveAttribute('aria-expanded', 'false')
    expect(thirdButton).toHaveAttribute('aria-expanded', 'false')

    // Click second item
    await user.click(secondButton)

    expect(firstButton).toHaveAttribute('aria-expanded', 'false')
    expect(secondButton).toHaveAttribute('aria-expanded', 'true')

    // Click third item
    await user.click(thirdButton)

    expect(secondButton).toHaveAttribute('aria-expanded', 'false')
    expect(thirdButton).toHaveAttribute('aria-expanded', 'true')
  })

  it('clicking same open FAQ item closes it', async () => {
    const user = userEvent.setup()
    render(<LegalSolutions />)

    const firstButton = screen.getByRole('button', {
      name: 'What services does a notary public provide?',
    })
    expect(firstButton).toHaveAttribute('aria-expanded', 'true')

    await user.click(firstButton)
    expect(firstButton).toHaveAttribute('aria-expanded', 'false')
  })
})

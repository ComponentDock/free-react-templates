import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Faq } from './Faq'

describe('Faq', () => {
  it('renders section heading', () => {
    render(<Faq />)
    expect(
      screen.getByRole('heading', { level: 2, name: /Frequently Asked Questions/i }),
    ).toBeInTheDocument()
  })

  it('renders all questions', () => {
    render(<Faq />)
    expect(screen.getByText(/What services does DigiView offer/i)).toBeInTheDocument()
    expect(screen.getByText(/How long does a typical project take/i)).toBeInTheDocument()
    expect(screen.getByText(/Do you work with small businesses/i)).toBeInTheDocument()
    expect(screen.getByText(/What is your pricing model/i)).toBeInTheDocument()
  })

  it('toggles answer on click', async () => {
    const user = userEvent.setup()
    render(<Faq />)
    const firstQ = screen.getByRole('button', { name: /What services does DigiView offer/i })
    expect(firstQ).toHaveAttribute('aria-expanded', 'false')
    await user.click(firstQ)
    expect(firstQ).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByText(/Web development, SEO optimization/i)).toBeInTheDocument()
  })

  it('closes answer on second click', async () => {
    const user = userEvent.setup()
    render(<Faq />)
    const btn = screen.getByRole('button', { name: /What services does DigiView offer/i })
    await user.click(btn)
    await user.click(btn)
    expect(btn).toHaveAttribute('aria-expanded', 'false')
  })

  it('closes first answer when second is opened', async () => {
    const user = userEvent.setup()
    render(<Faq />)
    const btn1 = screen.getByRole('button', { name: /What services does DigiView offer/i })
    const btn2 = screen.getByRole('button', { name: /How long does a typical project take/i })
    await user.click(btn1)
    expect(btn1).toHaveAttribute('aria-expanded', 'true')
    await user.click(btn2)
    expect(btn1).toHaveAttribute('aria-expanded', 'false')
    expect(btn2).toHaveAttribute('aria-expanded', 'true')
  })
})

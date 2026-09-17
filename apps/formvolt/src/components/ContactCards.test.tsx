import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { ContactCards } from './ContactCards'

describe('ContactCards', () => {
  it('renders the two cards container', () => {
    render(<ContactCards />)

    expect(screen.getByTestId('contact-cards')).toBeInTheDocument()
  })

  it('renders the Say Hi card', () => {
    render(<ContactCards />)

    expect(screen.getByTestId('card-hi')).toBeInTheDocument()
  })

  it('renders the Get a Quote card', () => {
    render(<ContactCards />)

    expect(screen.getByTestId('card-quote')).toBeInTheDocument()
  })

  it('renders CONTACT US heading in each card', () => {
    render(<ContactCards />)

    const headings = screen.getAllByRole('heading', { name: /contact us/i })
    expect(headings).toHaveLength(2)
  })

  it('left card has Say Hi radio selected by default', () => {
    render(<ContactCards />)

    const container = screen.getByTestId('radio-hi')
    const radios = container.querySelectorAll<HTMLInputElement>('input[type="radio"]')
    expect(radios[0]).toBeChecked()
    expect(radios[1]).not.toBeChecked()
  })

  it('right card has Get a Quote radio selected by default', () => {
    render(<ContactCards />)

    const container = screen.getByTestId('radio-right')
    const radios = container.querySelectorAll<HTMLInputElement>('input[type="radio"]')
    expect(radios[0]).not.toBeChecked()
    expect(radios[1]).toBeChecked()
  })

  it('left card shows Name, Email, Message inputs in Say Hi mode', () => {
    render(<ContactCards />)

    // Both cards have Name/Email/Message — use getAllByLabelText
    const names = screen.getAllByLabelText(/your name/i)
    expect(names.length).toBeGreaterThanOrEqual(2)

    const emails = screen.getAllByLabelText(/your email/i)
    expect(emails.length).toBeGreaterThanOrEqual(2)

    const messages = screen.getAllByLabelText(/your message/i)
    expect(messages.length).toBeGreaterThanOrEqual(2)
  })

  it('right card shows Needed Services and Budget in Get a Quote mode', () => {
    render(<ContactCards />)

    expect(screen.getByLabelText(/needed services/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/budget/i)).toBeInTheDocument()
  })

  it('switching left card to Get a Quote shows service and budget fields', async () => {
    const user = userEvent.setup()
    render(<ContactCards />)

    const container = screen.getByTestId('radio-hi')
    const radios = container.querySelectorAll<HTMLInputElement>('input[type="radio"]')
    await user.click(radios[1]!)

    // Left card now in quote mode — service and budget fields should exist
    expect(screen.getByLabelText(/needed services/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/budget/i)).toBeInTheDocument()
  })

  it('renders submit buttons on both cards', () => {
    render(<ContactCards />)

    const buttons = screen.getAllByRole('button', { name: /submit/i })
    expect(buttons).toHaveLength(2)
  })

  it('service dropdown has correct options', () => {
    render(<ContactCards />)

    const select = screen.getByLabelText(/needed services/i)
    const options = Array.from(select.querySelectorAll('option'))
    expect(options.length).toBeGreaterThanOrEqual(5)
  })

  it('budget dropdown has correct options', () => {
    render(<ContactCards />)

    const select = screen.getByLabelText(/budget/i)
    const options = Array.from(select.querySelectorAll('option'))
    expect(options.length).toBeGreaterThanOrEqual(4)
  })

  it('switching right card to Say Hi hides service and budget fields', async () => {
    const user = userEvent.setup()
    render(<ContactCards />)

    const container = screen.getByTestId('radio-right')
    const radios = container.querySelectorAll<HTMLInputElement>('input[type="radio"]')
    await user.click(radios[0]!)

    // Right card now in hi mode — no budget field
    expect(screen.queryByLabelText(/budget/i)).not.toBeInTheDocument()

    // Now switch back to quote
    await user.click(radios[1]!)
    expect(screen.getByLabelText(/budget/i)).toBeInTheDocument()
  })

  it('switching left card back to Say Hi hides service and budget', async () => {
    const user = userEvent.setup()
    render(<ContactCards />)

    // First switch left to quote
    const leftContainer = screen.getByTestId('radio-hi')
    const leftRadios = leftContainer.querySelectorAll<HTMLInputElement>('input[type="radio"]')
    await user.click(leftRadios[1]!)

    // Now switch back to hi
    await user.click(leftRadios[0]!)

    // Left card back in hi mode — no service/budget in left card
    // Only right card (quote mode) should have them
    const services = screen.getAllByLabelText(/needed services/i)
    expect(services).toHaveLength(1)
  })
})

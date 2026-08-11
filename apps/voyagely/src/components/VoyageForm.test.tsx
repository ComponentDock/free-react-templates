import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { VoyageForm } from './VoyageForm'

describe('VoyageForm', () => {
  it('renders the dark translucent rounded booking container', () => {
    const { container } = render(<VoyageForm />)

    const containerEl = container.querySelector('[class*="bg-panel"]') as HTMLElement
    expect(containerEl).not.toBeNull()
    expect(containerEl.className).toMatch(/rounded-\[10px\]/)
    expect(containerEl.className).toMatch(/mt-\[265px\]/)
    expect(containerEl.className).toMatch(/mx-auto/)
    // Desktop 960px; mobile calc(100% - 30px).
    expect(containerEl.className).toMatch(/md:w-\[960px\]/)
    expect(containerEl.className).toMatch(/w-\[calc\(100%-30px\)\]/)
    // Form padding 35px 70px 51px 70px.
    expect(containerEl.className).toMatch(/px-\[70px\]/)
    expect(containerEl.className).toMatch(/pt-\[35px\]/)
    expect(containerEl.className).toMatch(/pb-\[51px\]/)
  })

  it('renders the Destination input with the source placeholder', () => {
    render(<VoyageForm />)

    const destination = screen.getByLabelText('Destination') as HTMLInputElement
    expect(destination).toHaveAttribute('type', 'text')
    expect(destination).toHaveAttribute('placeholder', 'EG. HAWAII')
    // White input, radius 5px, 16px weight-600 #222 text, #999 placeholder.
    expect(destination.className).toMatch(/rounded-\[5px\]/)
    expect(destination.className).toMatch(/bg-white/)
    expect(destination.className).toMatch(/text-\[16px\]/)
    expect(destination.className).toMatch(/font-semibold/)
    expect(destination.className).toMatch(/text-ink/)
    expect(destination.className).toMatch(/placeholder:text-muted/)
    expect(destination).toBeRequired()
  })

  it('renders From and To date inputs with calendar icons', () => {
    const { container } = render(<VoyageForm />)

    const from = screen.getByLabelText('From') as HTMLInputElement
    const to = screen.getByLabelText('To') as HTMLInputElement
    expect(from).toHaveAttribute('type', 'date')
    expect(to).toHaveAttribute('type', 'date')
    expect(from).toHaveAttribute('placeholder', 'Pick a date')
    expect(to).toHaveAttribute('placeholder', 'Pick a date')

    // Calendar icon on the right of each date field (right 16px, top 40px,
    // #999) — from the source .ui-datepicker-trigger.
    for (const name of ['From', 'To']) {
      const field = screen.getByText(name).parentElement as HTMLElement
      const icon = field.querySelector('svg') as SVGElement
      expect(icon).not.toBeNull()
      // jsdom exposes SVG className as SVGAnimatedString — read the class
      // attribute directly.
      expect(icon.getAttribute('class')).toMatch(/right-4/)
      expect(icon.getAttribute('class')).toMatch(/top-10/)
      expect(icon.getAttribute('class')).toMatch(/text-muted/)
      expect(icon).toHaveAttribute('aria-hidden', 'true')
    }
    expect(container.querySelectorAll('svg')).toHaveLength(4)
  })

  it('renders the Quantity stepper at 0 with chevron controls that honor min 0', () => {
    render(<VoyageForm />)

    const quantity = screen.getByLabelText('Quantity') as HTMLInputElement
    expect(quantity).toHaveValue(0)
    expect(quantity.className).toMatch(/text-muted/)

    const increase = screen.getByRole('button', { name: 'Increase quantity' })
    const decrease = screen.getByRole('button', { name: 'Decrease quantity' })

    // Min 0: minus at 0 does nothing.
    fireEvent.click(decrease)
    expect(quantity).toHaveValue(0)

    fireEvent.click(increase)
    expect(quantity).toHaveValue(1)

    fireEvent.click(decrease)
    expect(quantity).toHaveValue(0)

    // And again at 0 — stays 0.
    fireEvent.click(decrease)
    expect(quantity).toHaveValue(0)
  })

  it('renders the yellow Book now submit button with the source hover', () => {
    render(<VoyageForm />)

    const button = screen.getByRole('button', { name: 'Book now' })
    expect(button).toHaveAttribute('type', 'submit')
    expect(button.className).toMatch(/bg-brand/)
    expect(button.className).toMatch(/text-white/)
    expect(button.className).toMatch(/hover:bg-brand-hover/)
    expect(button.className).toMatch(/rounded-none/)
    expect(button.className).toMatch(/mt-\[23px\]/)
    expect(button.className).not.toMatch(/hover:opacity/)
  })

  it('shows validation messages for missing required fields and no summary', () => {
    const { container } = render(<VoyageForm />)

    fireEvent.submit(container.querySelector('form') as HTMLFormElement)

    expect(screen.getByText('Please enter a destination.')).toBeInTheDocument()
    expect(screen.getByText('Please choose a departure date.')).toBeInTheDocument()
    expect(screen.getByText('Please choose a return date.')).toBeInTheDocument()
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })

  it('blocks a return date earlier than the departure date', () => {
    const { container } = render(<VoyageForm />)

    fireEvent.change(screen.getByLabelText('From'), { target: { value: '2026-08-14' } })
    fireEvent.change(screen.getByLabelText('To'), { target: { value: '2026-08-10' } })

    fireEvent.submit(container.querySelector('form') as HTMLFormElement)

    expect(
      screen.getByText('The return date must be on or after the departure date.'),
    ).toBeInTheDocument()
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })

  it('submits a valid booking and shows the gold-styled summary line', async () => {
    const user = userEvent.setup()
    render(<VoyageForm />)

    await user.type(screen.getByLabelText('Destination'), 'EG. HAWAII')
    fireEvent.change(screen.getByLabelText('From'), { target: { value: '2026-08-10' } })
    fireEvent.change(screen.getByLabelText('To'), { target: { value: '2026-08-14' } })
    fireEvent.click(screen.getByRole('button', { name: 'Increase quantity' }))
    fireEvent.click(screen.getByRole('button', { name: 'Increase quantity' }))

    await user.click(screen.getByRole('button', { name: 'Book now' }))

    const status = screen.getByRole('status')
    expect(status).toHaveTextContent(
      'Voyage to EG. HAWAII from Aug 10 to Aug 14, 2026 for 2 guests',
    )
    expect(status.className).toMatch(/text-brand/)
    expect(status.className).toMatch(/bg-brand\/10/)
  })

  it('clears a field error once the user edits the field', () => {
    const { container } = render(<VoyageForm />)

    fireEvent.submit(container.querySelector('form') as HTMLFormElement)
    expect(screen.getByText('Please enter a destination.')).toBeInTheDocument()
    expect(screen.getByText('Please choose a return date.')).toBeInTheDocument()

    fireEvent.change(screen.getByLabelText('Destination'), { target: { value: 'BORA BORA' } })
    expect(screen.queryByText('Please enter a destination.')).not.toBeInTheDocument()
    expect(screen.getByText('Please choose a return date.')).toBeInTheDocument()
  })
})

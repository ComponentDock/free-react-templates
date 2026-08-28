import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SizeButtons } from './SizeButtons'

describe('SizeButtons', () => {
  it('renders three buttons', () => {
    render(<SizeButtons />)

    const buttons = screen.getAllByRole('button')
    expect(buttons).toHaveLength(3)
  })

  it('renders Large, Medium, Small labels in order', () => {
    render(<SizeButtons />)

    const labels = screen.getAllByText(/^(Large|Medium|Small)$/)
    expect(labels).toHaveLength(3)
    expect(labels[0]?.textContent).toBe('Large')
    expect(labels[1]?.textContent).toBe('Medium')
    expect(labels[2]?.textContent).toBe('Small')
  })

  it('renders all three buttons with "Button" text', () => {
    render(<SizeButtons />)

    const buttons = screen.getAllByText('Button')
    expect(buttons).toHaveLength(3)
  })

  it('applies custom className', () => {
    const { container } = render(<SizeButtons className="my-class" />)

    expect(container.firstElementChild?.className).toContain('my-class')
  })

  it('renders the Large button with lg text size', () => {
    render(<SizeButtons />)

    const buttons = screen.getAllByRole('button')
    // First button is Large
    expect(buttons[0]?.className).toContain('text-[16px]')
  })

  it('renders the Small button with sm text size', () => {
    render(<SizeButtons />)

    const buttons = screen.getAllByRole('button')
    // Last button is Small
    expect(buttons[2]?.className).toContain('text-[10px]')
  })
})

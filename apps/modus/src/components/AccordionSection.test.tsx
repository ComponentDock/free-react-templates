import { describe, expect, it } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { AccordionSection } from './AccordionSection'

describe('AccordionSection', () => {
  it('renders the section heading', () => {
    render(<AccordionSection />)
    expect(
      screen.getByRole('heading', { name: /A design with different vision point/i }),
    ).toBeInTheDocument()
  })

  it('renders the description text', () => {
    render(<AccordionSection />)
    expect(screen.getByText(/all-powerful Pointing/i)).toBeInTheDocument()
  })

  it('renders the Learn More CTA', () => {
    render(<AccordionSection />)
    expect(screen.getByRole('link', { name: /Learn More/i })).toBeInTheDocument()
  })

  it('shows the first accordion open by default', () => {
    render(<AccordionSection />)
    const firstBtn = screen.getAllByRole('button')[0]
    expect(firstBtn).toHaveAttribute('aria-expanded', 'true')
  })

  it('expands accordion items on click', () => {
    render(<AccordionSection />)
    const buttons = screen.getAllByRole('button')
    expect(buttons.length).toBe(4)

    // Click second accordion
    fireEvent.click(buttons[1] as HTMLElement)
    expect(buttons[1]).toHaveAttribute('aria-expanded', 'true')
  })

  it('collapses the first accordion when clicked again', () => {
    render(<AccordionSection />)
    const buttons = screen.getAllByRole('button')
    const firstBtn = buttons[0] as HTMLElement

    // First button should be expanded by default
    expect(firstBtn).toHaveAttribute('aria-expanded', 'true')

    // Click to collapse
    fireEvent.click(firstBtn)
    expect(firstBtn).toHaveAttribute('aria-expanded', 'false')
  })
})

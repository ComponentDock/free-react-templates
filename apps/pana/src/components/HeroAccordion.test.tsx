import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { HeroAccordion } from './HeroAccordion'

describe('HeroAccordion', () => {
  it('renders 5 accordion items', () => {
    render(<HeroAccordion />)
    const buttons = screen.getAllByRole('button')
    expect(buttons).toHaveLength(5)
  })

  it('expands the first item by default', () => {
    render(<HeroAccordion />)
    expect(screen.getByText('69 Flavio Burg Suite')).toBeDefined()
  })

  it('expands a collapsed item when clicked', async () => {
    const user = userEvent.setup()
    render(<HeroAccordion />)
    const buttons = screen.getAllByRole('button')
    await user.click(buttons[1]!)
    expect(screen.getByText('Golden Hour Portrait')).toBeDefined()
  })

  it('collapses an expanded item when clicked again', async () => {
    const user = userEvent.setup()
    render(<HeroAccordion />)
    const buttons = screen.getAllByRole('button')
    // First item is expanded by default
    expect(screen.getByText('69 Flavio Burg Suite')).toBeDefined()
    await user.click(buttons[0]!)
    expect(screen.queryByText('69 Flavio Burg Suite')).toBeNull()
  })
})

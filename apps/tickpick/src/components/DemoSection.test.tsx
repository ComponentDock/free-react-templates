import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { DemoSection } from './DemoSection'

describe('DemoSection', () => {
  it('renders the heading', () => {
    render(<DemoSection />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Checkbox #09')
  })

  it('renders three checkboxes', () => {
    render(<DemoSection />)
    const checkboxes = screen.getAllByRole('checkbox')
    expect(checkboxes).toHaveLength(3)
  })

  it('first checkbox is checked by default', () => {
    render(<DemoSection />)
    const checkboxes = screen.getAllByRole('checkbox')
    expect(checkboxes[0]).toBeChecked()
  })

  it('second and third checkboxes are unchecked by default', () => {
    render(<DemoSection />)
    const checkboxes = screen.getAllByRole('checkbox')
    expect(checkboxes[1]).not.toBeChecked()
    expect(checkboxes[2]).not.toBeChecked()
  })

  it('toggling a checkbox updates its state', async () => {
    const user = userEvent.setup()
    render(<DemoSection />)
    const checkboxes = screen.getAllByRole('checkbox')
    const second = checkboxes[1]!
    await user.click(second)
    expect(second).toBeChecked()
  })

  it('renders task labels', () => {
    render(<DemoSection />)
    expect(screen.getByText('Task One')).toBeInTheDocument()
    expect(screen.getByText('Task Two')).toBeInTheDocument()
    expect(screen.getByText('Task Three')).toBeInTheDocument()
  })
})

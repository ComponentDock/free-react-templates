import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { FeaturesAccordion } from './FeaturesAccordion'

describe('FeaturesAccordion', () => {
  it('renders the heading and four accordion rows with the second open', () => {
    render(<FeaturesAccordion />)
    expect(
      screen.getByRole('heading', { level: 2, name: /Some more features/ }),
    ).toBeInTheDocument()
    const buttons = screen.getAllByRole('button')
    expect(buttons).toHaveLength(4)
    expect(buttons[0]).toHaveAttribute('aria-expanded', 'false')
    expect(buttons[1]).toHaveAttribute('aria-expanded', 'true')
    expect(buttons[2]).toHaveAttribute('aria-expanded', 'false')
    expect(buttons[3]).toHaveAttribute('aria-expanded', 'false')
  })

  it('renders exactly one panel body at a time (conditional render)', () => {
    render(<FeaturesAccordion />)
    const bodies = screen.getAllByText(/your clothes go into the machine\. Duis cursus/)
    expect(bodies).toHaveLength(1)
  })

  it('expands a closed row and collapses the previously open row', async () => {
    const user = userEvent.setup()
    render(<FeaturesAccordion />)
    const buttons = screen.getAllByRole('button')
    await user.click(buttons[0]!)
    expect(buttons[0]).toHaveAttribute('aria-expanded', 'true')
    expect(buttons[1]).toHaveAttribute('aria-expanded', 'false')
    expect(screen.getAllByText(/your clothes go into the machine\. Duis cursus/)).toHaveLength(1)
  })

  it('collapses the open row when clicked again', async () => {
    const user = userEvent.setup()
    render(<FeaturesAccordion />)
    const buttons = screen.getAllByRole('button')
    await user.click(buttons[1]!)
    expect(buttons[1]).toHaveAttribute('aria-expanded', 'false')
    expect(
      screen.queryByText(/your clothes go into the machine\. Duis cursus/),
    ).not.toBeInTheDocument()
  })

  it('renders the section photo beside the accordion', () => {
    render(<FeaturesAccordion />)
    expect(screen.getByRole('img', { name: /Product analytics dashboard/ })).toBeInTheDocument()
  })
})

import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { StepsAccordion } from './StepsAccordion'

describe('StepsAccordion', () => {
  it('renders all 7 steps', () => {
    render(<StepsAccordion />)
    expect(screen.getByText('1. Getting Started')).toBeInTheDocument()
    expect(screen.getByText('2. Envisioning your family')).toBeInTheDocument()
    expect(screen.getByText('3. Getting approved')).toBeInTheDocument()
    expect(screen.getByText('4. Being matched with a child')).toBeInTheDocument()
    expect(screen.getByText('5. Receiving a placement')).toBeInTheDocument()
    expect(screen.getByText('6. Finalizing an adoption')).toBeInTheDocument()
    expect(screen.getByText('7. State information')).toBeInTheDocument()
  })

  it('first step is expanded by default', () => {
    render(<StepsAccordion />)
    expect(screen.getByText(/Begin your adoption journey/)).toBeInTheDocument()
  })

  it('collapses first step when clicked', async () => {
    const user = userEvent.setup()
    render(<StepsAccordion />)
    const firstBtn = screen.getByText('1. Getting Started')
    await user.click(firstBtn)
    expect(screen.queryByText(/Begin your adoption journey/)).not.toBeInTheDocument()
  })

  it('expands second step on click', async () => {
    const user = userEvent.setup()
    render(<StepsAccordion />)
    const secondBtn = screen.getByText('2. Envisioning your family')
    await user.click(secondBtn)
    expect(screen.getByText(/Think about what kind of family/)).toBeInTheDocument()
  })

  it('only one step open at a time', async () => {
    const user = userEvent.setup()
    render(<StepsAccordion />)
    const secondBtn = screen.getByText('2. Envisioning your family')
    await user.click(secondBtn)
    expect(screen.queryByText(/Begin your adoption journey/)).not.toBeInTheDocument()
    expect(screen.getByText(/Think about what kind of family/)).toBeInTheDocument()
  })
})

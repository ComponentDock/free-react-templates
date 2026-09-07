import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { AccordionWizard } from './AccordionWizard'

describe('AccordionWizard', () => {
  it('renders all three step headers', () => {
    render(<AccordionWizard />)
    expect(screen.getByText('Basic Information')).toBeInTheDocument()
    expect(screen.getByText('Additional Information')).toBeInTheDocument()
    expect(screen.getByText('Specialities')).toBeInTheDocument()
  })

  it('starts with Step 1 expanded', () => {
    render(<AccordionWizard />)
    expect(screen.getByLabelText('First name')).toBeInTheDocument()
    expect(screen.getByLabelText('Last name')).toBeInTheDocument()
  })

  it('expands Step 2 when its header is clicked', async () => {
    const user = userEvent.setup()
    render(<AccordionWizard />)
    await user.click(screen.getByText('Additional Information'))
    expect(screen.getByLabelText('Your Email')).toBeInTheDocument()
    expect(screen.getByLabelText('Phone Number')).toBeInTheDocument()
  })

  it('collapses Step 1 when Step 2 is opened', async () => {
    const user = userEvent.setup()
    render(<AccordionWizard />)
    await user.click(screen.getByText('Additional Information'))
    expect(screen.queryByLabelText('First name')).not.toBeInTheDocument()
  })

  it('expands Step 3 when its header is clicked', async () => {
    const user = userEvent.setup()
    render(<AccordionWizard />)
    await user.click(screen.getByText('Specialities'))
    expect(screen.getByLabelText('Tell us your specialities')).toBeInTheDocument()
  })

  it('sets aria-expanded correctly on step headers', () => {
    render(<AccordionWizard />)
    const step1Button = screen.getByText('Basic Information').closest('button')!
    const step2Button = screen.getByText('Additional Information').closest('button')!
    expect(step1Button).toHaveAttribute('aria-expanded', 'true')
    expect(step2Button).toHaveAttribute('aria-expanded', 'false')
  })

  it('toggles aria-expanded when switching steps', async () => {
    const user = userEvent.setup()
    render(<AccordionWizard />)
    await user.click(screen.getByText('Additional Information'))
    const step1Button = screen.getByText('Basic Information').closest('button')!
    const step2Button = screen.getByText('Additional Information').closest('button')!
    expect(step1Button).toHaveAttribute('aria-expanded', 'false')
    expect(step2Button).toHaveAttribute('aria-expanded', 'true')
  })
})

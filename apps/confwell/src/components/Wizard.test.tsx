import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { Wizard } from './Wizard'

describe('Wizard', () => {
  it('renders step 1 by default', () => {
    render(<Wizard currentStep={1} onStepChange={vi.fn()} />)
    expect(screen.getByRole('heading', { name: /event information/i })).toBeInTheDocument()
  })

  it('renders step 2 when currentStep is 2', () => {
    render(<Wizard currentStep={2} onStepChange={vi.fn()} />)
    expect(screen.getByRole('heading', { name: /set the event/i })).toBeInTheDocument()
  })

  it('renders step 3 when currentStep is 3', () => {
    render(<Wizard currentStep={3} onStepChange={vi.fn()} />)
    expect(screen.getByRole('heading', { name: /request from you/i })).toBeInTheDocument()
  })

  it('calls onStepChange with next step when Next is clicked', async () => {
    const user = userEvent.setup()
    const onStepChange = vi.fn()
    render(<Wizard currentStep={1} onStepChange={onStepChange} />)

    await user.click(screen.getByRole('button', { name: /next/i }))
    expect(onStepChange).toHaveBeenCalledWith(2)
  })

  it('calls onStepChange with previous step when Previous is clicked', async () => {
    const user = userEvent.setup()
    const onStepChange = vi.fn()
    render(<Wizard currentStep={2} onStepChange={onStepChange} />)

    await user.click(screen.getByRole('button', { name: /previous/i }))
    expect(onStepChange).toHaveBeenCalledWith(1)
  })

  it('does not render Next button on last step', () => {
    render(<Wizard currentStep={3} onStepChange={vi.fn()} />)
    expect(screen.queryByRole('button', { name: /next/i })).not.toBeInTheDocument()
  })

  it('renders step indicator', () => {
    render(<Wizard currentStep={1} onStepChange={vi.fn()} />)
    expect(screen.getByRole('navigation', { name: /registration steps/i })).toBeInTheDocument()
  })

  it('renders social links', () => {
    render(<Wizard currentStep={1} onStepChange={vi.fn()} />)
    expect(screen.getByRole('link', { name: /facebook/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /twitter/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /instagram/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /tumblr/i })).toBeInTheDocument()
  })
})

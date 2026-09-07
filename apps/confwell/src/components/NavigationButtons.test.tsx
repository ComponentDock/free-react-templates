import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { NavigationButtons } from './NavigationButtons'

describe('NavigationButtons', () => {
  it('renders Previous and Next buttons', () => {
    render(
      <NavigationButtons currentStep={2} totalSteps={3} onPrevious={vi.fn()} onNext={vi.fn()} />,
    )
    expect(screen.getByRole('button', { name: /previous/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /next/i })).toBeInTheDocument()
  })

  it('disables Previous on first step', () => {
    render(
      <NavigationButtons currentStep={1} totalSteps={3} onPrevious={vi.fn()} onNext={vi.fn()} />,
    )
    expect(screen.getByRole('button', { name: /previous/i })).toBeDisabled()
  })

  it('hides Next on last step', () => {
    render(
      <NavigationButtons currentStep={3} totalSteps={3} onPrevious={vi.fn()} onNext={vi.fn()} />,
    )
    expect(screen.queryByRole('button', { name: /next/i })).not.toBeInTheDocument()
  })

  it('calls onNext when Next is clicked', async () => {
    const user = userEvent.setup()
    const onNext = vi.fn()
    render(
      <NavigationButtons currentStep={1} totalSteps={3} onPrevious={vi.fn()} onNext={onNext} />,
    )

    await user.click(screen.getByRole('button', { name: /next/i }))
    expect(onNext).toHaveBeenCalledTimes(1)
  })

  it('calls onPrevious when Previous is clicked', async () => {
    const user = userEvent.setup()
    const onPrevious = vi.fn()
    render(
      <NavigationButtons currentStep={2} totalSteps={3} onPrevious={onPrevious} onNext={vi.fn()} />,
    )

    await user.click(screen.getByRole('button', { name: /previous/i }))
    expect(onPrevious).toHaveBeenCalledTimes(1)
  })

  it('does not call onPrevious when disabled', async () => {
    const user = userEvent.setup()
    const onPrevious = vi.fn()
    render(
      <NavigationButtons currentStep={1} totalSteps={3} onPrevious={onPrevious} onNext={vi.fn()} />,
    )

    await user.click(screen.getByRole('button', { name: /previous/i }))
    expect(onPrevious).not.toHaveBeenCalled()
  })
})

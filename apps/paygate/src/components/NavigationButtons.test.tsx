import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { NavigationButtons } from './NavigationButtons'

describe('NavigationButtons', () => {
  it('shows only next button on step 1', () => {
    render(
      <NavigationButtons
        currentStep={1}
        onPrevious={vi.fn()}
        onNext={vi.fn()}
        onSubmit={vi.fn()}
      />,
    )

    expect(screen.queryByRole('button', { name: '← Previous' })).not.toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Next' })).toBeInTheDocument()
  })

  it('shows both buttons on step 2', () => {
    render(
      <NavigationButtons
        currentStep={2}
        onPrevious={vi.fn()}
        onNext={vi.fn()}
        onSubmit={vi.fn()}
      />,
    )

    expect(screen.getByRole('button', { name: '← Previous' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Next' })).toBeInTheDocument()
  })

  it('shows previous and submit on step 3', () => {
    render(
      <NavigationButtons
        currentStep={3}
        onPrevious={vi.fn()}
        onNext={vi.fn()}
        onSubmit={vi.fn()}
      />,
    )

    expect(screen.getByRole('button', { name: '← Previous' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument()
    expect(screen.queryByRole('button', { name: 'Next' })).not.toBeInTheDocument()
  })

  it('calls onNext when next button is clicked', async () => {
    const onNext = vi.fn()
    const user = userEvent.setup()

    render(
      <NavigationButtons currentStep={1} onPrevious={vi.fn()} onNext={onNext} onSubmit={vi.fn()} />,
    )

    await user.click(screen.getByRole('button', { name: 'Next' }))
    expect(onNext).toHaveBeenCalledOnce()
  })

  it('calls onPrevious when previous button is clicked', async () => {
    const onPrevious = vi.fn()
    const user = userEvent.setup()

    render(
      <NavigationButtons
        currentStep={2}
        onPrevious={onPrevious}
        onNext={vi.fn()}
        onSubmit={vi.fn()}
      />,
    )

    await user.click(screen.getByRole('button', { name: '← Previous' }))
    expect(onPrevious).toHaveBeenCalledOnce()
  })

  it('calls onSubmit when submit button is clicked', async () => {
    const onSubmit = vi.fn()
    const user = userEvent.setup()

    render(
      <NavigationButtons
        currentStep={3}
        onPrevious={vi.fn()}
        onNext={vi.fn()}
        onSubmit={onSubmit}
      />,
    )

    await user.click(screen.getByRole('button', { name: 'Submit' }))
    expect(onSubmit).toHaveBeenCalledOnce()
  })
})

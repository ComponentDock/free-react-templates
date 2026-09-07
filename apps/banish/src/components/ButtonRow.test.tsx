import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ButtonRow } from './ButtonRow'

describe('ButtonRow', () => {
  it('renders Next button', () => {
    render(<ButtonRow step={0} totalSteps={3} onPrev={() => {}} onNext={() => {}} />)
    expect(screen.getByRole('button', { name: /next/i })).toBeInTheDocument()
  })

  it('hides Back on step 1 with aria-hidden and tabindex', () => {
    const { container } = render(
      <ButtonRow step={0} totalSteps={3} onPrev={() => {}} onNext={() => {}} />,
    )
    const back = container.querySelector('button[aria-label="Back"]') as HTMLButtonElement
    expect(back).toBeTruthy()
    expect(back).toHaveAttribute('aria-hidden', 'true')
    expect(back).toHaveAttribute('tabindex', '-1')
    expect(back).toBeDisabled()
  })

  it('shows Back on step 2', () => {
    render(<ButtonRow step={1} totalSteps={3} onPrev={() => {}} onNext={() => {}} />)
    const back = screen.getByRole('button', { name: /back/i })
    expect(back).not.toBeDisabled()
    expect(back).toHaveAttribute('tabindex', '0')
  })

  it('shows Finish on last step', () => {
    render(<ButtonRow step={2} totalSteps={3} onPrev={() => {}} onNext={() => {}} />)
    expect(screen.getByRole('button', { name: /finish/i })).toBeInTheDocument()
    expect(screen.queryByRole('button', { name: /next/i })).not.toBeInTheDocument()
  })

  it('calls onNext when Next is clicked', async () => {
    const onNext = vi.fn()
    render(<ButtonRow step={0} totalSteps={3} onPrev={() => {}} onNext={onNext} />)
    await userEvent.click(screen.getByRole('button', { name: /next/i }))
    expect(onNext).toHaveBeenCalledOnce()
  })

  it('calls onPrev when Back is clicked', async () => {
    const onPrev = vi.fn()
    render(<ButtonRow step={1} totalSteps={3} onPrev={onPrev} onNext={() => {}} />)
    await userEvent.click(screen.getByRole('button', { name: /back/i }))
    expect(onPrev).toHaveBeenCalledOnce()
  })

  it('does not call onNext on Finish click', async () => {
    const onNext = vi.fn()
    render(<ButtonRow step={2} totalSteps={3} onPrev={() => {}} onNext={onNext} />)
    await userEvent.click(screen.getByRole('button', { name: /finish/i }))
    expect(onNext).not.toHaveBeenCalled()
  })
})

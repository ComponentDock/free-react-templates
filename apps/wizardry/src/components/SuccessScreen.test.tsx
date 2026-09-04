import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SuccessScreen } from './SuccessScreen'

describe('SuccessScreen', () => {
  it('renders the completion header', () => {
    render(<SuccessScreen onReset={vi.fn()} />)
    expect(screen.getByText('Complete!')).toBeInTheDocument()
  })

  it('renders the success message', () => {
    render(<SuccessScreen onReset={vi.fn()} />)
    expect(screen.getByText('Registration Complete')).toBeInTheDocument()
    expect(screen.getByText(/Your account has been successfully created/)).toBeInTheDocument()
  })

  it('renders the Start Over button', () => {
    render(<SuccessScreen onReset={vi.fn()} />)
    expect(screen.getByText('Start Over')).toBeInTheDocument()
  })

  it('calls onReset when Start Over is clicked', async () => {
    const onReset = vi.fn()
    const user = userEvent.setup()
    render(<SuccessScreen onReset={onReset} />)

    await user.click(screen.getByText('Start Over'))
    expect(onReset).toHaveBeenCalledOnce()
  })

  it('renders a checkmark icon', () => {
    render(<SuccessScreen onReset={vi.fn()} />)
    // The checkmark SVG is rendered
    const svg = document.querySelector('svg')
    expect(svg).toBeInTheDocument()
  })
})

import { render, screen, fireEvent, act } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { SolidButtons } from './SolidButtons'

describe('SolidButtons', () => {
  const writeText = vi.fn().mockResolvedValue(undefined)

  beforeEach(() => {
    vi.useFakeTimers()
    vi.clearAllMocks()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders solid button headings and buttons', () => {
    render(<SolidButtons />)
    expect(screen.getByText('1. Solid & Filled Buttons')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Primary Button' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Secondary Button' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Tertiary Button' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Quaternary Button' })).toBeInTheDocument()
  })

  it('copies primary snippet and clears after timeout', () => {
    Object.defineProperty(navigator, 'clipboard', {
      value: { writeText },
      configurable: true,
    })
    render(<SolidButtons />)
    const copyButtons = screen.getAllByRole('button', { name: /Copy Snippet/ })
    expect(copyButtons.length).toBe(4)
    fireEvent.click(copyButtons[0]!)
    expect(writeText).toHaveBeenCalled()
    expect(screen.getByText('Copied!')).toBeInTheDocument()
    act(() => {
      vi.advanceTimersByTime(2100)
    })
    expect(screen.queryByText('Copied!')).not.toBeInTheDocument()
  })

  it('copies secondary snippet when copy button is clicked', () => {
    Object.defineProperty(navigator, 'clipboard', {
      value: { writeText },
      configurable: true,
    })
    render(<SolidButtons />)
    const copyButtons = screen.getAllByRole('button', { name: /Copy Snippet/ })
    fireEvent.click(copyButtons[1]!)
    expect(writeText).toHaveBeenCalled()
    expect(screen.getByText('Copied!')).toBeInTheDocument()
    act(() => {
      vi.advanceTimersByTime(2100)
    })
    expect(screen.queryByText('Copied!')).not.toBeInTheDocument()
  })

  it('copies tertiary snippet when copy button is clicked', () => {
    Object.defineProperty(navigator, 'clipboard', {
      value: { writeText },
      configurable: true,
    })
    render(<SolidButtons />)
    const copyButtons = screen.getAllByRole('button', { name: /Copy Snippet/ })
    fireEvent.click(copyButtons[2]!)
    expect(writeText).toHaveBeenCalled()
    expect(screen.getByText('Copied!')).toBeInTheDocument()
  })

  it('copies quaternary snippet when copy button is clicked', () => {
    Object.defineProperty(navigator, 'clipboard', {
      value: { writeText },
      configurable: true,
    })
    render(<SolidButtons />)
    const copyButtons = screen.getAllByRole('button', { name: /Copy Snippet/ })
    fireEvent.click(copyButtons[3]!)
    expect(writeText).toHaveBeenCalled()
    expect(screen.getByText('Copied!')).toBeInTheDocument()
  })

  it('handles copy when clipboard API is not available', () => {
    Object.defineProperty(navigator, 'clipboard', {
      value: undefined,
      configurable: true,
    })
    render(<SolidButtons />)
    const copyButtons = screen.getAllByRole('button', { name: /Copy Snippet/ })
    fireEvent.click(copyButtons[0]!)
    expect(screen.getByText('Copied!')).toBeInTheDocument()
  })
})

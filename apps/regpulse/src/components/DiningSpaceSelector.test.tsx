import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { DiningSpaceSelector } from './DiningSpaceSelector'

describe('DiningSpaceSelector', () => {
  it('renders all person options', () => {
    render(<DiningSpaceSelector value={4} onChange={vi.fn()} />)

    expect(screen.getByText('Select Your Dining Space')).toBeInTheDocument()
    expect(screen.getByLabelText('2 persons')).toBeInTheDocument()
    expect(screen.getByLabelText('4 persons')).toBeInTheDocument()
    expect(screen.getByLabelText('6 persons')).toBeInTheDocument()
    expect(screen.getByLabelText('8 persons')).toBeInTheDocument()
    expect(screen.getByLabelText('10 persons')).toBeInTheDocument()
  })

  it('shows the selected value as checked', () => {
    render(<DiningSpaceSelector value={6} onChange={vi.fn()} />)

    expect(screen.getByLabelText('6 persons')).toBeChecked()
    expect(screen.getByLabelText('4 persons')).not.toBeChecked()
  })

  it('calls onChange when a different option is clicked', async () => {
    const onChange = vi.fn()
    const user = userEvent.setup()
    render(<DiningSpaceSelector value={4} onChange={onChange} />)

    await user.click(screen.getByLabelText('2 persons'))
    expect(onChange).toHaveBeenCalledWith(2)
  })

  it('shows "Person" label next to the active option', () => {
    const { container } = render(<DiningSpaceSelector value={4} onChange={vi.fn()} />)

    const activeLabel = container.querySelector('.bg-brand')
    expect(activeLabel).toHaveTextContent('4Person')
  })
})

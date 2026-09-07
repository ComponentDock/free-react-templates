import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { SelectedTag } from './SelectedTag'

describe('SelectedTag', () => {
  it('renders label', () => {
    render(<SelectedTag label="Alaska" onRemove={vi.fn()} />)
    expect(screen.getByText('Alaska')).toBeInTheDocument()
  })

  it('renders remove button with aria-label', () => {
    render(<SelectedTag label="Alaska" onRemove={vi.fn()} />)
    expect(screen.getByRole('button', { name: /remove alaska/i })).toBeInTheDocument()
  })

  it('calls onRemove when remove button clicked', async () => {
    const onRemove = vi.fn()
    const user = userEvent.setup()
    render(<SelectedTag label="Alaska" onRemove={onRemove} />)
    await user.click(screen.getByRole('button', { name: /remove alaska/i }))
    expect(onRemove).toHaveBeenCalledOnce()
  })
})

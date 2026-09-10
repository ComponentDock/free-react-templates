import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Step2 } from './Step2'

describe('Step2', () => {
  it('renders all category buttons', () => {
    render(<Step2 selectedCategory={null} onSelectCategory={vi.fn()} />)
    expect(screen.getByText('Programming')).toBeInTheDocument()
    expect(screen.getByText('Research')).toBeInTheDocument()
    expect(screen.getByText('Teacher')).toBeInTheDocument()
    expect(screen.getByText('Tour Guide')).toBeInTheDocument()
    expect(screen.getByText('Business')).toBeInTheDocument()
    expect(screen.getByText('Artist')).toBeInTheDocument()
  })

  it('calls onSelectCategory when a category is clicked', async () => {
    const user = userEvent.setup()
    const onSelect = vi.fn()
    render(<Step2 selectedCategory={null} onSelectCategory={onSelect} />)
    await user.click(screen.getByText('Programming'))
    expect(onSelect).toHaveBeenCalledWith('programming')
  })

  it('highlights the selected category', () => {
    render(<Step2 selectedCategory="research" onSelectCategory={vi.fn()} />)
    const researchBtn = screen.getByText('Research').closest('button')
    expect(researchBtn).toHaveClass('ring-2')
  })

  it('does not highlight unselected categories', () => {
    render(<Step2 selectedCategory="research" onSelectCategory={vi.fn()} />)
    const programmingBtn = screen.getByText('Programming').closest('button')
    expect(programmingBtn).not.toHaveClass('ring-2')
  })
})

import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Speakers } from './Speakers'

describe('Speakers', () => {
  it('renders section title', () => {
    render(<Speakers />)
    expect(screen.getByRole('heading', { name: /our speakers/i })).toBeInTheDocument()
  })

  it('renders all speaker cards', () => {
    render(<Speakers />)
    expect(screen.getByText('Sarah Chen')).toBeInTheDocument()
    expect(screen.getByText('Marcus Williams')).toBeInTheDocument()
    expect(screen.getByText('Elena Rodriguez')).toBeInTheDocument()
  })

  it('opens modal on card click', async () => {
    const user = userEvent.setup()
    render(<Speakers />)
    await user.click(screen.getByRole('button', { name: /view sarah chen/i }))
    expect(screen.getByRole('dialog', { name: /sarah chen details/i })).toBeInTheDocument()
    expect(screen.getAllByText('AI Research Lead')).toHaveLength(2)
  })

  it('closes modal on close button', async () => {
    const user = userEvent.setup()
    render(<Speakers />)
    await user.click(screen.getByRole('button', { name: /view sarah chen/i }))
    await user.click(screen.getByRole('button', { name: /close dialog/i }))
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('has light gray background', () => {
    const { container } = render(<Speakers />)
    const section = container.querySelector('section')
    expect(section).toHaveClass('bg-light-gray')
  })
})

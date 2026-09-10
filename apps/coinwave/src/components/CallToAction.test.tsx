import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { CallToAction } from './CallToAction'
import { describe, expect, it } from 'vitest'

describe('CallToAction', () => {
  it('displays the heading', () => {
    render(<CallToAction />)
    expect(screen.getByText('Huge Transaction in last Week')).toBeInTheDocument()
  })

  it('displays the description', () => {
    render(<CallToAction />)
    expect(screen.getByText(/processed over \$50 million/)).toBeInTheDocument()
  })

  it('renders the Buy Bitcoin Now button', async () => {
    const user = userEvent.setup()
    render(<CallToAction />)
    const btn = screen.getByRole('link', { name: 'Buy Bitcoin Now!' })
    expect(btn).toBeInTheDocument()
    await user.click(btn)
  })
})

import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { FAQ } from './FAQ'

describe('FAQ', () => {
  it('renders section title', () => {
    render(<FAQ />)
    expect(screen.getByText('Frequently Asked Questions')).toBeInTheDocument()
  })

  it('renders all four questions', () => {
    render(<FAQ />)
    expect(screen.getByText('What types of loans do you offer?')).toBeInTheDocument()
    expect(screen.getByText('How long does the approval process take?')).toBeInTheDocument()
    expect(screen.getByText('What are the interest rates?')).toBeInTheDocument()
    expect(screen.getByText('Can I repay early without penalties?')).toBeInTheDocument()
  })

  it('shows first answer expanded by default', () => {
    render(<FAQ />)
    expect(screen.getByText(/We offer student loans, business loans/)).toBeInTheDocument()
  })

  it('expands and collapses on click', async () => {
    const { userEvent } = await import('@testing-library/user-event')
    const user = userEvent.setup()
    render(<FAQ />)
    await user.click(screen.getByText('How long does the approval process take?'))
    expect(
      screen.getByText(/streamlined approval process typically takes 24-48 hours/),
    ).toBeInTheDocument()
    expect(screen.queryByText(/We offer student loans, business loans/)).not.toBeInTheDocument()
  })

  it('collapses when clicking the same header again', async () => {
    const { userEvent } = await import('@testing-library/user-event')
    const user = userEvent.setup()
    render(<FAQ />)
    expect(screen.getByText(/We offer student loans/)).toBeInTheDocument()
    await user.click(screen.getByText('What types of loans do you offer?'))
    expect(screen.queryByText(/We offer student loans/)).not.toBeInTheDocument()
  })

  it('has gray background', () => {
    const { container } = render(<FAQ />)
    const section = container.querySelector('section')!
    expect(section.className).toContain('bg-gray-bg')
  })

  it('renders FAQ image', () => {
    render(<FAQ />)
    expect(screen.getByAltText('FAQ')).toBeInTheDocument()
  })
})

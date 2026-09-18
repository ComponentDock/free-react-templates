import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SubmitButton } from './SubmitButton'

describe('SubmitButton', () => {
  it('renders a submit button with text', () => {
    render(<SubmitButton />)
    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument()
  })

  it('has type="submit"', () => {
    render(<SubmitButton />)
    expect(screen.getByRole('button')).toHaveAttribute('type', 'submit')
  })

  it('contains the arrow icon', () => {
    const { container } = render(<SubmitButton />)
    const arrow = container.querySelector('.arrow-icon')
    expect(arrow).toBeInTheDocument()
  })

  it('has the submit-btn class for hover animation', () => {
    render(<SubmitButton />)
    expect(screen.getByRole('button')).toHaveClass('submit-btn')
  })
})

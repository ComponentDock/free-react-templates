import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { EmailStep } from './EmailStep'

describe('EmailStep', () => {
  it('renders step indicator 2 / 4', () => {
    render(<EmailStep />)
    expect(screen.getByText('Step 2 / 4')).toBeInTheDocument()
  })

  it('renders email input field', () => {
    render(<EmailStep />)
    expect(screen.getByLabelText('Your Email')).toBeInTheDocument()
  })
})

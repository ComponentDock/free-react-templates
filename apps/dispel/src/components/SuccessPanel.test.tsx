import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SuccessPanel } from './SuccessPanel'

describe('SuccessPanel', () => {
  it('renders success heading', () => {
    render(<SuccessPanel />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Account Created')
  })

  it('renders success message', () => {
    render(<SuccessPanel />)
    expect(
      screen.getByText(/employee account has been successfully registered/i),
    ).toBeInTheDocument()
  })
})

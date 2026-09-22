import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TopBar } from './TopBar'

describe('TopBar', () => {
  it('renders contact info and social links', () => {
    render(<TopBar />)
    expect(screen.getByText('+00 1234 567')).toBeInTheDocument()
    expect(screen.getByText('emailsample@email.com')).toBeInTheDocument()
    for (const label of ['Facebook', 'Twitter', 'Instagram', 'Dribbble']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
  })
})

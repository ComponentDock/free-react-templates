import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { TopStrip } from './TopStrip'
import { phoneDisplay } from '../data'

describe('TopStrip', () => {
  it('renders the free-call label and phone number', () => {
    render(<TopStrip />)
    expect(screen.getByText('Free Call')).toBeInTheDocument()
    expect(screen.getByText(phoneDisplay)).toBeInTheDocument()
  })

  it('renders social tiles for Twitter, Facebook and Instagram', () => {
    render(<TopStrip />)
    for (const label of ['Twitter', 'Facebook', 'Instagram']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
  })
})

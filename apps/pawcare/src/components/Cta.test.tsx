import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Cta } from './Cta'

describe('Cta', () => {
  it('renders the support heading and phone number', () => {
    render(<Cta />)

    expect(screen.getByRole('heading', { level: 2 }).textContent).toBe('Why go with Pawcare?')
    expect(screen.getByText('+555 0000 565')).toBeInTheDocument()
  })
})

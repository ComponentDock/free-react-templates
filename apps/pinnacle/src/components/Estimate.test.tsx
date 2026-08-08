import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Estimate } from './Estimate'

describe('Estimate', () => {
  it('renders the estimate headline and CTA button', () => {
    render(<Estimate />)
    expect(
      screen.getByRole('heading', { level: 2, name: /Get to Know Project Estimate/ }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Get Estimate' })).toHaveAttribute('href', '#contact')
  })
})

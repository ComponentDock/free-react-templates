import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Impress } from './Impress'

describe('Impress', () => {
  it('renders the heading and the call-to-action button', () => {
    render(<Impress />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Got Impressed to our features?' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Start Free Trial' })).toBeInTheDocument()
  })
})

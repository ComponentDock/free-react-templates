import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders four service blocks with titles and descriptions', () => {
    render(<Services />)
    for (const title of [
      'Baseball Training',
      'Softball Training',
      'Basic Defense',
      'Basic Tactics',
    ]) {
      expect(screen.getByRole('heading', { name: title })).toBeInTheDocument()
    }
    expect(
      screen.getAllByText(
        /far far away|separated they live|a small river named duden|it is a paradisematic/i,
      ).length,
    ).toBe(4)
  })
})

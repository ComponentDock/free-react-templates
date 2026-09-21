import { render, screen } from '@testing-library/react'
import { Services } from './Services'
import { describe, expect, it } from 'vitest'

describe('Services', () => {
  it('renders heading and all 4 service cards', () => {
    render(<Services />)
    expect(screen.getByText('Our Process')).toBeInTheDocument()
    for (const title of [
      'Analyze Your Goal',
      'Work Hard On It',
      'Improve Your Performance',
      'Achieve Perfect Body',
    ]) {
      expect(screen.getByText(title)).toBeInTheDocument()
    }
  })
})

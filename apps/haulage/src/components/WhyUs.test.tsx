import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { WhyUs } from './WhyUs'
import { WHY_US } from '../data'

describe('WhyUs', () => {
  it('renders the heading, checklist and image block', () => {
    render(<WhyUs />)

    expect(screen.getByRole('heading', { level: 2, name: 'Why Us' })).toBeInTheDocument()

    for (const item of WHY_US) {
      expect(screen.getByText(item)).toBeInTheDocument()
    }

    expect(screen.getByRole('img', { name: 'Why choose Haulage' })).toBeInTheDocument()
  })
})

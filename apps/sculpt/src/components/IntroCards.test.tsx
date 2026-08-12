import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { IntroCards } from './IntroCards'
import { PROGRAMS } from '../data'

describe('IntroCards', () => {
  it('renders five program cards with price, month, and MORE link', () => {
    render(<IntroCards />)
    const cards = screen.getAllByRole('link', { name: /More/ })
    expect(cards).toHaveLength(PROGRAMS.length)
    expect(screen.getAllByText('$150')).toHaveLength(5)
    expect(screen.getAllByText('month')).toHaveLength(5)
    for (const program of PROGRAMS) {
      expect(screen.getByText(program.name)).toBeInTheDocument()
    }
  })
})

import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Stats } from './Stats'

describe('Stats', () => {
  it('renders the section heading', () => {
    render(<Stats />)
    expect(screen.getByRole('heading', { name: /Company achievement/i })).toBeInTheDocument()
  })

  it('renders all three stat values', () => {
    render(<Stats />)
    expect(screen.getByText('4000+')).toBeInTheDocument()
    expect(screen.getByText('300+')).toBeInTheDocument()
    expect(screen.getByText('95%')).toBeInTheDocument()
  })
})

import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Causes } from './Causes'

describe('Causes', () => {
  it('renders the heading and cause cards', () => {
    render(<Causes />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(/Causes/i)
    for (const title of ['Feed the Hungry', 'Shelter Project', 'Education Fund']) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }
  })

  it('shows donate links for each cause', () => {
    render(<Causes />)
    const links = screen.getAllByRole('link', { name: /Donate Now/i })
    expect(links.length).toBe(3)
  })
})

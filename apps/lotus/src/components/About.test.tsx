import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders a centered paragraph of studio copy', () => {
    render(<About />)
    const section = screen.getByRole('region', { name: 'About the studio' })
    expect(section.querySelector('p')).toHaveTextContent(/Lotus is a calm space for movement/)
  })
})

import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Intro } from './Intro'

describe('Intro', () => {
  it('renders the section heading', () => {
    render(<Intro />)
    expect(screen.getByRole('heading', { name: /Web Designer/i })).toBeInTheDocument()
  })

  it('renders the description text', () => {
    render(<Intro />)
    expect(screen.getByText(/Far far away, behind the word mountains/)).toBeInTheDocument()
  })
})

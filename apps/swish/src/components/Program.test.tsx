import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Program } from './Program'

describe('Program', () => {
  it('renders the recreational program split', () => {
    render(<Program />)

    expect(screen.getByText('Recreational Program')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        name: 'Deep which above behold an woter set a herb dry days.',
      }),
    ).toBeInTheDocument()
    expect(screen.getAllByText(/A created won't created subdue a every green/).length).toBe(2)
    expect(screen.getByRole('link', { name: /read more/ })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /Recreational basketball program/ })).toBeInTheDocument()
  })
})

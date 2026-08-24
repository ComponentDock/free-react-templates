import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders subtitle and heading', () => {
    render(<Hero />)
    expect(screen.getByText('Read This If You Want To Take Great Photographs.')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Folio Author')
  })

  it('has background image', () => {
    render(<Hero />)
    const bg = document.querySelector('[aria-hidden="true"]')
    expect(bg).toBeInTheDocument()
  })
})

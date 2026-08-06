import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline, subline, and purchase buttons over the darkened banner', () => {
    render(<Hero />)

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Appdeck')
    expect(screen.getByText(/Apps Landing Html Template/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Purchase Now/ })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /View Demo/ })).toBeInTheDocument()
  })
})

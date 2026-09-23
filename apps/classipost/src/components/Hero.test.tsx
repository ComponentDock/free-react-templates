import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders heading and subtitle', () => {
    render(<Hero />)
    expect(
      screen.getByRole('heading', { name: /Largest Classifieds In The World/i }),
    ).toBeInTheDocument()
    expect(screen.getByText(/You can buy, sell anything you want/)).toBeInTheDocument()
  })

  it('renders search bar with all inputs', () => {
    render(<Hero />)
    expect(screen.getByPlaceholderText(/What are you looking for/)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/Location/)).toBeInTheDocument()
    expect(screen.getByRole('combobox')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Search' })).toBeInTheDocument()
  })

  it('renders category options in dropdown', () => {
    render(<Hero />)
    const select = screen.getByRole('combobox')
    expect(select).toBeInTheDocument()
    const options = select.querySelectorAll('option')
    expect(options.length).toBe(7)
  })
})

import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BasicElements } from './BasicElements'

describe('BasicElements', () => {
  it('renders the section heading and buttons subheading', () => {
    render(<BasicElements />)
    expect(screen.getByRole('heading', { name: /Basic Elements/i })).toBeInTheDocument()
    expect(screen.getByText('Buttons')).toBeInTheDocument()
  })

  it('renders pick your style buttons', () => {
    render(<BasicElements />)
    expect(screen.getByRole('heading', { name: /Pick your style/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /^Default$/ })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /^Round$/ })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /With Icon/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Icon only button/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /^Simple$/ })).toBeInTheDocument()
  })

  it('renders pick your size buttons', () => {
    render(<BasicElements />)
    expect(screen.getByRole('heading', { name: /Pick your size/i })).toBeInTheDocument()
    const sizeButtons = screen.getAllByRole('button', { name: /^Small$/ })
    expect(sizeButtons.length).toBeGreaterThanOrEqual(2)
    const regularButtons = screen.getAllByRole('button', { name: /^Regular$/ })
    expect(regularButtons.length).toBeGreaterThanOrEqual(2)
    const largeButtons = screen.getAllByRole('button', { name: /^Large$/ })
    expect(largeButtons.length).toBeGreaterThanOrEqual(2)
  })

  it('renders pick your color buttons for all colors', () => {
    render(<BasicElements />)
    expect(screen.getByRole('heading', { name: /Pick your color/i })).toBeInTheDocument()
    for (const color of ['Primary', 'Success', 'Danger', 'Warning', 'Info', 'Light', 'Dark']) {
      const buttons = screen.getAllByRole('button', { name: color })
      expect(buttons.length).toBeGreaterThanOrEqual(2)
    }
  })

  it('renders the download CTA link', () => {
    render(<BasicElements />)
    expect(screen.getByRole('link', { name: /Download Tools/i })).toBeInTheDocument()
  })
})

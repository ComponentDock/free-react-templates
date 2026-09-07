import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the page heading and multi-select widget', () => {
    render(<App />)

    expect(document.title).toBe('Selkit — Multi-Select Form')

    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading.textContent).toBe('Multi-Select #6')
  })

  it('renders the multi-select widget with a trigger button', () => {
    render(<App />)

    const button = screen.getByRole('button', { name: /nothing selected/i })
    expect(button).toBeInTheDocument()
    expect(button).toHaveAttribute('aria-haspopup', 'listbox')
    expect(button).toHaveAttribute('aria-expanded', 'false')
  })

  it('renders the footer with Component Dock link', () => {
    render(<App />)

    const footer = screen.getByRole('contentinfo')
    expect(footer).toBeInTheDocument()

    const link = screen.getByRole('link', { name: /component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('has a light grey page background', () => {
    render(<App />)

    const wrapper = document.querySelector('.bg-page') as HTMLElement
    expect(wrapper).toBeInTheDocument()
  })
})

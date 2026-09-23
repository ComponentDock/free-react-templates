import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the loginveil heading', () => {
    render(<App />)
    expect(screen.getByText('Loginveil')).toBeInTheDocument()
  })

  it('sets the page title', () => {
    render(<App />)
    expect(document.title).toBe('Loginveil — Split-Screen Login')
  })

  it('renders the sign in form', () => {
    render(<App />)
    expect(screen.getByText('Sign In')).toBeInTheDocument()
  })

  it('renders the submit button', () => {
    render(<App />)
    expect(screen.getByText('Sign me in now')).toBeInTheDocument()
  })

  it('prevents default form submission', () => {
    render(<App />)
    const form = document.querySelector('form')!
    const event = new Event('submit', { bubbles: true, cancelable: true })
    const prevented = !fireEvent(form, event)
    expect(prevented).toBe(true)
  })

  it('renders the footer with Component Dock link', () => {
    render(<App />)
    const footer = screen.getByText('More templates at Component Dock')
    expect(footer).toBeInTheDocument()
    expect(footer).toHaveAttribute('href', 'https://www.componentdock.com/')
  })
})

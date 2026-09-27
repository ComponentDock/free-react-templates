import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { App } from './App'

describe('App', () => {
  beforeEach(() => {
    vi.restoreAllMocks()
  })

  it('sets the document title on mount', () => {
    const spy = vi.spyOn(document, 'title', 'set')
    render(<App />)
    expect(spy).toHaveBeenCalledWith('RegPad — Event Registration Form')
  })

  it('renders the Registration Info heading', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Registration Info')
  })

  it('renders five form fields', () => {
    render(<App />)
    expect(screen.getByPlaceholderText('Name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Birthdate')).toBeInTheDocument()
    expect(screen.getByRole('combobox')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Phone')).toBeInTheDocument()
  })

  it('renders a Submit button', () => {
    render(<App />)
    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument()
  })

  it('renders the Component Dock footer', () => {
    render(<App />)
    const footer = screen.getByRole('contentinfo')
    expect(footer).toBeInTheDocument()
    const link = screen.getByRole('link', { name: /component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('renders the gradient background on the page', () => {
    render(<App />)
    const wrapper = document.querySelector('.bg-gradient-to-t')
    expect(wrapper).toBeInTheDocument()
  })

  it('renders a photo placeholder image', () => {
    render(<App />)
    const photo = screen.getByRole('img', { name: /registration event photo/i })
    expect(photo).toBeInTheDocument()
  })
})

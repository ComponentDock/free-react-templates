import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the Coming Soon heading', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1, name: /coming soon/i })).toBeInTheDocument()
  })

  it('renders the maintenance description', () => {
    render(<App />)
    expect(
      screen.getByText(/our website is currently undergoing scheduled maintenance/i),
    ).toBeInTheDocument()
  })

  it('renders the countdown timer', () => {
    render(<App />)
    expect(screen.getByRole('timer', { name: /countdown timer/i })).toBeInTheDocument()
  })

  it('renders the Notify Us button', () => {
    render(<App />)
    expect(screen.getByRole('button', { name: /notify us/i })).toBeInTheDocument()
  })

  it('renders the social links section', () => {
    render(<App />)
    expect(screen.getByText(/follow us for update/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /facebook/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /twitter/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /instagram/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /pinterest/i })).toBeInTheDocument()
  })

  it('renders the Component Dock footer link', () => {
    render(<App />)
    const link = screen.getByRole('link', { name: /made with component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('sets the document title on mount', () => {
    render(<App />)
    expect(document.title).toBe('Vigil — Coming Soon Template')
  })

  it('renders a full-screen background image', () => {
    render(<App />)
    const img = document.querySelector('img[src*="picsum"]') as HTMLImageElement
    expect(img).toBeInTheDocument()
    expect(img.src).toContain('picsum.photos/seed/vigil/1600/900')
  })

  it('renders the dark overlay', () => {
    render(<App />)
    const overlay = document.querySelector('.bg-black\\/40')
    expect(overlay).toBeInTheDocument()
  })

  it('renders the inner shadow wrapper', () => {
    render(<App />)
    const wrapper = document.querySelector('[class*="shadow-"]')
    expect(wrapper).toBeInTheDocument()
  })
})

import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the full contact page', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Formwell')
    expect(screen.getByText('Get in touch with us')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument()
  })

  it('links to Component Dock in the footer', () => {
    render(<App />)
    const link = screen.getByRole('link', { name: /component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('renders the contact image', () => {
    render(<App />)
    const img = screen.getByRole('img', { name: /contact us/i })
    expect(img).toHaveAttribute('src', 'https://picsum.photos/seed/formwell/600/600')
  })
})

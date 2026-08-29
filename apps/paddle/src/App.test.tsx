import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the page header "Button #08"', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /button #08/i })).toBeInTheDocument()
  })

  it('renders the Tags & Pointers section', () => {
    render(<App />)
    expect(screen.getByText('New')).toBeInTheDocument()
    expect(screen.getByText('Sale')).toBeInTheDocument()
    expect(screen.getByText('Read more')).toBeInTheDocument()
    expect(screen.getByText('278,645')).toBeInTheDocument()
  })

  it('renders the Pick Your Style section', () => {
    render(<App />)
    const defaultButtons = screen.getAllByText('Default')
    expect(defaultButtons.length).toBeGreaterThanOrEqual(3)
  })

  it('renders the Like button with sr-only text', () => {
    render(<App />)
    expect(screen.getByLabelText('Like')).toBeInTheDocument()
    expect(screen.getByText('Like', { selector: '.sr-only' })).toBeInTheDocument()
  })

  it('renders the Pick Your Size section', () => {
    render(<App />)
    const smalls = screen.getAllByText('Default Small')
    const regulars = screen.getAllByText('Default Regular')
    const larges = screen.getAllByText('Default Large')
    expect(smalls.length).toBeGreaterThanOrEqual(2)
    expect(regulars.length).toBeGreaterThanOrEqual(2)
    expect(larges.length).toBeGreaterThanOrEqual(2)
  })

  it('renders the Pick Your Color section', () => {
    render(<App />)
    expect(screen.getByText('Default Primary')).toBeInTheDocument()
    expect(screen.getByText('Default Secondary')).toBeInTheDocument()
    expect(screen.getByText('Default Tertiary')).toBeInTheDocument()
    expect(screen.getByText('Default Gradient')).toBeInTheDocument()
  })

  it('renders the footer with Component Dock link', () => {
    render(<App />)
    const footer = screen.getByRole('contentinfo')
    expect(footer).toBeInTheDocument()
    const link = screen.getByRole('link', { name: /component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('renders the Pagination section', () => {
    render(<App />)
    expect(screen.getByTestId('pagination')).toBeInTheDocument()
    expect(screen.getByText('1')).toBeInTheDocument()
    expect(screen.getByText('5')).toBeInTheDocument()
  })

  it('renders the Dropdowns section', () => {
    render(<App />)
    expect(screen.getByTestId('dropdowns')).toBeInTheDocument()
    expect(screen.getByText('Primary', { selector: 'button' })).toBeInTheDocument()
    expect(screen.getByText('Secondary', { selector: 'button' })).toBeInTheDocument()
    expect(screen.getByText('Tertiary', { selector: 'button' })).toBeInTheDocument()
    expect(screen.getByText('Quarternary', { selector: 'button' })).toBeInTheDocument()
  })

  it('renders the Groups section', () => {
    render(<App />)
    expect(screen.getByTestId('groups')).toBeInTheDocument()
  })

  it('renders the Checkboxes & Radios section', () => {
    render(<App />)
    expect(screen.getByTestId('checkboxes-radios')).toBeInTheDocument()
    expect(screen.getByLabelText('Primary checkbox')).toBeInTheDocument()
    expect(screen.getByLabelText('Success checkbox')).toBeInTheDocument()
    expect(screen.getByLabelText('Primary radio')).toBeInTheDocument()
  })

  it('renders the Social Buttons section', () => {
    render(<App />)
    expect(screen.getByTestId('social-buttons')).toBeInTheDocument()
  })
})

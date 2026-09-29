import { render, screen, fireEvent } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the SearchBar component', () => {
    render(<App />)
    expect(screen.getByPlaceholderText('What are you looking for?')).toBeInTheDocument()
  })

  it('renders the Footer component', () => {
    render(<App />)
    expect(screen.getByText(/Made with/)).toBeInTheDocument()
  })

  it('has full viewport background image', () => {
    render(<App />)
    const root = document.querySelector('[class*="min-h-screen"]')
    expect(root).toBeInTheDocument()
    expect(root?.className).toContain('bg-[url(')
  })

  it('has background positioned at bottom-right', () => {
    render(<App />)
    const root = document.querySelector('[class*="min-h-screen"]')
    expect(root?.className).toContain('bg-bottom')
    expect(root?.className).toContain('bg-right')
  })

  it('has background no-repeat', () => {
    render(<App />)
    const root = document.querySelector('[class*="min-h-screen"]')
    expect(root?.className).toContain('bg-no-repeat')
  })

  it('has background size 100% width', () => {
    render(<App />)
    const root = document.querySelector('[class*="min-h-screen"]')
    expect(root?.className).toContain('bg-[length:100%_auto]')
  })

  it('sets page title on mount', () => {
    render(<App />)
    expect(document.title).toBe('SearchPea — Search Form Template')
  })

  it('has search role form element', () => {
    render(<App />)
    expect(screen.getByRole('search')).toBeInTheDocument()
  })

  it('form has max-width constraint', () => {
    render(<App />)
    const form = screen.getByRole('search')
    expect(form.className).toContain('max-w-[790px]')
  })

  it('main has padding-top to push content down', () => {
    render(<App />)
    const root = document.querySelector('[class*="min-h-screen"]')
    const main = root?.querySelector('main')
    expect(main?.className).toContain('pt-[24vh]')
  })

  it('form prevents default on submit', () => {
    render(<App />)
    const form = screen.getByRole('search')
    const submitEvent = new Event('submit', { bubbles: true, cancelable: true })
    const preventDefault = vi.fn()
    Object.defineProperty(submitEvent, 'preventDefault', { value: preventDefault })
    fireEvent(form, submitEvent)
    expect(preventDefault).toHaveBeenCalled()
  })

  it('renders hint text below the search card', () => {
    render(<App />)
    expect(screen.getByText('ex. Game, Music, Video, Photography')).toBeInTheDocument()
  })

  it('hint text has light gray color', () => {
    render(<App />)
    const hint = screen.getByText('ex. Game, Music, Video, Photography')
    expect(hint.className).toContain('text-searchpea-hint')
  })

  it('hint text has font size 15px', () => {
    render(<App />)
    const hint = screen.getByText('ex. Game, Music, Video, Photography')
    expect(hint.className).toContain('text-[15px]')
  })

  it('hint text has left padding', () => {
    render(<App />)
    const hint = screen.getByText('ex. Game, Music, Video, Photography')
    expect(hint.className).toContain('pl-[26px]')
  })
})

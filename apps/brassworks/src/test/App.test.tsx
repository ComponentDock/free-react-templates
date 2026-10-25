import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { App } from '../App'
import { THEME_KEY } from '../theme'

beforeEach(() => {
  window.localStorage.clear()
  document.documentElement.classList.remove('dark')
  vi.restoreAllMocks()
  vi.spyOn(window, 'matchMedia').mockImplementation(
    (query: string) =>
      ({
        matches: false,
        media: query,
        onchange: null,
        addEventListener() {},
        removeEventListener() {},
        addListener() {},
        removeListener() {},
        dispatchEvent: () => false,
      }) as unknown as MediaQueryList,
  )
})

describe('App', () => {
  it('composes the bands in the reference order with a single h1', () => {
    render(<App />)

    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1)
    expect(screen.getByRole('main')).toHaveAttribute('id', 'main-content')

    const sections = Array.from(document.querySelectorAll('main section[id]')).map(
      (section) => section.id,
    )
    expect(sections).toEqual(['featured', 'brands', 'trade', 'showroom', 'contact'])
  })

  it('renders the utility bar, the header rail and the footer attribution', () => {
    render(<App />)

    expect(screen.getByText('Next-day collection on stocked lines')).toBeInTheDocument()
    expect(
      screen.getByRole('navigation', { name: 'Catalogue navigation' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('link', { name: 'More templates at Component Dock' }),
    ).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('drives dark mode from the header toggle', async () => {
    const user = userEvent.setup()
    render(<App />)

    expect(document.documentElement).not.toHaveClass('dark')

    await user.click(screen.getByRole('button', { name: 'Toggle dark mode' }))

    expect(document.documentElement).toHaveClass('dark')
    expect(window.localStorage.getItem(THEME_KEY)).toBe('dark')
  })

  it('mounts the scroll chrome without a preloader once the document is complete', () => {
    render(<App />)

    expect(screen.getByRole('progressbar', { name: 'Reading progress' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Back to top' })).toBeInTheDocument()
    expect(screen.queryByTestId('preloader')).toBeNull()
  })
})

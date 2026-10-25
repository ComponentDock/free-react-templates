import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { act } from 'react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { App } from '../App'

afterEach(() => {
  vi.useRealTimers()
})

describe('App', () => {
  it('renders one page in the reference band order', () => {
    render(<App />)

    expect(screen.getByRole('link', { name: 'Skip to content' })).toHaveAttribute(
      'href',
      '#main-content',
    )

    for (const id of [
      'channels',
      'discussions',
      'members',
      'events',
      'pricing',
      'testimonials',
      'faq',
      'contact',
    ]) {
      expect(document.getElementById(id)).not.toBeNull()
    }

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toContain('Every good idea starts')
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('resolves every in-page anchor to an element that exists', () => {
    render(<App />)

    const anchors = Array.from(document.querySelectorAll('a[href^="#"]'))
    expect(anchors.length).toBeGreaterThan(30)

    for (const anchor of anchors) {
      const id = anchor.getAttribute('href')!.slice(1)
      expect(document.getElementById(id)).not.toBeNull()
    }
  })

  it('dismisses the cookie strip into state and frees the phone action bar', async () => {
    const user = userEvent.setup()
    render(<App />)

    expect(screen.queryByRole('dialog', { name: 'Cookie notice' })).not.toBeInTheDocument()
    expect(screen.getByTestId('mobile-cta')).toBeInTheDocument()

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 1600))
    })

    expect(screen.getByRole('dialog', { name: 'Cookie notice' })).toBeInTheDocument()
    expect(screen.queryByTestId('mobile-cta')).not.toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: 'Accept All' }))

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    expect(screen.getByTestId('mobile-cta')).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Back to top' }))
  })
})

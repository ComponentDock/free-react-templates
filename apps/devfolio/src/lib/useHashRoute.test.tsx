import { act, render, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it } from 'vitest'
import { RESUME_HASH, useHashRoute } from './useHashRoute'

function Probe() {
  const hash = useHashRoute()
  return <p data-testid="hash">{hash === '' ? 'home' : hash}</p>
}

describe('useHashRoute', () => {
  beforeEach(() => {
    window.history.replaceState(null, '', window.location.pathname)
  })

  it('starts on the home route', () => {
    render(<Probe />)
    expect(screen.getByTestId('hash')).toHaveTextContent('home')
  })

  it('starts on the resume route when the URL already carries it', () => {
    window.history.replaceState(null, '', `#${RESUME_HASH.slice(1)}`)
    render(<Probe />)
    expect(screen.getByTestId('hash')).toHaveTextContent(RESUME_HASH)
  })

  it('follows hashchange events', () => {
    render(<Probe />)
    act(() => {
      window.history.replaceState(null, '', '#/resume')
      window.dispatchEvent(new Event('hashchange'))
    })
    expect(screen.getByTestId('hash')).toHaveTextContent(RESUME_HASH)
  })

  it('stops listening after unmount', () => {
    const { unmount } = render(<Probe />)
    unmount()
    window.dispatchEvent(new Event('hashchange'))
    expect(screen.queryByTestId('hash')).toBeNull()
  })
})

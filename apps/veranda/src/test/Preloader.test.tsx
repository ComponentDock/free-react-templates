import { render, screen } from '@testing-library/react'
import { act } from 'react'
import { afterEach, describe, expect, it } from 'vitest'
import { Preloader } from '../components/Preloader'
import { setReadyState } from '../test/helpers'

afterEach(() => {
  setReadyState('complete')
})

describe('Preloader', () => {
  it('paints while the document is still loading, then clears on load', () => {
    setReadyState('loading')
    render(<Preloader />)

    expect(screen.getByTestId('preloader')).toBeInTheDocument()

    act(() => {
      window.dispatchEvent(new Event('load'))
    })

    expect(screen.queryByTestId('preloader')).not.toBeInTheDocument()
  })

  it('never paints once the document is already complete', () => {
    setReadyState('complete')
    render(<Preloader />)

    expect(screen.queryByTestId('preloader')).not.toBeInTheDocument()
  })
})

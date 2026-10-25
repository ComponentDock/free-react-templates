import { act, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import { useScrollSpy } from './use-scroll-spy'

const IDS = ['alpha', 'beta'] as const

function Probe() {
  const active = useScrollSpy(IDS)
  return <p data-testid="active">{active ?? 'none'}</p>
}

function place(id: string, top: number) {
  const section = document.createElement('section')
  section.id = id
  section.getBoundingClientRect = () => ({ top }) as DOMRect
  document.body.appendChild(section)
  return section
}

afterEach(() => {
  for (const node of Array.from(document.querySelectorAll('section'))) {
    node.remove()
  }
})

describe('useScrollSpy', () => {
  it('reports nothing when no band exists yet', () => {
    render(<Probe />)
    expect(screen.getByTestId('active')).toHaveTextContent('none')
  })

  it('lights the last band that has passed the offset, then clears on resize', () => {
    const alpha = place('alpha', -50)
    place('beta', 800)
    render(<Probe />)

    expect(screen.getByTestId('active')).toHaveTextContent('alpha')

    alpha.getBoundingClientRect = () => ({ top: 900 }) as DOMRect
    act(() => {
      window.dispatchEvent(new Event('resize'))
    })
    expect(screen.getByTestId('active')).toHaveTextContent('none')
  })
})

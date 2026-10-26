import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { DifficultyMeter } from './DifficultyMeter'

function dots(container: HTMLElement) {
  return [...container.querySelectorAll('i')]
}

function filled(container: HTMLElement) {
  return dots(container).filter((dot) => dot.className.includes('bg-accent'))
}

describe('DifficultyMeter', () => {
  it('draws three dots and fills the first two for Medium', () => {
    const { container } = render(<DifficultyMeter level={2} label="Medium" />)

    expect(dots(container)).toHaveLength(3)
    expect(filled(container)).toHaveLength(2)
    expect(dots(container)[0]!.className).toContain('bg-accent')
    expect(dots(container)[1]!.className).toContain('bg-accent')
    expect(dots(container)[2]!.className).not.toContain('bg-accent')
    expect(screen.getByText('Medium')).toBeInTheDocument()
  })

  it('fills one dot for Easy and all three for Involved', () => {
    const easy = render(<DifficultyMeter level={1} label="Easy" />)
    expect(filled(easy.container)).toHaveLength(1)
    expect(screen.getByText('Easy')).toBeInTheDocument()
    easy.unmount()

    const involved = render(<DifficultyMeter level={3} label="Involved" />)
    expect(filled(involved.container)).toHaveLength(3)
    expect(screen.getByText('Involved')).toBeInTheDocument()
  })

  it('sizes every dot as a 7 px accent ring', () => {
    const { container } = render(<DifficultyMeter level={2} label="Medium" />)

    for (const dot of dots(container)) {
      expect(dot.className).toContain('h-[7px]')
      expect(dot.className).toContain('w-[7px]')
      expect(dot.className).toContain('rounded-full')
      expect(dot.className).toContain('border-[1.5px]')
      expect(dot.className).toContain('border-accent')
    }
    expect(container.querySelector('span')!.className).toContain('inline-flex')
    expect(container.querySelector('span')!.className).toContain('gap-[3px]')
  })

  it('hides the dots from assistive tech but states the ordinal', () => {
    render(<DifficultyMeter level={2} label="Medium" />)

    const dotRow = screen.getByText('Medium').previousElementSibling!.previousElementSibling!
    expect(dotRow).toHaveAttribute('aria-hidden', 'true')
    expect(screen.getByText(/Level 2 of 3/).className).toContain('sr-only')
  })

  it('keeps the word visible after the hidden ordinal', () => {
    render(<DifficultyMeter level={3} label="Involved" />)

    const ordinal = screen.getByText(/Level 3 of 3/)
    const word = screen.getByText('Involved')
    expect(ordinal.nextElementSibling).toBe(word)
    expect(word.className).not.toContain('sr-only')
  })
})

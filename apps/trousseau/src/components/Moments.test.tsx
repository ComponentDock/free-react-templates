import { fireEvent, render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MOMENTS, MOMENTS_HEADING } from '../lib/site'
import { Moments } from './Moments'

function expandControls(): HTMLElement[] {
  return screen.getAllByRole('button', { name: /^Enlarge: / })
}

function firstControl(): HTMLElement {
  return expandControls()[0] as HTMLElement
}

describe('the moments band', () => {
  it('shows six frames, each covered by an overlay with an expand control', () => {
    const { container } = render(<Moments />)

    expect(screen.getByRole('heading', { name: MOMENTS_HEADING })).toBeInTheDocument()
    expect(container.querySelectorAll('img')).toHaveLength(6)
    expect(container.querySelectorAll('[class*="basis-1/2"]')).toHaveLength(6)

    const controls = expandControls()
    const classes = controls.map((control) => (control.getAttribute('class') ?? '').split(' '))

    expect(controls).toHaveLength(6)
    expect(classes.every((tokens) => tokens.includes('opacity-0'))).toBe(true)
    expect(classes.every((tokens) => tokens.includes('group-hover:opacity-100'))).toBe(true)
    expect(classes.every((tokens) => tokens.includes('bg-black/50'))).toBe(true)
  })

  it('gives every frame its own photograph and caption', () => {
    const { container } = render(<Moments />)

    const sources = Array.from(container.querySelectorAll('img')).map((image) => image.src)

    expect(sources).toEqual(
      MOMENTS.map((moment) => expect.stringContaining(`seed/${moment.photo}/600/600`)),
    )

    for (const moment of MOMENTS) {
      expect(screen.getByAltText(moment.caption)).toBeInTheDocument()
    }
  })

  it('opens a photograph at full size and closes it with the labelled control', async () => {
    const user = userEvent.setup()
    render(<Moments />)

    expect(screen.queryByRole('dialog')).toBeNull()

    await user.click(firstControl())

    const dialog = screen.getByRole('dialog', { name: 'Enlarged photograph' })

    expect(within(dialog).getByRole('img')).toHaveAttribute(
      'src',
      expect.stringContaining('seed/trousseau-4/1200/800'),
    )
    expect(dialog).toHaveAttribute('aria-modal', 'true')

    await user.click(screen.getByRole('button', { name: 'Close the enlarged photograph' }))

    expect(screen.queryByRole('dialog')).toBeNull()
  })

  it('closes the enlarged photograph on Escape and on no other key', async () => {
    const user = userEvent.setup()
    render(<Moments />)

    await user.click(firstControl())

    fireEvent.keyDown(document, { key: 'ArrowDown' })
    expect(screen.queryByRole('dialog')).not.toBeNull()

    fireEvent.keyDown(document, { key: 'Escape' })
    expect(screen.queryByRole('dialog')).toBeNull()
  })
})

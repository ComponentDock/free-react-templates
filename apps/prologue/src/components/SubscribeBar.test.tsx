import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { EMAIL_MESSAGE } from '../lib/validation'
import { SubscribeBar } from './SubscribeBar'

function renderBar() {
  const view = render(<SubscribeBar />)

  return { ...view, form: screen.getByTestId('subscribe-bar') }
}

describe('SubscribeBar', () => {
  it('lays the 650px bar out with its label tab and arrow lane', () => {
    const { form } = renderBar()

    expect(form).toHaveClass('mx-0', 'my-[10px]', 'max-w-full')
    expect(form).toHaveAttribute('novalidate')

    const track = screen.getByTestId('subscribe-track')

    expect(track).toHaveClass(
      'group/track',
      'relative',
      'h-[80px]',
      'w-[650px]',
      'max-w-[calc(100%_+_110px)]',
      'max-[992px]:max-w-full',
    )

    const field = screen.getByLabelText('Subscribe Now:')

    expect(field).toHaveValue('')
    expect(track.children[0]).toBe(field)
    expect(track.children[1]).toBe(screen.getByTestId('subscribe-label'))
    expect(track.children[2]).toBe(screen.getByTestId('submit-arrow'))
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
  })

  it('blocks an empty submit and reveals the bubble', () => {
    const { form } = renderBar()
    const before = window.location.href

    expect(fireEvent.submit(form)).toBe(false)

    const field = screen.getByLabelText('Subscribe Now:')

    expect(screen.getByRole('alert')).toHaveTextContent(EMAIL_MESSAGE)
    expect(field).toHaveAttribute('aria-invalid', 'true')
    expect(field).toHaveAttribute('aria-describedby', 'prologue-email-error')
    expect(window.location.href).toBe(before)
  })

  it('rejects a malformed address with the same single line', () => {
    const { form } = renderBar()

    fireEvent.change(screen.getByLabelText('Subscribe Now:'), {
      target: { value: 'ada@example' },
    })

    expect(fireEvent.submit(form)).toBe(false)
    expect(screen.getByRole('alert')).toHaveTextContent(EMAIL_MESSAGE)
  })

  it('accepts a good address without navigating and keeps no success state', () => {
    const { form } = renderBar()
    const before = window.location.href

    fireEvent.change(screen.getByLabelText('Subscribe Now:'), {
      target: { value: 'ada@example.com' },
    })

    expect(fireEvent.submit(form)).toBe(false)
    expect(window.location.href).toBe(before)
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })

  it('drops the bubble again when the next submit is valid', () => {
    const { form } = renderBar()

    fireEvent.submit(form)
    expect(screen.getByRole('alert')).toBeInTheDocument()

    fireEvent.change(screen.getByLabelText('Subscribe Now:'), {
      target: { value: 'ada@example.com' },
    })
    fireEvent.submit(form)

    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
  })

  it('clears the error state once the field is focused', () => {
    const { form } = renderBar()

    fireEvent.submit(form)
    expect(screen.getByRole('alert')).toBeInTheDocument()

    fireEvent.focus(screen.getByLabelText('Subscribe Now:'))

    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
  })

  it('keeps the typed value in state', () => {
    renderBar()

    fireEvent.change(screen.getByLabelText('Subscribe Now:'), {
      target: { value: 'ada@example.com' },
    })

    expect(screen.getByLabelText('Subscribe Now:')).toHaveValue('ada@example.com')
  })

  it('accepts a className override on the form', () => {
    render(<SubscribeBar className="my-0" />)

    expect(screen.getByTestId('subscribe-bar')).toHaveClass('my-0')
  })
})

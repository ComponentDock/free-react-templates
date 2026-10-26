import { useEffect, useRef, useState } from 'react'
import type { FormEvent, KeyboardEvent, RefObject } from 'react'

export const EMPTY_MESSAGE = 'Write a comment first.'
export const POSTED_MESSAGE = 'Comment posted.'

export interface CommentForm {
  open: boolean
  value: string
  input: RefObject<HTMLInputElement | null>
  toggleButton: RefObject<HTMLButtonElement | null>
  postButton: RefObject<HTMLButtonElement | null>
  change: (next: string) => void
  toggle: () => void
  submit: (event: FormEvent<HTMLFormElement>) => void
  escape: (event: KeyboardEvent<HTMLFormElement>) => void
}

/**
 * One post's inline reply row. The form is hidden at rest and in flow when
 * open, so opening it *grows* the card instead of covering the action bar.
 * `Escape` closes from any control inside the form and hands focus back to the
 * Comment button; an empty submit is announced instead of silently ignored.
 */
export function useCommentForm(announce: (message: string) => void): CommentForm {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState('')
  const input = useRef<HTMLInputElement>(null)
  const toggleButton = useRef<HTMLButtonElement>(null)
  const postButton = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (open) input.current!.focus()
  }, [open])

  const close = () => {
    setOpen(false)
    toggleButton.current!.focus()
  }

  const toggle = () => {
    if (open) {
      close()
      return
    }

    setOpen(true)
  }

  const change = (next: string) => setValue(next)

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (value.trim() === '') {
      announce(EMPTY_MESSAGE)
      input.current!.focus()
      return
    }

    setValue('')
    announce(POSTED_MESSAGE)
    postButton.current!.focus()
  }

  const escape = (event: KeyboardEvent<HTMLFormElement>) => {
    if (event.key !== 'Escape') return
    event.preventDefault()
    close()
  }

  return { open, value, input, toggleButton, postButton, change, toggle, submit, escape }
}

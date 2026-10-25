import { useId, useState, type FormEvent } from 'react'
import { Button } from '@free-react-templates/ui'
import { SUBSCRIBE } from '../content'
import { isEmail } from '../lib/forms'
import { Container, Duotone } from './ui'

interface Message {
  readonly tone: 'error' | 'ok'
  readonly text: string
}

/**
 * 519px photo band. The reference pins the green button over the field's right
 * end with `position: absolute` and clips the pair below 992px; here the two
 * are a flex row with a gap, so they never overlap at any width.
 */
export function Subscribe() {
  const inputId = useId()
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState<Message | null>(null)

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!isEmail(email)) {
      setMessage({ tone: 'error', text: SUBSCRIBE.error })
      return
    }
    setMessage({ tone: 'ok', text: SUBSCRIBE.success })
    setEmail('')
  }

  return (
    <section id="subscribe" className="relative overflow-hidden">
      <Duotone
        src="https://picsum.photos/seed/keynoter-subscribe/1920/1050"
        alt="Delegates in the venue lobby between sessions"
        className="absolute inset-0 h-full w-full"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-navy/30" />
      <div className="relative py-[70px] text-white lg:pt-[95px] lg:pb-[120px]">
        <Container>
          <h2 className="text-[34px] leading-[1.2] font-black text-white md:text-[44px] lg:text-[60px]">
            {SUBSCRIBE.heading}
          </h2>
          <p className="mt-4 mb-[40px] max-w-[830px] text-[18px] leading-[1.7] text-white lg:mt-[18px] lg:mb-[82px]">
            {SUBSCRIBE.copy}
          </p>
          <form onSubmit={submit} noValidate className="max-w-[1030px]">
            <label htmlFor={inputId} className="sr-only">
              Email address
            </label>
            <div className="flex flex-col gap-4 md:flex-row md:items-stretch md:gap-[20px]">
              <input
                id={inputId}
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder={SUBSCRIBE.placeholder}
                aria-invalid={message?.tone === 'error'}
                className="h-[62px] w-full rounded-[6px] border-2 border-field bg-transparent px-[35px] text-[18px] text-white placeholder:text-white/35 placeholder:italic md:max-w-[830px]"
              />
              <Button
                type="submit"
                className="h-[62px] w-full shrink-0 rounded-[6px] bg-action px-8 text-[18px] font-black tracking-[1.6px] text-white uppercase hover:bg-action-dark md:w-[200px]"
              >
                {SUBSCRIBE.submit}
              </Button>
            </div>
            {message ? (
              <p
                role={message.tone === 'error' ? 'alert' : 'status'}
                className={
                  message.tone === 'error'
                    ? 'mt-4 text-[16px] text-[#ffd6e4]'
                    : 'mt-4 text-[16px] text-white'
                }
              >
                {message.text}
              </p>
            ) : null}
          </form>
        </Container>
      </div>
    </section>
  )
}

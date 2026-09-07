import { FormCheckbox } from './FormCheckbox'

export function Step3() {
  return (
    <div className="flex flex-col gap-4">
      {/* Textarea */}
      <div className="flex flex-col">
        <label htmlFor="message" className="sr-only">
          Your message
        </label>
        <textarea
          id="message"
          placeholder="Your message here!"
          rows={4}
          className="resize-none border-b-2 border-line bg-transparent px-0 py-2 text-[15px] text-input placeholder-text outline-none transition-colors focus:border-sand"
        />
      </div>

      {/* Terms consent */}
      <FormCheckbox
        id="terms"
        label="Please accept terms and conditions?"
        defaultChecked={true}
        linkText="terms and conditions"
        linkHref="#terms"
        className="mt-[24px] w-[63%]"
      />
    </div>
  )
}

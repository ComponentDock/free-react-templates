export function ReviewStep() {
  return (
    <div>
      <div className="flex gap-8">
        <figure className="m-0 p-0 ml-[10px] mb-[-126px] shrink-0 hidden md:block">
          <img
            src="https://picsum.photos/seed/scout-review/200/280"
            alt="Review illustration"
            className="w-[200px]"
          />
        </figure>
        <div className="flex-1">
          <label
            htmlFor="your_review"
            className="block text-ink text-[22px] font-bold m-0 pb-[15px]"
          >
            Your Review
          </label>
          <textarea
            id="your_review"
            name="your_review"
            placeholder="Write your comment here"
            className="w-full h-[178px] border border-line rounded-[5px] p-3 font-sans text-ink text-sm resize-none outline-none focus:border-accent transition-colors"
          />
        </div>
      </div>
    </div>
  )
}

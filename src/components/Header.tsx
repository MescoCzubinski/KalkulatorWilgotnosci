export default function Header({
  title,
  resetBtnText,
  reset,
  showResetButton = true,
}: {
  title: string;
  resetBtnText: string;
  reset?: (value: boolean) => void;
  showResetButton?: boolean;
}) {
  if (!showResetButton && reset) {
    reset(false);
  }

  return (
    <div className="flex w-full items-center justify-center gap-5 ">
      <h1 className="text-3xl w-fit font-semibold text-left flex-wrap">
        {title}
      </h1>
      <div className="flex flex-wrap gap-2 items-center justify-center">
        {showResetButton && (
          <button
            type="button"
            onClick={() => {
              reset?.(true);
            }}
            className="text-xl border-2 rounded-full p-2 px-3 bg-[var(--bg-color)] cursor-pointer hover:shadow-[0_0_10px_var(--primary-color)] transition-shadow outline-0"
            aria-label={resetBtnText}
            title={resetBtnText}
          >
            Resetuj
          </button>
        )}
      </div>
    </div>
  );
}

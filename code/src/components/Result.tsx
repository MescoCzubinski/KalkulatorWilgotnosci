export default function Result({
  title,
  result,
  unit,
}: {
  title?: string;
  result: string;
  unit?: string;
}) {
  return (
    <div className="flex items-center gap-2 text-xl font-semibold cursor-default mb-4">
      <h1 className="flex-1">{title}</h1>
      <h1 className="text-[var(--secondary-color)] font-bold flex-1 text-center text-wrap">
        {result}
        {unit && result !== "uzupełnij wartości" && (
          <span className="text-[var(--secondary-color)] font-bold ml-1">
            {unit}
          </span>
        )}
      </h1>
    </div>
  );
}

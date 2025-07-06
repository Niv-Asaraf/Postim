import { PUBLISHED_BY, PUBLISHED_ON } from "@/data/appTexts";
import { getDayNumber, getMonthName, getYear } from "@/utils/dateFunctions";

interface PostStampProps {
  author: string;
  date: string;
  className?: string;
}
export default function PostStamp({ author, date, className }: PostStampProps) {
  const fullDate = `${getMonthName(date)} ${getDayNumber(date)}, ${getYear(
    date
  )}`;
  return (
    <div className={`flex gap-2 flex-wrap ${className}`}>
      <h3 className="text-gray-300">{PUBLISHED_BY}</h3>
      <h3 className="text-gray-500">{author}</h3>
      <h3 className="text-gray-300">
        {PUBLISHED_ON} {fullDate}
      </h3>
    </div>
  );
}

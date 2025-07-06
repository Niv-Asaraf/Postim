interface CategoryProps {
  name: string;
}
export default function Category({ name }: CategoryProps) {
  return (
    <div className="bg-blue-300 py-2 px-4 rounded-3xl text-sm md:text-base">
      {name}
    </div>
  );
}

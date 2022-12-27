interface Props {
    skill: string;
    percentage: string;
}

export const SkillsItem = ({ skill, percentage }: Props) => {
  return (
    <>
      <div className="flex items-end justify-between pt-6">
        <h4 className="font-body font-semibold uppercase text-black">
          { skill }
        </h4>
        <h3 className="font-body text-3xl font-bold text-primary">{percentage}</h3>
      </div>
      <div className="mt-2 h-3 w-full rounded-full bg-slate-300">
        <div
          className="h-3 rounded-full bg-indigo-500"
          style={{ width: percentage }}
        ></div>
      </div>
    </>
  );
};

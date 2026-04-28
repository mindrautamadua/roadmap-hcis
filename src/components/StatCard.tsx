interface Props {
  value: string;
  label: string;
  icon: string;
  color: string;
}

export default function StatCard({ value, label, icon, color }: Props) {
  return (
    <div className="glass rounded-2xl p-4 flex flex-col items-center text-center gap-1.5">
      <div className={`text-2xl`}>{icon}</div>
      <div className={`text-xl font-bold ${color}`}>{value}</div>
      <div className="text-xs text-slate-400 leading-tight">{label}</div>
    </div>
  );
}

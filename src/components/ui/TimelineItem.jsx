import Badge from "@/components/ui/badge";

const TimelineItem = ({ company, location, type, duration, roles }) => {
  return (
    <div className="relative pl-8">
      {/* Bulatan timeline */}
      <div className="absolute left-0 top-1.5 h-3 w-3 rounded-full bg-neutral-900 dark:bg-white" />

      <div className="space-y-6">
        {/* Info perusahaan */}
        <div>
          <div className="font-semibold text-lg">{company}</div>
          <div className="text-sm text-neutral-500 dark:text-neutral-400">
            {location} · {type} · {duration}
          </div>
        </div>

        {/* Role di perusahaan */}
        <div className="space-y-8">
          {roles.map((role, idx) => (
            <div key={idx} className="space-y-3">
              {/* Jabatan & Tahun */}
              <div>
                <div className="font-medium">{role.title}</div>
                <div className="text-sm text-neutral-500 dark:text-neutral-400">
                  {role.year}
                </div>
              </div>

              {/* Deskripsi */}
              <p className="text-sm leading-relaxed">{role.desc}</p>

              {/* Skills badge */}
              {role.skills && role.skills.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {role.skills.map((s, i) => (
                    <Badge key={i} color={s.color || "blue"}>
                      {s.name}
                    </Badge>
                  ))}
                </div>
              )}

              {/* Achievement */}
              {role.achievement && (
                <div className="text-xs text-emerald-600 dark:text-emerald-400">
                  🎉 {role.achievement}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;

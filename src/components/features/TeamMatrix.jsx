"use client";

import { teamsData } from "@/data/teamsData";

/**
 * Tabel matrix perbandingan 7 tim: fokus, jumlah role, level rata-rata, dan contoh tools.
 * Cocok untuk halaman "Perbandingan Tim" agar pengunjung cepat paham beda tiap tim.
 */
export default function TeamMatrix() {
  return (
    <div className="w-full overflow-x-auto rounded-xl border border-neutral-800">
      <table className="w-full min-w-[720px] border-collapse text-sm">
        <thead>
          <tr className="bg-neutral-900 text-left text-neutral-300">
            <th className="px-4 py-3 font-semibold">Tim</th>
            <th className="px-4 py-3 font-semibold">Fokus Utama</th>
            <th className="px-4 py-3 font-semibold">Jumlah Role</th>
            <th className="px-4 py-3 font-semibold">Contoh Tools</th>
            <th className="px-4 py-3 font-semibold">Sertifikasi Umum</th>
          </tr>
        </thead>
        <tbody>
          {teamsData.map((team) => {
            const toolSample = [...new Set(team.roles.flatMap((r) => r.tools))].slice(0, 3);
            const certSample = [...new Set(team.roles.flatMap((r) => r.certifications))].slice(0, 3);

            return (
              <tr key={team.id} className="border-t border-neutral-800 hover:bg-neutral-900/40">
                <td className="px-4 py-3 font-medium">
                  <span
                    className="inline-block h-2.5 w-2.5 rounded-full align-middle"
                    style={{ backgroundColor: team.color }}
                  />
                  <span className="ml-2 align-middle">{team.name}</span>
                </td>
                <td className="px-4 py-3 text-neutral-300">{team.mission}</td>
                <td className="px-4 py-3 text-neutral-300">{team.roles.length} role</td>
                <td className="px-4 py-3 text-neutral-300">{toolSample.join(", ") || "-"}</td>
                <td className="px-4 py-3 text-neutral-300">{certSample.join(", ") || "-"}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
